<script lang="ts">
  import ConsentBanner from "$lib/components/ConsentBanner.svelte";
  import Nav from "$lib/components/Nav.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <meta name="author" content="Aidan Dennehy" />
  <link rel="icon" href="/adlogo-dark.png" type="image/png" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.aidandennehy.ie" />
  <meta property="og:title" content="Aidan Dennehy — Full-Stack Developer & Data Analyst" />
  <meta property="og:description" content="Full-stack developer and data analyst with 30+ years of commercial IT experience across Ireland, the UK, the US, and India. MSc Data Science & Analytics (MTU, 2024). Based in Cork." />
  <meta property="og:image" content="https://www.aidandennehy.ie/adlogo-dark.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Aidan Dennehy — Full-Stack Developer & Data Analyst" />
  <meta property="og:locale" content="en_IE" />

  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://www.aidandennehy.ie" />
  <meta property="twitter:title" content="Aidan Dennehy — Full-Stack Developer & Data Analyst" />
  <meta property="twitter:description" content="Full-stack developer and data analyst with 30+ years of commercial IT experience and an MSc in Data Science & Analytics from MTU. Based in Cork, Ireland." />
  <meta property="twitter:image" content="https://www.aidandennehy.ie/adlogo-dark.png" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aidan Dennehy",
    "url": "https://www.aidandennehy.ie",
    "email": "duinneacha@gmail.com",
    "jobTitle": "Full-Stack Developer & Data Analyst",
    "description": "Full-stack developer and data analyst with 35+ years of commercial IT experience. MSc Data Science & Analytics (MTU, 2024).",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Carrigtwohill",
      "addressRegion": "Cork",
      "addressCountry": "IE"
    },
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Munster Technological University" }
    ],
    "knowsAbout": ["Python", "TypeScript", "React", "Node.js", "SQL", "Machine Learning", "Data Analysis", "SvelteKit", "FastAPI", "Cursor", "Claude Code"]
  }
  </script>

  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="geo.region" content="IE-C" />
  <meta name="geo.placename" content="Cork, Ireland" />
  <meta name="geo.position" content="51.8985;-8.4756" />
  <meta name="ICBM" content="51.8985, -8.4756" />

  <style>
    /* ─── DESIGN TOKENS — Concept B "Signal" ─── */
    :root {
      /* Dark (default) */
      --bg:         #080808;
      --bg-2:       #111111;
      --ink:        #f5f0eb;
      --ink-dim:    rgba(245,240,235,0.45);
      --ink-muted:  rgba(245,240,235,0.28);
      --ink-faint:  rgba(245,240,235,0.06);
      --ink-rule:   rgba(245,240,235,0.07);
      --red:        #ff3b5c;
      --red-dim:    rgba(255,59,92,0.07);
      --red-border: rgba(255,59,92,0.22);
      --header-height: 68px;
    }

    @media (prefers-color-scheme: light) {
      :root {
        --bg:         #f5f0eb;
        --bg-2:       #ece7e0;
        --ink:        #0d0806;
        --ink-dim:    rgba(13,8,6,0.55);
        --ink-muted:  rgba(13,8,6,0.35);
        --ink-faint:  rgba(13,8,6,0.05);
        --ink-rule:   rgba(13,8,6,0.1);
        --red:        #d91038;
        --red-dim:    rgba(217,16,56,0.06);
        --red-border: rgba(217,16,56,0.2);
      }
    }

    /* ─── RESET & BASE ─── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html {
      scroll-behavior: smooth;
      -webkit-text-size-adjust: 100%;
    }

    body {
      background: var(--bg);
      color: var(--ink);
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      overflow-x: hidden;
      min-height: 100vh;
    }

    /* Dot grid background */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image: radial-gradient(circle, rgba(255,59,92,0.09) 1px, transparent 1px);
      background-size: 38px 38px;
      pointer-events: none;
      z-index: 0;
    }

    @media (prefers-color-scheme: light) {
      body::before {
        background-image: radial-gradient(circle, rgba(217,16,56,0.07) 1px, transparent 1px);
      }
    }

    /* Nav override for light mode */
    @media (prefers-color-scheme: light) {
      :global(.site-nav) {
        background: rgba(245,240,235,0.92) !important;
      }
    }

    /* ─── SHARED PAGE LAYOUT ─── */
    :global(.page-wrap) {
      position: relative;
      z-index: 1;
    }

    :global(h1), :global(h2), :global(h3) {
      letter-spacing: -0.02em;
      line-height: 1.1;
    }

    :global(a) { color: inherit; }

    :global(html) { scroll-behavior: smooth; }

    /* ─── SHARED PAGE HEADER (inner pages) ─── */
    :global(.page-header) {
      position: relative;
      z-index: 1;
      padding: 72px 64px 56px;
      border-bottom: 1px solid var(--ink-rule);
    }
    :global(.page-eyebrow) {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--red);
      font-weight: 800;
      margin-bottom: 16px;
    }
    :global(.page-title) {
      font-size: clamp(2.4rem, 5vw, 4rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      color: var(--ink);
      line-height: 0.95;
      margin-bottom: 20px;
    }
    :global(.page-sub) {
      font-size: 1.05rem;
      color: var(--ink-dim);
      max-width: 560px;
      line-height: 1.7;
    }

    /* ─── SHARED SECTION STYLES ─── */
    :global(.site-section) {
      position: relative;
      z-index: 1;
      border-top: 1px solid var(--ink-rule);
    }
    :global(.section-inner) {
      max-width: 1200px;
      margin: 0 auto;
      padding: 72px 64px;
    }
    :global(.section-label) {
      font-size: 0.7rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--red);
      font-weight: 800;
      margin-bottom: 14px;
    }
    :global(.section-title) {
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 900;
      letter-spacing: -0.04em;
      color: var(--ink);
      margin-bottom: 12px;
    }
    :global(.section-note) {
      font-size: 0.9rem;
      color: var(--ink-dim);
      line-height: 1.65;
    }

    /* ─── SHARED FOOTER ─── */
    :global(.site-footer) {
      position: relative;
      z-index: 1;
      border-top: 1px solid var(--ink-rule);
      padding: 28px 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 100%;
    }
    :global(.foot-brand) {
      font-size: 0.9rem;
      font-weight: 900;
      letter-spacing: -0.03em;
      color: var(--ink-muted);
    }
    :global(.foot-brand-dot) { color: var(--red); }
    :global(.foot-social) { display: flex; gap: 20px; align-items: center; }
    :global(.foot-social-link) {
      display: flex;
      align-items: center;
      gap: 6px;
      color: var(--ink-muted);
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-decoration: none;
      transition: color 0.2s;
    }
    :global(.foot-social-link:hover) { color: var(--red); }
    :global(.foot-note) {
      font-size: 0.72rem;
      color: var(--ink-muted);
      letter-spacing: 0.06em;
    }

    @media (max-width: 768px) {
      :global(.page-header) { padding: 48px 24px 40px; }
      :global(.section-inner) { padding: 48px 24px; }
      :global(.site-footer) { padding: 24px; flex-direction: column; gap: 12px; text-align: center; }
    }
  </style>
</svelte:head>

<Nav />
{@render children?.()}
<ConsentBanner />
