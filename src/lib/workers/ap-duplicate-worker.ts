type WorkerMessage =
  | {
      type: "parse-headers";
      file: File;
    }
  | {
      type: "process";
      file: File;
      mapping: ColumnMapping;
      options: DetectionOptions;
    };

type ColumnMapping = {
  vendorId?: string;
  vendorName?: string;
  invoiceNumber?: string;
  amount?: string;
  invoiceDate?: string;
  poNumber?: string;
  paymentReference?: string;
  bankAccount?: string;
};

type DetectionOptions = {
  dateWindowDays: number;
  amountTolerance: number;
};

type WorkerProgress = {
  type: "progress";
  stage: string;
  progress: number;
};

type WorkerHeaders = {
  type: "headers";
  headers: string[];
};

type WorkerResult = {
  type: "result";
  summary: SummaryResult;
  groups: DuplicateGroup[];
  rows: DuplicateRow[];
  rawHeaders: string[];
};

type WorkerError = {
  type: "error";
  message: string;
};

type ParsedRow = {
  rowIndex: number;
  vendorId?: string;
  vendorName?: string;
  vendorKey?: string;
  vendorKeySource: "id" | "name";
  invoiceNumber?: string;
  invoiceNumberNorm?: string;
  amount?: number;
  invoiceDate?: string;
  invoiceDateMs?: number | null;
  poNumber?: string;
  paymentReference?: string;
  bankAccount?: string;
  raw: Record<string, string>;
};

type DuplicateGroup = {
  id: string;
  confidence: "High" | "Medium";
  rule: string;
  fieldsMatched: string[];
  vendorKeySource: "id" | "name";
  rowIndexes: number[];
  totalAmount: number;
  exposure: number;
  rows: DuplicateRow[];
};

type DuplicateRow = {
  groupId: string;
  rowIndex: number;
  confidence: "High" | "Medium";
  reason: string;
  vendor: string;
  invoiceNumber: string;
  amount: number | null;
  invoiceDate: string | null;
  vendorKeySource: "id" | "name";
  poNumber: string | null;
  paymentReference: string | null;
  bankAccount: string | null;
};

type SummaryResult = {
  totalRows: number;
  duplicateGroups: number;
  exposure: number;
  byConfidence: {
    high: number;
    medium: number;
  };
};

type CsvParseState = {
  inQuotes: boolean;
  field: string;
  row: string[];
};

const DEFAULT_CHUNK_SIZE = 256 * 1024;

const ctx: DedicatedWorkerGlobalScope = self as unknown as DedicatedWorkerGlobalScope;

ctx.onmessage = (event: MessageEvent<WorkerMessage>) => {
  try {
    if (event.data.type === "parse-headers") {
      const headers = readHeaders(event.data.file);
      ctx.postMessage({ type: "headers", headers } satisfies WorkerHeaders);
      return;
    }

    if (event.data.type === "process") {
      const { file, mapping, options } = event.data;
      const result = processFile(file, mapping, options);
      ctx.postMessage(result satisfies WorkerResult);
      return;
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown worker error";
    ctx.postMessage({ type: "error", message } satisfies WorkerError);
  }
};

function readHeaders(file: File): string[] {
  const reader = new FileReaderSync();
  const chunk = reader.readAsText(file.slice(0, DEFAULT_CHUNK_SIZE));
  const state: CsvParseState = { inQuotes: false, field: "", row: [] };
  const rows = parseCsvChunk(chunk, state);
  if (rows.length === 0) {
    return [];
  }
  const headerRow = rows[0];
  if (state.row.length > 0 && state.field.length > 0 && rows.length === 0) {
    headerRow.push(state.field);
  }
  return sanitizeHeaders(headerRow);
}

function processFile(
  file: File,
  mapping: ColumnMapping,
  options: DetectionOptions
): WorkerResult {
  const reader = new FileReaderSync();
  const state: CsvParseState = { inQuotes: false, field: "", row: [] };
  const headers: string[] = [];
  const rows: ParsedRow[] = [];
  let headerSet = false;
  let offset = 0;
  let rowIndex = 1;

  while (offset < file.size) {
    const chunk = reader.readAsText(file.slice(offset, offset + DEFAULT_CHUNK_SIZE));
    const parsedRows = parseCsvChunk(chunk, state);
    for (const row of parsedRows) {
      if (!headerSet) {
        headers.push(...sanitizeHeaders(row));
        headerSet = true;
        continue;
      }
      const parsedRow = mapRow(headers, row, mapping, rowIndex);
      if (parsedRow) {
        rows.push(parsedRow);
        rowIndex += 1;
      }
    }
    offset += DEFAULT_CHUNK_SIZE;
    postProgress("Parsing CSV", Math.min(offset / file.size, 1));
  }

  if (state.row.length > 0 || state.field.length > 0) {
    const finalRow = [...state.row, state.field];
    if (!headerSet) {
      headers.push(...sanitizeHeaders(finalRow));
      headerSet = true;
    } else {
      const parsedRow = mapRow(headers, finalRow, mapping, rowIndex);
      if (parsedRow) {
        rows.push(parsedRow);
      }
    }
  }

  postProgress("Detecting duplicates", 0.1);
  const { groups, duplicateRows, summary } = detectDuplicates(rows, options);

  return {
    type: "result",
    summary,
    groups,
    rows: duplicateRows,
    rawHeaders: headers
  };
}

function parseCsvChunk(text: string, state: CsvParseState): string[][] {
  const rows: string[][] = [];
  let { inQuotes, field, row } = state;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];

    if (char === "\"") {
      const nextChar = text[i + 1];
      if (inQuotes && nextChar === "\"") {
        field += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(field);
      field = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && text[i + 1] === "\n") {
        i += 1;
      }
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
      continue;
    }

    field += char;
  }

  state.inQuotes = inQuotes;
  state.field = field;
  state.row = row;

  return rows;
}

