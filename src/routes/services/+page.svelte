<script>
  import { onMount } from "svelte";

  let isDark = true;
  let mounted = false;

  onMount(() => {
    mounted = true;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDark = savedTheme === "dark";
    } else {
      isDark = true;
      localStorage.setItem("theme", "dark");
    }
    updateTheme();
    console.log("Component mounted, theme:", isDark ? "dark" : "light");
  });

  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDark = savedTheme === "dark";
    }
  }

  function toggleTheme() {
    if (!mounted) return;
    isDark = !isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateTheme();
    console.log("Theme toggled to:", isDark ? "dark" : "light");
  }

  function updateTheme() {
    if (typeof document !== "undefined" && document.documentElement) {
      const htmlElement = document.documentElement;
      htmlElement.classList.remove("light-theme", "dark-theme");
      if (isDark) {
        htmlElement.classList.add("dark-theme");
      } else {
        htmlElement.classList.add("light-theme");
      }
      console.log(
        "Theme updated, isDark:",
        isDark,
        "Applied class:",
        isDark ? "dark-theme" : "light-theme",
      );
    }
  }

  $: logoPath = isDark ? "/adlogo-dark.png" : "/adlogo-light.png";
</script>

<svelte:head>
  <title>Services | Cork Web Consultant & SEO | Aidan Dennehy</title>
  <meta
    name="description"
    content="Local SEO, data insights, and AI-powered websites for Cork businesses. See how I help you get found, understand customers, and convert more leads."
  />
  <link rel="canonical" href="https://www.aidandennehy.ie/services" />
</svelte:head>

