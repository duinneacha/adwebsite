<svelte:head>
  <title>Skills & Services | Aidan Dennehy — Full-Stack Developer & Data Analyst</title>
  <meta name="description" content="Full-stack development, data analysis, and AI-assisted engineering. 30+ years of commercial IT experience. MSc Data Science & Analytics (MTU, 2024). Available for employment or project work." />
  <link rel="canonical" href="https://www.aidandennehy.ie/services" />
</svelte:head>

<div class="page-wrap">

  <header class="page-header">
    <div class="header-inner">
      <div class="page-eyebrow">✦ Skills &amp; Services</div>
      <h1 class="page-title">What I can<br /><em>do for you.</em></h1>
      <p class="page-sub">Full-stack development, data analysis, and AI-assisted engineering — backed by 30+ years of commercial delivery and an MSc from MTU.</p>
    </div>
  </header>

  <!-- Availability banner -->
  <div class="avail-banner">
    <div class="avail-inner">
      <div class="avail-dot"></div>
      <span class="avail-text">Available for employment, contract, or project work · Cork-based · Remote-friendly</span>
      <a href="/#contact" class="avail-cta">Get in touch →</a>
    </div>
  </div>

  <!-- Full-stack -->
  <section class="site-section">
    <div class="section-inner service-feature">
      <div class="service-tag">
        <div class="section-label">✦ Primary Service</div>
        <h2 class="service-title">Full-Stack<br />Development</h2>
        <p class="service-sub">End-to-end web application development — from requirements through to production</p>
      </div>
      <div class="service-detail">
        <p class="service-body">
          I design and build complete web applications. I work across the full stack — from database design and backend APIs through to responsive frontends — with an emphasis on well-defined requirements, clean architecture, and practical delivery. I've built and maintained systems for organisations across multiple countries over three decades.
        </p>
        <div class="service-items">
          <div class="service-item">
            <div class="si-bar"></div>
            <span>Python (FastAPI, Flask) · Node.js backends</span>
          </div>
          <div class="service-item">
            <div class="si-bar"></div>
            <span>React · Vue · Svelte · TypeScript frontends</span>
          </div>
          <div class="service-item">
            <div class="si-bar"></div>
            <span>MySQL · MongoDB · Docker · Git</span>
          </div>
          <div class="service-item">
            <div class="si-bar"></div>
            <span>Requirements definition and technical documentation</span>
          </div>
        </div>
        <a class="service-cta" href="/#contact">Discuss a project →</a>
      </div>
      <div class="tech-grid">
        <div class="tech-label">Stack</div>
        <div class="tech-tags">
          {#each ['Python','FastAPI','Flask','Node.js','TypeScript','JavaScript','React','Vue','SvelteKit','MySQL','MongoDB','Docker','Git','REST APIs'] as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- Additional services -->
  <section class="site-section">
    <div class="section-inner">
      <div class="section-label">✦ Additional Expertise</div>
      <div class="services-grid">
        <div class="svc-card">
          <div class="svc-num">01</div>
          <div class="svc-accent"></div>
          <h3 class="svc-title">Data Analysis &amp; Reporting</h3>
          <p class="svc-sub">From raw data to clear decisions</p>
          <p class="svc-body">
            MSc in Data Science &amp; Analytics (MTU, 2024). I work across the full data pipeline — ingestion, transformation, statistical analysis, and machine learning — through to executive-facing dashboards in Power BI and Tableau. Commercial experience as a senior data analyst in enterprise environments across Ireland and internationally.
          </p>
        </div>
        <div class="svc-card">
          <div class="svc-num">02</div>
          <div class="svc-accent"></div>
          <h3 class="svc-title">AI-Assisted Development</h3>
          <p class="svc-sub">AI tools applied practically, not superficially</p>
          <p class="svc-body">
            I use Claude Code, Cursor, and GitHub Copilot as genuine productivity tools in daily development — not autocomplete novelties. Combined with hands-on experience in TensorFlow and Scikit-learn for ML model development, I can deliver faster without sacrificing code quality or maintainability.
          </p>
        </div>
      </div>
    </div>
  </section>

  <footer class="site-footer">
    <div class="foot-brand">Aidan<span class="foot-brand-dot">.</span></div>
    <div class="foot-social">
      <a class="foot-social-link" href="https://www.linkedin.com/in/aidan-dennehy-bsc-msc-cork" target="_blank" rel="noopener">LinkedIn</a>
      <a class="foot-social-link" href="https://github.com/duinneacha" target="_blank" rel="noopener">GitHub</a>
    </div>
    <div class="foot-note">© 2025 Aidan Dennehy · Carrigtwohill, Cork</div>
  </footer>

</div>

<style>
  .page-wrap { position: relative; z-index: 1; }

  .header-inner { max-width: 1200px; margin: 0 auto; padding: 72px 64px 56px; }
  .page-eyebrow { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); font-weight: 800; margin-bottom: 20px; }
  .page-title { font-size: clamp(2.8rem, 6vw, 5rem); font-weight: 900; letter-spacing: -0.05em; line-height: 0.92; color: var(--ink); margin-bottom: 20px; }
  .page-title em { font-style: normal; color: var(--red); }
  .page-sub { font-size: 1rem; color: var(--ink-dim); max-width: 520px; line-height: 1.7; }
  .page-header { border-bottom: 1px solid var(--ink-rule); }

  /* Availability banner */
  .avail-banner {
    position: relative; z-index: 1;
    border-bottom: 1px solid var(--ink-rule);
    background: var(--red-dim);
  }
  .avail-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 64px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .avail-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--red);
    flex-shrink: 0;
    animation: blink 2s ease-in-out infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
  .avail-text { font-size: 0.8rem; color: var(--red); font-weight: 700; letter-spacing: 0.06em; flex: 1; }
  .avail-cta {
    color: var(--red);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-decoration: none;
    white-space: nowrap;
    border: 1px solid var(--red-border);
    padding: 6px 16px;
    border-radius: 3px;
    transition: all 0.2s;
  }
  .avail-cta:hover { background: var(--red); color: #fff; }

  /* Feature service */
  .service-feature {
    display: grid;
    grid-template-columns: 320px 1fr;
    grid-template-rows: auto auto;
    gap: 0 64px;
  }
  .service-tag {
    grid-column: 1;
    grid-row: 1;
    padding-bottom: 40px;
  }
  .service-title {
    font-size: clamp(2rem, 3.5vw, 3rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 0.95;
    color: var(--ink);
    margin: 12px 0 16px;
  }
  .service-sub { font-size: 0.88rem; color: var(--ink-dim); line-height: 1.6; }
  .service-detail { grid-column: 2; grid-row: 1; }
  .service-body { font-size: 0.98rem; color: var(--ink-dim); line-height: 1.75; margin-bottom: 28px; }
  .service-items { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
  .service-item {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 0.88rem;
    color: var(--ink-dim);
    font-weight: 500;
  }
  .si-bar { width: 20px; height: 2px; background: var(--red); flex-shrink: 0; }
  .service-cta {
    display: inline-block;
    background: var(--red);
    color: #fff;
    padding: 14px 32px;
    font-weight: 900;
    font-size: 0.82rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s;
  }
  .service-cta:hover { filter: brightness(1.1); }
  .tech-grid {
    grid-column: 1 / -1;
    grid-row: 2;
    border-top: 1px solid var(--ink-rule);
    padding-top: 32px;
    margin-top: 32px;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  .tech-label { font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--ink-muted); font-weight: 700; white-space: nowrap; }
  .tech-tags { display: flex; gap: 8px; flex-wrap: wrap; }
  .tech-tag {
    background: var(--ink-faint);
    border: 1px solid var(--ink-rule);
    color: var(--ink-dim);
    font-size: 0.72rem;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 3px;
    letter-spacing: 0.04em;
    transition: all 0.18s;
  }
  .tech-tag:hover { background: var(--red-dim); border-color: var(--red-border); color: var(--red); }

  /* Additional services grid */
  .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 28px; }
  .svc-card {
    padding: 48px 40px;
    border: 1px solid var(--ink-rule);
    transition: background 0.2s;
  }
  .svc-card:hover { background: var(--red-dim); }
  .svc-card:hover .svc-accent { width: 36px; }
  .svc-num { font-size: 3.5rem; font-weight: 900; color: var(--ink-faint); letter-spacing: -0.05em; line-height: 1; margin-bottom: 8px; }
  .svc-accent { width: 18px; height: 3px; background: var(--red); margin-bottom: 20px; transition: width 0.3s; }
  .svc-title { font-size: 1.2rem; font-weight: 800; color: var(--ink); margin-bottom: 8px; letter-spacing: -0.02em; }
  .svc-sub { font-size: 0.82rem; color: var(--red); font-weight: 700; letter-spacing: 0.04em; margin-bottom: 16px; }
  .svc-body { font-size: 0.88rem; color: var(--ink-dim); line-height: 1.7; margin: 0; }

  @media (max-width: 1024px) {
    .header-inner { padding: 56px 40px 44px; }
    .avail-inner { padding: 14px 40px; }
    .service-feature { gap: 0 40px; }
  }
  @media (max-width: 900px) {
    .header-inner { padding: 48px 24px 36px; }
    .avail-inner { padding: 12px 24px; flex-wrap: wrap; }
    .service-feature { grid-template-columns: 1fr; gap: 0; }
    .service-tag { grid-column: 1; grid-row: 1; padding-bottom: 0; margin-bottom: 32px; }
    .service-detail { grid-column: 1; grid-row: 2; }
    .tech-grid { grid-column: 1; grid-row: 3; }
    .services-grid { grid-template-columns: 1fr; }
  }
</style>