function sanitizeHeaders(headers: string[]): string[] {
  if (headers.length === 0) return headers;
  const cleaned = headers.map((value) => value.trim());
  cleaned[0] = cleaned[0].replace(/^\uFEFF/, "");
  return cleaned;
}

function mapRow(
  headers: string[],
  row: string[],
  mapping: ColumnMapping,
  rowIndex: number
): ParsedRow | null {
  const raw: Record<string, string> = {};
  headers.forEach((header, index) => {
    raw[header] = row[index]?.trim() ?? "";
  });

  const vendorId = getValue(raw, mapping.vendorId);
  const vendorName = getValue(raw, mapping.vendorName);
  const vendorKeySource = vendorId ? "id" : "name";
  const vendorKey = vendorId || normalizeVendorName(vendorName);
  const invoiceNumber = getValue(raw, mapping.invoiceNumber);
  const invoiceNumberNorm = normalizeInvoiceNumber(invoiceNumber);
  const amount = parseAmount(getValue(raw, mapping.amount));
  const invoiceDate = getValue(raw, mapping.invoiceDate);
  const invoiceDateMs = parseDate(invoiceDate);
  const poNumber = getValue(raw, mapping.poNumber);
  const paymentReference = getValue(raw, mapping.paymentReference);
  const bankAccount = getValue(raw, mapping.bankAccount);

  if (!vendorKey || !invoiceNumberNorm || amount === null) {
    return {
      rowIndex,
      vendorId,
      vendorName,
      vendorKey,
      vendorKeySource,
      invoiceNumber,
      invoiceNumberNorm,
      amount,
      invoiceDate,
      invoiceDateMs,
      poNumber,
      paymentReference,
      bankAccount,
      raw
    };
  }

  return {
    rowIndex,
    vendorId,
    vendorName,
    vendorKey,
    vendorKeySource,
    invoiceNumber,
    invoiceNumberNorm,
    amount,
    invoiceDate,
    invoiceDateMs,
    poNumber,
    paymentReference,
    bankAccount,
    raw
  };
}

function getValue(record: Record<string, string>, key?: string): string {
  if (!key) return "";
  return record[key] ?? "";
}

function normalizeVendorName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function normalizeInvoiceNumber(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "")
    .trim();
}

function parseAmount(value: string): number | null {
  if (!value) return null;
  const cleaned = value.replace(/[^0-9.\-]/g, "");
  const parsed = Number.parseFloat(cleaned);
  return Number.isFinite(parsed) ? parsed : null;
}

