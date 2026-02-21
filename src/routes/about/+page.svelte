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
  $: logoWebpPath = isDark ? "/adlogo-dark.webp" : "/adlogo-light.webp";
</script>

<svelte:head>
  <title>About Aidan Dennehy | Full-Stack Developer & Data Analyst</title>
  <meta
    name="description"
    content="35+ years of commercial IT delivery across Ireland, the UK, the US, and India. BSc Computer Science & Web Dev (MTU, 2021) · MSc Data Science & Analytics (MTU, 2024). Actively seeking employment."
  />
  <link rel="canonical" href="https://www.aidandennehy.ie/about" />
</svelte:head>

<nav class="nav">
  <div class="container">
    <div class="brand">
      <picture>
        <source srcset={logoWebpPath} type="image/webp" />
        <img src={logoPath} alt="AD Logo" class="logo" />
      </picture>
      <span>AD</span>
    </div>
    <div class="nav-right">
      <ul class="links">
        <li><a href="/#home">Home</a></li>
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

<main class="about-page">
  <section class="about-section">
    <div class="about-container">
      <div class="about-header">
        <h1 class="about-title">About Aidan Dennehy</h1>
        <p class="about-subtitle">
          35+ Years of Commercial IT Delivery • Cork-Based • Actively Seeking Employment
        </p>
      </div>

      <div class="about-content">
        <div class="about-story">
          <div class="story-section">
            <h2>The Long Game</h2>
            <p>
              I started writing code professionally in 1989. Since then I've built
              payroll systems, MRP systems, plant maintenance reporting for Coal India,
              audit management systems, project cost control systems in the USA, data
              capture networks, CRM integrations, and full-stack web applications.
              I've worked across Ireland, Europe, the UK, the USA, and India — in
              startups, research centres, and large enterprises.
            </p>
          </div>

          <div class="story-section">
            <h2>Coming Back to Learn</h2>
            <p>
              In 2021 I completed a BSc in Computer Science & Web Development at MTU
              Cork, and in 2024 an MSc in Data Science & Analytics — also at MTU.
              I went back because I wanted formal grounding in the modern stack, not
              just experience. The combination of 35 years of commercial delivery and
              up-to-date academic qualifications is something most candidates simply
              don't have.
            </p>
          </div>

          <div class="story-section">
            <h2>How I Work Now</h2>
            <p>
              I work across the full stack — Python, JavaScript, TypeScript, React,
              Node.js, SQL, machine learning, data visualisation. I'm fluent with
              modern AI-assisted development tools including Claude CLI, Cursor,
              GitHub Copilot, and ChatGPT — not as a shortcut, but as a way to
              deliver better work faster while keeping full understanding of what's
              being built.
            </p>
          </div>
        </div>

        <div class="about-highlights">
          <div class="highlight-card">
            <div class="highlight-icon">📅</div>
            <h3>35+ Years Experience</h3>
            <p>Commercial delivery from 1989 across four countries</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🛠</div>
            <h3>Full-Stack & Data</h3>
            <p>Python, TypeScript, React, SQL, machine learning and more</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🤖</div>
            <h3>AI-Fluent</h3>
            <p>Daily use of Claude CLI, Cursor, Copilot and ChatGPT</p>
          </div>

          <div class="highlight-card">
            <div class="highlight-icon">🎓</div>
            <h3>MSc & BSc from MTU</h3>
            <p>Modern qualifications backed by real-world experience</p>
          </div>
        </div>
      </div>

      <div class="about-cta">
        <h3>Looking to hire or collaborate?</h3>
        <p>
          Let's have a conversation about what you're trying to build.
        </p>
        <a href="/#contact" class="about-button">Get In Touch</a>
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

  .about-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 16px 80px;
  }

  .about-section {
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 40px;
  }

  .about-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .about-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .about-title {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin: 0 0 16px;
    font-weight: 700;
  }

  .about-subtitle {
    font-size: 1.2rem;
    color: var(--accent-color);
    margin: 0;
    font-weight: 600;
  }

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    margin-bottom: 48px;
  }

  .about-story {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .story-section h2 {
    font-size: 1.3rem;
    color: var(--accent-color);
    margin: 0 0 16px;
    font-weight: 600;
  }

  .story-section p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
    font-size: 1rem;
  }

  .about-highlights {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .highlight-card {
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .highlight-card:hover {
    border-color: var(--accent-color);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .highlight-icon {
    font-size: 2.5rem;
    margin-bottom: 16px;
    display: block;
  }

  .highlight-card h3 {
    font-size: 1.1rem;
    color: var(--text-primary);
    margin: 0 0 8px;
    font-weight: 600;
  }

  .highlight-card p {
    color: var(--text-muted);
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .about-cta {
    background: linear-gradient(
      135deg,
      var(--bg-card) 0%,
      var(--bg-secondary) 100%
    );
    border: 2px solid var(--accent-color);
    border-radius: 16px;
    padding: 32px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .about-cta h3 {
    font-size: 1.6rem;
    color: var(--text-primary);
    margin: 0 0 12px;
    font-weight: 700;
  }

  .about-cta p {
    color: var(--text-secondary);
    margin: 0 0 24px;
    font-size: 1.1rem;
  }

  .about-button {
    display: inline-block;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-hover) 100%
    );
    color: white;
    padding: 16px 32px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    transition: all 0.3s ease;
  }

  .about-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
    text-decoration: none;
  }

  @media (max-width: 900px) {
    .about-content {
      grid-template-columns: 1fr;
    }
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

    .about-page {
      padding: 60px 12px 60px;
    }

    .about-title {
      font-size: 2rem;
    }

    .about-subtitle {
      font-size: 1rem;
    }

    .about-story {
      gap: 24px;
    }

    .story-section h2 {
      font-size: 1.2rem;
    }

    .story-section p {
      font-size: 0.95rem;
    }

    .highlight-card {
      padding: 20px;
    }

    .highlight-icon {
      font-size: 2rem;
      margin-bottom: 12px;
    }

    .about-cta {
      padding: 24px;
    }

    .about-cta h3 {
      font-size: 1.4rem;
    }

    .about-cta p {
      font-size: 1rem;
    }

    .about-button {
      width: 100%;
      padding: 14px 24px;
    }
  }

  @media (max-width: 480px) {
    .about-title {
      font-size: 1.8rem;
    }

    .about-subtitle {
      font-size: 0.95rem;
    }

    .story-section h2 {
      font-size: 1.1rem;
    }

    .story-section p {
      font-size: 0.9rem;
    }

    .highlight-card {
      padding: 16px;
    }

    .highlight-icon {
      font-size: 1.8rem;
    }

    .highlight-card h3 {
      font-size: 1rem;
    }

    .highlight-card p {
      font-size: 0.85rem;
    }

    .about-cta {
      padding: 20px;
    }

    .about-cta h3 {
      font-size: 1.3rem;
    }
  }
</style>