<nav class="nav">
  <div class="container">
    <div class="brand">
      <img src={logoPath} alt="AD Logo" class="logo" />
      <span>AD</span>
    </div>
    <div class="nav-right">
      <ul class="links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      <button
        class="theme-toggle"
        on:click={toggleTheme}
        aria-label="Toggle theme"
      >
        {#if isDark}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
        {:else}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        {/if}
        <span style="font-size: 12px; margin-left: 4px;"
          >{isDark ? "Dark" : "Light"}</span
        >
      </button>
    </div>
  </div>
</nav>

<main>
  <section id="services" class="section">
    <h1 class="services-title">How I Help Cork Businesses Win Online</h1>

    <div class="services-banner">
      <h2 class="services-banner-title">🚀 Get Found First on Google</h2>
      <p class="services-banner-text">
        Stop losing customers to competitors who show up first in local search.
        I help Cork businesses dominate their local market online.
      </p>
    </div>

    <div class="featured-service">
      <div class="featured-badge">🏆 Most Popular</div>
      <h2 class="featured-title">Local Search Domination</h2>
      <p class="featured-subtitle">
        Get Your Business to the Top of Google Maps and Search
      </p>
      <div class="featured-content">
        <div class="featured-text">
          <p class="featured-description">
            Stop losing customers to competitors who show up first online. I'll
            optimize your Google Business Profile, build local citations, and
            implement proven strategies to get you ranking at the top when local
            customers search.
          </p>
          <div class="featured-benefits">
            <div class="benefit-item">
              ✅ Google Business Profile optimization
            </div>
            <div class="benefit-item">✅ Local citation building</div>
            <div class="benefit-item">✅ Automated review generation</div>
            <div class="benefit-item">✅ Monthly performance reporting</div>
          </div>
          <a class="featured-cta" href="/#contact"
            >Start Dominating Local Search →</a
          >
        </div>
        <div class="featured-visual">
          <div class="search-mockup">
            <div class="search-bar">🔍 "best [your service] Cork"</div>
            <div class="search-result featured">
              <div class="result-badge">AD</div>
              <div class="result-text">
                <div class="result-title">Your Business Here ⭐⭐⭐⭐⭐</div>
                <div class="result-subtitle">
                  Top result • Open now • 5.0 rating
                </div>
              </div>
            </div>
            <div class="search-result">
              <div class="result-text">
                <div class="result-title">Competitor #2</div>
                <div class="result-subtitle">Lower result • No reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="other-services-title">Additional Services</h2>
    <div class="services-grid">
      <div class="service-card secondary-service">
        <div class="service-card">
          <h3>Smart Customer Insights Dashboard</h3>
          <p class="service-subtitle">Know Your Business Like Never Before</p>
          <p class="service-description">
            Turn your scattered business data into clear, actionable insights.
            I'll create a custom dashboard that shows you who your best
            customers really are, when they buy, what they spend, and which
            marketing actually works. Get automated reports that translate
            complex analytics into plain English decisions you can act on
            immediately.
          </p>
        </div>

        <div class="service-card">
          <h3>AI-Powered Website That Sells 24/7</h3>
          <p class="service-subtitle">
            Your Digital Salesperson That Never Sleeps
          </p>
          <p class="service-description">
            Transform your website from a digital brochure into a sales machine.
            I'll build you a modern, mobile-optimized site with an AI chatbot
            that answers questions, captures leads, and guides visitors toward
            buying - even when you're closed. Includes lead capture systems and
            automated follow-up sequences.
          </p>
        </div>
      </div>
    </div>
  </section>
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

  :global(.light-theme) .nav {
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

  .theme-toggle {
    background: none;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
    color: var(--text-primary);
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .theme-toggle:hover {
    background: var(--bg-secondary);
    border-color: var(--accent-color);
  }

  .theme-toggle:focus {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
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

  main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 16px 80px;
  }

  .section {
    padding: 48px 0;
    scroll-margin-top: calc(var(--header-height) + 16px);
  }

  .services-banner {
    background: var(--bg-card);
    border: 2px solid var(--accent-color);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 48px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .services-banner-title {
    font-size: 1.8rem;
    margin: 0 0 16px;
    color: var(--accent-color);
    font-weight: 700;
  }

  .services-banner-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin: 0;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .services-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 48px;
    color: var(--text-primary);
    font-weight: 700;
  }

  .featured-service {
    background: linear-gradient(
      135deg,
      var(--bg-card) 0%,
      var(--bg-secondary) 100%
    );
    border: 3px solid var(--accent-color);
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 48px;
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  }

  .featured-badge {
    position: absolute;
    top: -15px;
    left: 40px;
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: #1f2937;
    padding: 8px 20px;
    border-radius: 25px;
    font-weight: 700;
    font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(251, 191, 36, 0.4);
  }

  .featured-title {
    font-size: 2.2rem;
    color: var(--accent-color);
    margin: 0 0 12px;
    font-weight: 800;
  }

  .featured-subtitle {
    font-size: 1.3rem;
    color: var(--text-secondary);
    margin: 0 0 24px;
    font-weight: 600;
  }

  .featured-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
  }

  .featured-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 24px;
  }

  .featured-benefits {
    display: grid;
    gap: 12px;
    margin-bottom: 32px;
  }

  .benefit-item {
    font-size: 1rem;
    color: var(--text-primary);
    font-weight: 500;
  }

  .featured-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
  }

  .featured-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(16, 185, 129, 0.4);
  }

  .search-mockup {
    background: #f8fafc;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    padding: 20px;
    font-family: system-ui;
  }

  :global(.light-theme) .search-mockup {
    background: #1e293b;
    border-color: #475569;
  }

  .search-bar {
    background: white;
    border: 1px solid #d1d5db;
    border-radius: 25px;
    padding: 12px 20px;
    margin-bottom: 16px;
    color: #6b7280;
    font-size: 0.95rem;
  }

  :global(.light-theme) .search-bar {
    background: #374151;
    border-color: #4b5563;
    color: #d1d5db;
  }

  .search-result {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  :global(.light-theme) .search-result {
    background: #374151;
    border-color: #4b5563;
  }

  .search-result.featured {
    border-color: var(--accent-color);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  }

  .result-badge {
    background: var(--accent-color);
    color: white;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 0.8rem;
  }

  .result-title {
    font-weight: 600;
    color: var(--accent-color);
    font-size: 0.95rem;
  }

  .result-subtitle {
    color: #6b7280;
    font-size: 0.85rem;
  }

  :global(.light-theme) .result-subtitle {
    color: #9ca3af;
  }

  .other-services-title {
    font-size: 1.8rem;
    color: var(--text-secondary);
    margin: 48px 0 32px;
    text-align: center;
    font-weight: 600;
  }

  .secondary-service {
    opacity: 0.9;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }

  .service-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 24px;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .service-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .service-card h3 {
    margin: 0 0 8px;
    font-size: 1.25rem;
    color: var(--text-primary);
  }

  .service-subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 16px;
  }

  .service-description {
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 12px;
    }

    .nav {
      height: auto;
      min-height: var(--header-height);
    }

    .nav .container {
      flex-direction: column;
      gap: 16px;
      padding: 12px;
    }

    .nav-right {
      width: 100%;
      justify-content: space-between;
    }

    .links {
      flex-wrap: wrap;
      gap: 12px;
    }

    .services-banner {
      padding: 24px;
      margin-bottom: 32px;
    }

    .services-banner-title {
      font-size: 1.5rem;
    }

    .services-banner-text {
      font-size: 1rem;
    }

    .services-title {
      font-size: 1.8rem;
      padding: 0 16px;
    }

    .featured-service {
      padding: 20px 16px;
      margin: 16px 8px;
      border-radius: 16px;
    }

    .featured-badge {
      left: 16px;
      top: -12px;
      font-size: 0.8rem;
      padding: 6px 16px;
    }

    .featured-title {
      font-size: 1.6rem;
    }

    .featured-subtitle {
      font-size: 1.1rem;
    }

    .featured-content {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .featured-description {
      font-size: 1rem;
    }

    .featured-cta {
      width: 100%;
      padding: 14px 24px;
    }

    .search-mockup {
      padding: 16px;
    }

    .search-bar {
      font-size: 0.9rem;
      padding: 10px 16px;
    }

    .search-result {
      padding: 12px;
    }

    .result-title {
      font-size: 0.9rem;
    }

    .result-subtitle {
      font-size: 0.8rem;
    }

    .other-services-title {
      font-size: 1.5rem;
      padding: 0 16px;
    }

    .services-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0 8px;
    }

    .service-card {
      padding: 20px;
    }

    main {
      padding: 16px 8px 60px;
    }

    .section {
      padding: 32px 0;
    }
  }

  @media (max-width: 480px) {
    .services-title {
      font-size: 1.5rem;
    }

    .featured-title {
      font-size: 1.4rem;
    }

    .featured-service {
      padding: 16px 12px;
    }

    .featured-content {
      gap: 16px;
    }

    .benefit-item {
      font-size: 0.9rem;
    }
  }
</style>
