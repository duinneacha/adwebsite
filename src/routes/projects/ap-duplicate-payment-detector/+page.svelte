<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  type ColumnMapping = {
    vendorId: string;
    vendorName: string;
    invoiceNumber: string;
    amount: string;
    invoiceDate: string;
    poNumber: string;
    paymentReference: string;
    bankAccount: string;
  };

  type DetectionOptions = {
    dateWindowDays: number;
    amountTolerance: number;
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

  type WorkerResult = {
    summary: SummaryResult;
    groups: DuplicateGroup[];
    rows: DuplicateRow[];
    rawHeaders: string[];
  };

  let isDark = true;
  let file: File | null = null;
  let headers: string[] = [];
  let mapping: ColumnMapping = emptyMapping();
  let options: DetectionOptions = {
    dateWindowDays: 7,
    amountTolerance: 0.01,
  };
  let status = {
    stage: "",
    progress: 0,
  };
  let errorMessage = "";
  let results: WorkerResult | null = null;
  let worker: Worker | null = null;
  $: logoPath = isDark ? "/adlogo-dark.png" : "/adlogo-light.png";

  function emptyMapping(): ColumnMapping {
    return {
      vendorId: "",
      vendorName: "",
      invoiceNumber: "",
      amount: "",
      invoiceDate: "",
      poNumber: "",
      paymentReference: "",
      bankAccount: "",
    };
  }

  function createWorker() {
    if (worker) return worker;
    worker = new Worker(
      new URL("$lib/workers/ap-duplicate-worker.ts", import.meta.url),
      { type: "module" },
    );

    worker.onmessage = (event) => {
      const data = event.data as
        | { type: "headers"; headers: string[] }
        | { type: "progress"; stage: string; progress: number }
        | {
            type: "result";
            summary: SummaryResult;
            groups: DuplicateGroup[];
            rows: DuplicateRow[];
            rawHeaders: string[];
          }
        | { type: "error"; message: string };

      if (data.type === "headers") {
        headers = data.headers;
        mapping = guessMapping(headers);
        status = { stage: "Ready", progress: 0 };
        errorMessage = "";
        return;
      }

      if (data.type === "progress") {
        status = { stage: data.stage, progress: data.progress };
        return;
      }

      if (data.type === "result") {
        results = {
          summary: data.summary,
          groups: data.groups,
          rows: data.rows,
          rawHeaders: data.rawHeaders,
        };
        status = { stage: "Complete", progress: 100 };
        errorMessage = "";
        return;
      }

      if (data.type === "error") {
        errorMessage = data.message;
        status = { stage: "Error", progress: 0 };
      }
    };

    return worker;
  }

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const selected = input.files?.[0] ?? null;
    file = selected;
    headers = [];
    mapping = emptyMapping();
    results = null;
    errorMessage = "";
    status = { stage: "", progress: 0 };

    if (file) {
      const activeWorker = createWorker();
      activeWorker.postMessage({ type: "parse-headers", file });
      status = { stage: "Reading headers", progress: 0 };
    }
  }

  function canRun() {
    return (
      file &&
      (mapping.vendorId || mapping.vendorName) &&
      mapping.invoiceNumber &&
      mapping.amount
    );
  }

  function runScan() {
    if (!file || !canRun()) return;
    results = null;
    errorMessage = "";
    status = { stage: "Starting", progress: 0 };
    const activeWorker = createWorker();
    activeWorker.postMessage({
      type: "process",
      file,
      mapping,
      options,
    });
  }

  function guessMapping(headers: string[]): ColumnMapping {
    const lowered = headers.map((header) => header.toLowerCase().trim());
    const find = (keys: string[]) =>
      headers[lowered.findIndex((header) => keys.includes(header))] ?? "";

    return {
      vendorId: find([
        "vendor id",
        "vendor_id",
        "vendor number",
        "supplier id",
      ]),
      vendorName: find(["vendor name", "vendor", "supplier", "supplier name"]),
      invoiceNumber: find([
        "invoice number",
        "invoice no",
        "inv number",
        "inv no",
        "invoice",
      ]),
      amount: find(["amount", "invoice amount", "payment amount", "total"]),
      invoiceDate: find(["invoice date", "inv date", "date"]),
      poNumber: find(["po number", "po no", "purchase order"]),
      paymentReference: find(["payment reference", "payment ref", "reference"]),
      bankAccount: find(["bank account", "account number", "iban"]),
    };
  }

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 2,
    }).format(value);
  }

  function downloadCsv(
    filename: string,
    rows: Record<string, string | number | null>[],
  ) {
    if (!rows.length) return;
    const headers = Object.keys(rows[0]);
    const lines = [
      headers.join(","),
      ...rows.map((row) =>
        headers.map((header) => escapeCsvValue(row[header])).join(","),
      ),
    ];
    const blob = new Blob([lines.join("\n")], {
      type: "text/csv;charset=utf-8",
    });
    triggerDownload(blob, filename);
  }

  function escapeCsvValue(value: string | number | null) {
    if (value === null || value === undefined) return "";
    const stringValue = String(value);
    if (/[",\n]/.test(stringValue)) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }
    return stringValue;
  }

  function downloadJson(filename: string, payload: unknown) {
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json;charset=utf-8",
    });
    triggerDownload(blob, filename);
  }

  function triggerDownload(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  function exportGroups() {
    if (!results) return;
    const rows = results.groups.map((group) => ({
      group_id: group.id,
      confidence: group.confidence,
      rule: group.rule,
      fields_matched: group.fieldsMatched.join("; "),
      vendor_key_source: group.vendorKeySource,
      row_indexes: group.rowIndexes.join("; "),
      total_amount: group.totalAmount.toFixed(2),
      exposure: group.exposure.toFixed(2),
    }));
    downloadCsv("duplicate_groups.csv", rows);
  }

  function exportRows() {
    if (!results) return;
    const rows = results.rows.map((row) => ({
      group_id: row.groupId,
      row_index: row.rowIndex,
      confidence: row.confidence,
      reason: row.reason,
      vendor: row.vendor,
      invoice_number: row.invoiceNumber,
      amount: row.amount ?? "",
      invoice_date: row.invoiceDate ?? "",
      vendor_key_source: row.vendorKeySource,
      po_number: row.poNumber ?? "",
      payment_reference: row.paymentReference ?? "",
      bank_account: row.bankAccount ?? "",
    }));
    downloadCsv("duplicate_rows.csv", rows);
  }

  function exportAudit() {
    if (!results || !file) return;
    downloadJson("audit_report.json", {
      generatedAt: new Date().toISOString(),
      fileName: file.name,
      mapping,
      options,
      summary: results.summary,
      groups: results.groups,
    });
  }

  function applyTheme() {
    if (typeof document === "undefined") return;
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("light-theme", "dark-theme");
    htmlElement.classList.add(isDark ? "dark-theme" : "light-theme");
  }

  onMount(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDark = savedTheme === "dark";
    } else {
      isDark = true;
      localStorage.setItem("theme", "dark");
    }
    applyTheme();
  });

  onDestroy(() => {
    worker?.terminate();
  });
