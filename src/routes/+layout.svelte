<script lang="ts">
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
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