function parseDate(value: string): number | null {
  if (!value) return null;
  const direct = Date.parse(value);
  if (!Number.isNaN(direct)) return direct;

  const match = value.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2,4})$/);
  if (match) {
    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3].length === 2 ? `20${match[3]}` : match[3]);
    const parsed = Date.UTC(year, month - 1, day);
    return Number.isNaN(parsed) ? null : parsed;
  }

  return null;
}

function detectDuplicates(rows: ParsedRow[], options: DetectionOptions) {
  const highConfidenceGroups: DuplicateGroup[] = [];
  const mediumConfidenceGroups: DuplicateGroup[] = [];
  const duplicateRows: DuplicateRow[] = [];
  const tier1RowIds = new Set<number>();

  const tier1Map = new Map<string, ParsedRow[]>();
  for (const row of rows) {
    if (!row.vendorKey || !row.invoiceNumberNorm || row.amount === null) continue;
    const amountKey = row.amount.toFixed(2);
    const key = `${row.vendorKey}|${row.invoiceNumberNorm}|${amountKey}`;
    const bucket = tier1Map.get(key) ?? [];
    bucket.push(row);
    tier1Map.set(key, bucket);
  }

  let groupCounter = 1;
  for (const [, groupRows] of tier1Map) {
    if (groupRows.length < 2) continue;
    const vendorKeySource =
      groupRows.every((row) => row.vendorKeySource === "id") ? "id" : "name";
    const confidence: "High" | "Medium" =
      vendorKeySource === "id" ? "High" : "Medium";
    const rule =
      vendorKeySource === "id"
        ? "Exact match on vendor ID, invoice number, and amount"
        : "Exact match on vendor name, invoice number, and amount (name-only match)";
    const fieldsMatched = [
      vendorKeySource === "id" ? "vendor ID" : "vendor name",
      "invoice number",
      "amount"
    ];
    const groupPrefix = confidence === "High" ? "HIGH" : "MED";
    const groupId = `${groupPrefix}-${groupCounter}`;
    const totalAmount = sumAmount(groupRows);
    const exposure = totalAmount - maxAmount(groupRows);
    const group: DuplicateGroup = {
      id: groupId,
      confidence,
      rule,
      fieldsMatched,
      vendorKeySource,
      rowIndexes: groupRows.map((row) => row.rowIndex),
      totalAmount,
      exposure,
      rows: []
    };
    group.rows = groupRows.map((row) =>
      createDuplicateRow(row, groupId, confidence, rule)
    );
    group.rows.forEach((row) => duplicateRows.push(row));
    groupRows.forEach((row) => tier1RowIds.add(row.rowIndex));
    highConfidenceGroups.push(group);
    groupCounter += 1;
  }

  const tier2Map = new Map<string, ParsedRow[]>();
  for (const row of rows) {
    if (!row.vendorKey || !row.invoiceNumberNorm || row.amount === null) continue;
    if (tier1RowIds.has(row.rowIndex)) continue;
    const key = `${row.vendorKey}|${row.invoiceNumberNorm}`;
    const bucket = tier2Map.get(key) ?? [];
    bucket.push(row);
    tier2Map.set(key, bucket);
  }

  for (const [, groupRows] of tier2Map) {
    if (groupRows.length < 2) continue;
    const matches = groupMatches(groupRows, options);
    for (const matchRows of matches) {
      if (matchRows.length < 2) continue;
      const vendorKeySource =
        matchRows.every((row) => row.vendorKeySource === "id") ? "id" : "name";
      const rule = buildTier2Rule(vendorKeySource, options.dateWindowDays);
      const fieldsMatched = [
        vendorKeySource === "id" ? "vendor ID" : "vendor name",
        "normalized invoice number",
        `amount within ±${options.amountTolerance.toFixed(2)}`,
        `invoice date within ${options.dateWindowDays} days`
      ];
      const groupId = `MED-${groupCounter}`;
      const totalAmount = sumAmount(matchRows);
      const exposure = totalAmount - maxAmount(matchRows);
      const group: DuplicateGroup = {
        id: groupId,
        confidence: "Medium",
        rule,
        fieldsMatched,
        vendorKeySource,
        rowIndexes: matchRows.map((row) => row.rowIndex),
        totalAmount,
        exposure,
        rows: []
      };
      group.rows = matchRows.map((row) =>
        createDuplicateRow(row, groupId, "Medium", rule)
      );
      group.rows.forEach((row) => duplicateRows.push(row));
      mediumConfidenceGroups.push(group);
      groupCounter += 1;
    }
  }

  const summary: SummaryResult = {
    totalRows: rows.length,
    duplicateGroups: highConfidenceGroups.length + mediumConfidenceGroups.length,
    exposure:
      sumExposure(highConfidenceGroups) + sumExposure(mediumConfidenceGroups),
    byConfidence: {
      high: highConfidenceGroups.filter((group) => group.confidence === "High")
        .length,
      medium: mediumConfidenceGroups.length +
        highConfidenceGroups.filter((group) => group.confidence === "Medium")
          .length
    }
  };

  return {
    groups: [...highConfidenceGroups, ...mediumConfidenceGroups],
    duplicateRows,
    summary
  };
}