</script>

<svelte:head>
  <title>AP Duplicate Payment Detection | Aidan Dennehy</title>
  <meta
    name="description"
    content="Client-side tool for identifying potential duplicate payments in AP data using explainable audit rules. Files stay local in your browser."
  />
  <link
    rel="canonical"
    href="https://www.aidandennehy.ie/projects/ap-duplicate-payment-detector"
  />
</svelte:head>

<nav class="nav">
  <div class="container">
    <div class="brand">
      <img src={logoPath} alt="AD Logo" class="logo" />
      <span>AD</span>
    </div>
    <div class="nav-right">
      <ul class="links">
        <li><a href="/#home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>

<main class="project-page">
  <section class="intro">
    <h1>AP Duplicate Payment Detection (Client-Side)</h1>
    <p class="lead">
      This project demonstrates practical data analysis and audit thinking
      applied to real AP data problems. It focuses on explainability,
      conservative detection, and secure, local-only processing.
    </p>
    <p class="lead">
      This tool identifies potential duplicate payments in Accounts Payable data
      using explainable, audit-grade rules. All processing runs locally in your
      browser — no uploads, no backend storage.
    </p>
    <p class="note">
      Decision-support only. This does not automate enforcement or make fraud
      determinations.
    </p>
  </section>

  <section class="context">
    <h2>Why this project exists</h2>
    <p>
      It reflects real-world AP analysis where duplicate payments occur due to
      repeated invoice processing, vendor data inconsistencies, timing and
      rounding issues, and weak upstream controls. The design emphasizes
      explainability, conservative logic, and privacy-first architecture.
    </p>
    <ul>
      <li>Practical data analysis and audit thinking</li>
      <li>Rule-based detection with clear reasons</li>
      <li>Client-side processing for data privacy</li>
    </ul>
  </section>

  <section class="tool">
    <h2>Run a local duplicate scan</h2>
    <div class="tool-grid">
      <div class="tool-card">
        <h3>1) Upload CSV</h3>
        <p>No uploads or network calls. Your file stays in the browser.</p>
        <input type="file" accept=".csv" on:change={handleFileChange} />
        {#if file}
          <p class="file-name">Loaded: {file.name}</p>
        {/if}
      </div>

      <div class="tool-card">
        <h3>2) Confirm column mapping</h3>
        {#if headers.length === 0}
          <p>Upload a CSV file to detect headers.</p>
        {:else}
          <div class="mapping-grid">
            <label>
              Vendor ID (preferred)
              <select bind:value={mapping.vendorId}>
                <option value="">Not mapped</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
            <label>
              Vendor name
              <select bind:value={mapping.vendorName}>
                <option value="">Not mapped</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
            <label>
              Invoice number *
              <select bind:value={mapping.invoiceNumber}>
                <option value="">Select column</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
            <label>
              Amount *
              <select bind:value={mapping.amount}>
                <option value="">Select column</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
            <label>
              Invoice date (optional)
              <select bind:value={mapping.invoiceDate}>
                <option value="">Not mapped</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
            <label>
              PO number (optional)
              <select bind:value={mapping.poNumber}>
                <option value="">Not mapped</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
            <label>
              Payment reference (optional)
              <select bind:value={mapping.paymentReference}>
                <option value="">Not mapped</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
            <label>
              Bank account (masked display)
              <select bind:value={mapping.bankAccount}>
                <option value="">Not mapped</option>
                {#each headers as header}
                  <option value={header}>{header}</option>
                {/each}
              </select>
            </label>
          </div>
          <p class="hint">
            Vendor ID is used when available. Vendor name is used when ID is
            missing.
          </p>
        {/if}
      </div>

      <div class="tool-card">
        <h3>3) Configure & run</h3>
        <label class="option">
          Date window (days)
          <input
            type="number"
            min="1"
            max="30"
            bind:value={options.dateWindowDays}
          />
        </label>
        <p class="hint">
          Amount tolerance is fixed at ±{options.amountTolerance.toFixed(2)} for
          this version.
        </p>
        <button class="run-btn" on:click={runScan} disabled={!canRun()}>
          Run duplicate scan
        </button>
        {#if status.stage}
          <p class="status">
            {status.stage}
            {#if status.progress}%{/if}
          </p>
        {/if}
        {#if errorMessage}
          <p class="error">{errorMessage}</p>
        {/if}
      </div>
    </div>
  </section>

  <section class="results">
    <h2>Results</h2>
    {#if !results}
      <p>No results yet. Upload a CSV and run the scan.</p>
    {:else}
      <div class="summary-grid">
        <div class="summary-card">
          <span>Total rows analysed</span>
          <strong>{results.summary.totalRows}</strong>
        </div>
        <div class="summary-card">
          <span>Duplicate groups</span>
          <strong>{results.summary.duplicateGroups}</strong>
        </div>
        <div class="summary-card">
          <span>Estimated exposure</span>
          <strong>{formatCurrency(results.summary.exposure)}</strong>
        </div>
        <div class="summary-card">
          <span>High confidence</span>
          <strong>{results.summary.byConfidence.high}</strong>
        </div>
        <div class="summary-card">
          <span>Medium confidence</span>
          <strong>{results.summary.byConfidence.medium}</strong>
        </div>
      </div>

      <div class="export-actions">
        <button on:click={exportGroups}>Export duplicate_groups.csv</button>
        <button on:click={exportRows}>Export duplicate_rows.csv</button>
        <button on:click={exportAudit}>Export audit_report.json</button>
      </div>

      <div class="group-list">
        {#each results.groups as group}
          <div class="group-card">
            <div class="group-header">
              <h3>{group.id} — {group.confidence} confidence</h3>
              <span>{group.rowIndexes.length} rows</span>
            </div>
            <p class="rule">{group.rule}</p>
            <p class="fields">
              Matched fields: {group.fieldsMatched.join(", ")}
            </p>
            <p class="exposure">
              Total amount: {formatCurrency(group.totalAmount)} · Estimated exposure:
              {formatCurrency(group.exposure)}
            </p>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Row</th>
                    <th>Vendor</th>
                    <th>Invoice</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Confidence</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {#each group.rows as row}
                    <tr>
                      <td>{row.rowIndex}</td>
                      <td>{row.vendor}</td>
                      <td>{row.invoiceNumber}</td>
                      <td>{row.amount ? formatCurrency(row.amount) : "—"}</td>
                      <td>{row.invoiceDate ?? "—"}</td>
                      <td>{row.confidence}</td>
                      <td>{row.reason}</td>
                    </tr>
                  {/each}
                </tbody>
              </table>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </section>

  <section class="architecture">
    <h2>Local-only processing architecture</h2>
    <ul>
      <li>CSV file read via browser APIs</li>
      <li>Streaming parse and detection runs inside a Web Worker</li>
      <li>Results stay in memory only</li>
      <li>No uploads or backend processing</li>
    </ul>
  </section>

  <section class="future">
    <h2>Future enhancements (not implemented)</h2>
    <ul>
      <li>XLSX ingestion via separate adapter</li>
      <li>Configurable rule thresholds</li>
      <li>Additional investigative patterns</li>
      <li>Optional report sharing with explicit opt-in</li>
    </ul>
  </section>

  <div class="back-link">
    <a href="/#projects">← Back to Projects</a>
  </div>
</main>

<style>
  .nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(17, 24, 39, 0.9);
    backdrop-filter: saturate(180%) blur(10px);
    border-bottom: 1px solid var(--border-color);
    height: var(--header-height);
    display: flex;
    align-items: center;
  }

  .light-theme .nav {
    background: rgba(255, 255, 255, 0.9);
  }

  .container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .brand {
    font-weight: 700;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo {
    height: 40px;
    width: auto;
    transition: opacity 0.3s ease;
  }

  .links {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
  }

  .links a {
    text-decoration: none;
    color: var(--text-secondary);
    padding: 6px 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .links a:hover,
  .links a:focus {
    background: var(--bg-secondary);
    color: var(--text-primary);
  }

  .project-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 16px 80px;
    color: var(--text-primary);
  }

  .intro h1 {
    margin: 0 0 16px;
    font-size: 2.6rem;
  }

  .lead {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 760px;
  }

  .note {
    margin-top: 8px;
    color: var(--text-muted);
  }

  section {
    margin-top: 48px;
  }

  h2 {
    font-size: 1.6rem;
    margin-bottom: 16px;
  }

  .tool-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 24px;
  }

  .tool-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px;
  }

  .tool-card h3 {
    margin-top: 0;
  }

  .file-name {
    margin-top: 8px;
    color: var(--text-muted);
  }

  .mapping-grid {
    display: grid;
    gap: 12px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  select,
  input[type="number"],
  input[type="file"] {
    padding: 8px 10px;
    border-radius: 8px;
    border: 1px solid var(--border-color);
    background: var(--bg-secondary);
    color: var(--text-primary);
  }

  .hint {
    margin-top: 8px;
    color: var(--text-muted);
    font-size: 0.9rem;
  }

  .option {
    margin-bottom: 12px;
  }

  .run-btn {
    background: var(--accent-color);
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
  }

  .run-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .status {
    margin-top: 10px;
    color: var(--text-muted);
  }

  .error {
    margin-top: 10px;
    color: #f87171;
  }

  .summary-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 16px;
  }

  .summary-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .summary-card strong {
    font-size: 1.4rem;
  }

  .export-actions {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .export-actions button {
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 8px 12px;
    border-radius: 8px;
    cursor: pointer;
  }

  .group-list {
    margin-top: 24px;
    display: grid;
    gap: 16px;
  }

  .group-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 16px;
  }

  .group-header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: baseline;
  }

  .rule,
  .fields,
  .exposure {
    color: var(--text-secondary);
    margin: 6px 0;
  }

  .table-wrapper {
    overflow-x: auto;
    margin-top: 12px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  th,
  td {
    border-bottom: 1px solid var(--border-color);
    padding: 8px;
    text-align: left;
  }

  th {
    color: var(--text-secondary);
    font-weight: 600;
  }

  .back-link {
    margin-top: 40px;
  }

  .back-link a {
    display: inline-block;
    padding: 10px 16px;
    border-radius: 8px;
    background: var(--bg-secondary);
    color: var(--text-primary);
    text-decoration: none;
    border: 1px solid var(--border-color);
  }

  @media (max-width: 768px) {
    .project-page {
      padding-top: 60px;
    }

    .intro h1 {
      font-size: 2rem;
    }
  }
</style>
