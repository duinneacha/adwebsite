# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Build static site to build/
npm run preview      # Preview production build
npm run check        # Run svelte-check + TypeScript type checking
npm run check:watch  # Type checking in watch mode
```

There is no test suite configured.

## Architecture

This is a **SvelteKit 5 static site** for a Cork-based web consultancy (aidandennehy.ie), deployed to GitHub Pages via GitHub Actions on push to `main`. The adapter is `@sveltejs/adapter-static`, outputting to `build/`.

All routes set `export const prerender = true` (set at the layout level via `src/routes/+layout.js`, inherited by all pages).

### Routes

- `/` (`+page.svelte`) — Single-page-style home with nav, hero, services, and contact sections
- `/about`, `/services`, `/projects` — Sub-pages
- `/projects/ap-duplicate-payment-detector` — A CSV-based duplicate AP payment detection tool; heavy processing is offloaded to a Web Worker
- `/cookies`, `/privacy`, `/terms` — Legal/policy pages

### Theming

Theme (dark/light) is stored in `localStorage` under the key `"theme"`, defaulting to dark. The active theme is applied by toggling `.dark-theme` / `.light-theme` on `document.documentElement`. CSS custom properties (`--bg-primary`, `--text-primary`, `--accent-color`, etc.) are defined in `src/routes/+layout.svelte` and used across all pages. Each page independently reads and applies the theme in `onMount`.

### Key files

- `src/routes/+layout.svelte` — Global meta tags (OG, Twitter, SEO, geo), CSS custom properties for both themes, renders `<ConsentBanner>`
- `src/lib/components/ConsentBanner.svelte` — Cookie consent banner; conditionally loads Rybbit analytics script when accepted; consent stored in `localStorage` under `"analyticsConsent"`
- `src/lib/workers/ap-duplicate-worker.ts` — Web Worker that parses CSV files and detects duplicate payments using configurable column mappings and detection options (date window, amount tolerance)

### Deployment

GitHub Actions workflow (`.github/workflows/`) builds with `npm ci && npm run build` and deploys the `build/` directory to GitHub Pages. The custom domain is set via `static/CNAME` (`aidandennehy.ie`).
