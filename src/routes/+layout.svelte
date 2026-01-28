<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <!-- Basic Meta Tags -->
  <meta name="author" content="Aidan Dennehy" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charset="utf-8" />

  <!-- Favicon -->
  <link rel="icon" href={favicon} />

  <!-- Rybbit Analytics -->
  <script
    src="https://app.rybbit.io/api/script.js"
    data-site-id="c73897f724d2"
    defer
  ></script>

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://aidandennehy.ie" />
  <meta
    property="og:title"
    content="Aidan Dennehy - Cork Web Consultant & Local SEO Expert"
  />
  <meta
    property="og:description"
    content="Get found first on Google! Cork-based web consultant helping businesses dominate local search with 25+ years experience. Modern websites, data insights, and AI solutions."
  />
  <meta property="og:image" content="https://aidandennehy.ie/adlogo-dark.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Aidan Dennehy - Cork Web Consultant" />
  <meta property="og:locale" content="en_IE" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://aidandennehy.ie" />
  <meta
    property="twitter:title"
    content="Aidan Dennehy - Cork Web Consultant & Local SEO Expert"
  />
  <meta
    property="twitter:description"
    content="Get found first on Google! Cork-based web consultant helping businesses dominate local search with 25+ years experience."
  />
  <meta
    property="twitter:image"
    content="https://aidandennehy.ie/adlogo-dark.png"
  />

  <!-- Additional SEO Meta Tags -->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
  <meta name="language" content="English" />
  <meta name="revisit-after" content="7 days" />
  <meta name="geo.region" content="IE-C" />
  <meta name="geo.placename" content="Cork, Ireland" />
  <meta name="geo.position" content="51.8985;-8.4756" />
  <meta name="ICBM" content="51.8985, -8.4756" />
  <style>
    :root {
      --header-height: 64px;

      /* Dark theme colors (default) */
      --bg-primary: #111827;
      --bg-secondary: #1f2937;
      --bg-card: #374151;
      --text-primary: #f9fafb;
      --text-secondary: #d1d5db;
      --text-muted: #9ca3af;
      --border-color: #4b5563;
      --accent-color: #3b82f6;
      --accent-hover: #2563eb;
    }

    .light-theme {
      /* Light theme colors */
      --bg-primary: #ffffff;
      --bg-secondary: #f9fafb;
      --bg-card: #ffffff;
      --text-primary: #111827;
      --text-secondary: #374151;
      --text-muted: #6b7280;
      --border-color: #e5e7eb;
      --accent-color: #3b82f6;
      --accent-hover: #2563eb;
    }

    .dark-theme {
      /* Dark theme colors (explicit) */
      --bg-primary: #111827;
      --bg-secondary: #1f2937;
      --bg-card: #374151;
      --text-primary: #f9fafb;
      --text-secondary: #d1d5db;
      --text-muted: #9ca3af;
      --border-color: #4b5563;
      --accent-color: #3b82f6;
      --accent-hover: #2563eb;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family:
        system-ui,
        -apple-system,
        Segoe UI,
        Roboto,
        Helvetica,
        Arial,
        "Apple Color Emoji",
        "Segoe UI Emoji";
      color: var(--text-primary);
      background: var(--bg-primary);
      transition:
        color 0.3s ease,
        background-color 0.3s ease;
    }
  </style>
</svelte:head>

{@render children?.()}
