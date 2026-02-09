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
    }
  }

  $: logoPath = isDark ? "/adlogo-dark.png" : "/adlogo-light.png";
</script>

<svelte:head>
  <title>Projects | Cork Web Consultant | Aidan Dennehy</title>
  <meta
    name="description"
    content="Selected projects including data analysis tools and heritage websites. Explore case studies and live work by Aidan Dennehy."
  />
  <link rel="canonical" href="https://www.aidandennehy.ie/projects" />
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
  <section class="section">
    <h1 class="projects-title">Projects</h1>
    <p class="projects-subtitle">
      A selection of client and community work across local SEO, data analysis,
      and heritage preservation.
    </p>

    <div class="projects-grid">
      <div class="project-card">
        <h2>AP Duplicate Payment Detection</h2>
        <p class="project-subtitle">Client-Side Data Analysis</p>
        <p class="project-description">
          Client-side tool for identifying potential duplicate payments in AP
          data using explainable audit rules. Files are processed locally for
          privacy.
        </p>
        <div class="project-links">
          <a
            href="/projects/ap-duplicate-payment-detector"
            class="project-link"
          >
            View Project
          </a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <img src="/templecurraheen-pic.jpg" alt="Templecurraheen Graveyard" />
        </div>
        <h2>Templecurraheen Graveyard Website</h2>
        <p class="project-subtitle">Digital Heritage Documentation Project</p>
        <p class="project-description">
          A comprehensive digital archive documenting the historic
          Templecurraheen Graveyard in Carrigtwohill, Co. Cork. This project
          preserves centuries of local history through burial records,
          historical photographs, and genealogical resources. Features
          interactive maps, searchable burial lists, and a complete historical
          archive accessible to researchers, family members, and the local
          community.
        </p>
        <div class="project-links">
          <a
            href="https://duinneacha.github.io/templecurraheen-website/"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            View Live Site
          </a>
          <a
            href="https://github.com/duinneacha/templecurraheen-website"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-image">
          <img src="/ballinacurra-pic.jpeg" alt="Old Ballinacurra Graveyard" />
        </div>
        <h2>Old Ballinacurra Graveyard Website</h2>
        <p class="project-subtitle">Community Heritage Memorial Site</p>
        <p class="project-description">
          A dedicated memorial website for Old Ballinacurra Graveyard, featuring
          comprehensive grave records, historical features, and community
          stories. This project honors the memory of Frankie Devlin and
          preserves the heritage of Ballinacurra through digital documentation.
          Includes interactive grave listings, historical features, and
          community dedication pages that connect families with their ancestral
          history.
        </p>
        <div class="project-links">
          <a
            href="https://www.ballinacurragraveyard.ie/"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link"
          >
            View Live Site
          </a>
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
  }

  .projects-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 12px;
    color: var(--text-primary);
    font-weight: 700;
  }

  .projects-subtitle {
    text-align: center;
    color: var(--text-secondary);
    margin: 0 auto 40px;
    max-width: 720px;
    line-height: 1.6;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }

  .project-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 24px;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .project-image {
    margin: -24px -24px 20px -24px;
    border-radius: 12px 12px 0 0;
    overflow: hidden;
    height: 200px;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .project-card:hover .project-image img {
    transform: scale(1.05);
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .project-card h2 {
    margin: 0 0 8px;
    font-size: 1.25rem;
    color: var(--text-primary);
  }

  .project-subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin: 0 0 16px;
  }

  .project-description {
    color: var(--text-muted);
    line-height: 1.6;
    margin: 0 0 20px;
  }

  .project-links {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .project-link {
    display: inline-block;
    padding: 8px 16px;
    background: var(--accent-color);
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }

  .project-link:hover {
    background: var(--accent-hover);
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

    main {
      padding: 16px 8px 60px;
    }

    .section {
      padding: 32px 0;
    }

    .projects-title {
      font-size: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 20px;
      padding: 0 8px;
    }

    .project-card {
      padding: 20px;
    }

    .project-image {
      margin: -20px -20px 16px -20px;
      height: 160px;
    }
  }
</style>