function groupMatches(rows: ParsedRow[], options: DetectionOptions): ParsedRow[][] {
  const parents = rows.map((_, index) => index);
  const dateWindowMs = options.dateWindowDays * 24 * 60 * 60 * 1000;
  const tolerance = options.amountTolerance;

  for (let i = 0; i < rows.length; i += 1) {
    for (let j = i + 1; j < rows.length; j += 1) {
      const rowA = rows[i];
      const rowB = rows[j];
      if (rowA.amount === null || rowB.amount === null) continue;
      if (rowA.invoiceDateMs === null || rowB.invoiceDateMs === null) continue;
      const amountDiff = Math.abs(rowA.amount - rowB.amount);
      const dateDiff = Math.abs(rowA.invoiceDateMs - rowB.invoiceDateMs);
      if (amountDiff <= tolerance && dateDiff <= dateWindowMs) {
        union(parents, i, j);
      }
    }
  }

  const groups = new Map<number, ParsedRow[]>();
  rows.forEach((row, index) => {
    const root = find(parents, index);
    const bucket = groups.get(root) ?? [];
    bucket.push(row);
    groups.set(root, bucket);
  });

  return Array.from(groups.values());
}

function createDuplicateRow(
  row: ParsedRow,
  groupId: string,
  confidence: "High" | "Medium",
  rule: string
): DuplicateRow {
  const vendor = row.vendorId || row.vendorName || "";
  return {
    groupId,
    rowIndex: row.rowIndex,
    confidence,
    reason: rule,
    vendor,
    invoiceNumber: row.invoiceNumber ?? "",
    amount: row.amount,
    invoiceDate: row.invoiceDate ?? null,
    vendorKeySource: row.vendorKeySource,
    poNumber: row.poNumber || null,
    paymentReference: row.paymentReference || null,
    bankAccount: maskBankAccount(row.bankAccount)
  };
}

function maskBankAccount(value?: string): string | null {
  if (!value) return null;
  const cleaned = value.replace(/\s+/g, "");
  if (cleaned.length <= 4) return cleaned;
  return `${"*".repeat(cleaned.length - 4)}${cleaned.slice(-4)}`;
}

function buildTier2Rule(vendorKeySource: "id" | "name", windowDays: number) {
  if (vendorKeySource === "id") {
    return `Match on vendor ID, normalized invoice number, amount tolerance, and invoice date within ${windowDays} days`;
  }
  return `Match on vendor name, normalized invoice number, amount tolerance, and invoice date within ${windowDays} days (name-only match)`;
}

function sumAmount(rows: ParsedRow[]): number {
  return rows.reduce((sum, row) => sum + (row.amount ?? 0), 0);
}

function maxAmount(rows: ParsedRow[]): number {
  return rows.reduce((max, row) => Math.max(max, row.amount ?? 0), 0);
}

function sumExposure(groups: DuplicateGroup[]): number {
  return groups.reduce((sum, group) => sum + group.exposure, 0);
}

function postProgress(stage: string, progress: number) {
  ctx.postMessage({
    type: "progress",
    stage,
    progress: Math.round(progress * 100)
  } satisfies WorkerProgress);
}

function find(parents: number[], index: number): number {
  if (parents[index] === index) return index;
  parents[index] = find(parents, parents[index]);
  return parents[index];
}

function union(parents: number[], a: number, b: number) {
  const rootA = find(parents, a);
  const rootB = find(parents, b);
  if (rootA !== rootB) {
    parents[rootB] = rootA;
  }
}
