<svelte:head>
  <title>Projects | Aidan Dennehy — Full-Stack Developer & Data Analyst</title>
  <meta name="description" content="Selected projects including data analysis tools and heritage websites. Explore case studies and live work by Aidan Dennehy." />
  <link rel="canonical" href="https://www.aidandennehy.ie/projects" />
</svelte:head>

<div class="page-wrap">

  <header class="page-header">
    <div class="header-inner">
      <div class="page-eyebrow">✦ Projects</div>
      <h1 class="page-title">Selected<br /><em>work.</em></h1>
      <p class="page-sub">Client and community work across data analysis, local SEO, and heritage preservation.</p>
    </div>
  </header>

  <section class="site-section">
    <div class="section-inner">
      <div class="projects-grid">

        <div class="project-card">
          <div class="project-meta">
            <div class="project-num">01</div>
            <span class="project-type">Client-Side Data Analysis</span>
          </div>
          <div class="project-accent"></div>
          <h2 class="project-title">AP Duplicate Payment Detection</h2>
          <p class="project-desc">
            Client-side tool for identifying potential duplicate payments in AP data using explainable audit rules. Files are processed locally for privacy — nothing leaves the browser.
          </p>
          <div class="project-links">
            <a href="/projects/ap-duplicate-payment-detector" class="project-link project-link-primary">View Project →</a>
          </div>
        </div>

        <div class="project-card project-card-image">
          <div class="project-img-wrap">
            <picture>
              <source srcset="/templecurraheen-pic.webp" type="image/webp" />
              <img src="/templecurraheen-pic.jpg" alt="Templecurraheen Graveyard" />
            </picture>
          </div>
          <div class="project-content">
            <div class="project-meta">
              <div class="project-num">02</div>
              <span class="project-type">Digital Heritage Documentation</span>
            </div>
            <div class="project-accent"></div>
            <h2 class="project-title">Templecurraheen Graveyard</h2>
            <p class="project-desc">
              A comprehensive digital archive documenting the historic Templecurraheen Graveyard in Carrigtwohill, Co. Cork. Burial records, historical photographs, genealogical resources, interactive maps, and a complete searchable archive.
            </p>
            <div class="project-links">
              <a href="https://duinneacha.github.io/templecurraheen-website/" target="_blank" rel="noopener noreferrer" class="project-link project-link-primary">View Live Site →</a>
              <a href="https://github.com/duinneacha/templecurraheen-website" target="_blank" rel="noopener noreferrer" class="project-link project-link-ghost">GitHub</a>
            </div>
          </div>
        </div>

        <div class="project-card project-card-image">
          <div class="project-img-wrap">
            <picture>
              <source srcset="/ballinacurra-pic.webp" type="image/webp" />
              <img src="/ballinacurra-pic.jpeg" alt="Old Ballinacurra Graveyard" />
            </picture>
          </div>
          <div class="project-content">
            <div class="project-meta">
              <div class="project-num">03</div>
              <span class="project-type">Community Heritage Memorial</span>
            </div>
            <div class="project-accent"></div>
            <h2 class="project-title">Old Ballinacurra Graveyard</h2>
            <p class="project-desc">
              A dedicated memorial website for Old Ballinacurra Graveyard, featuring comprehensive grave records, historical features, and community stories. Honours the memory of Frankie Devlin and connects families with their ancestral history.
            </p>
            <div class="project-links">
              <a href="https://www.ballinacurragraveyard.ie/" target="_blank" rel="noopener noreferrer" class="project-link project-link-primary">View Live Site →</a>
            </div>
          </div>
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
  .page-sub { font-size: 1rem; color: var(--ink-dim); max-width: 460px; line-height: 1.7; }
  .page-header { border-bottom: 1px solid var(--ink-rule); }

  .projects-grid { display: flex; flex-direction: column; gap: 1px; }

  .project-card {
    border: 1px solid var(--ink-rule);
    padding: 44px 48px;
    position: relative;
    overflow: hidden;
    transition: background 0.2s;
  }
  .project-card:hover { background: var(--red-dim); }
  .project-card:hover .project-accent { width: 48px; }

  .project-card-image { padding: 0; display: grid; grid-template-columns: 320px 1fr; }
  .project-card-image:hover { background: none; }
  .project-img-wrap { overflow: hidden; }
  .project-img-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; }
  .project-card-image:hover .project-img-wrap img { transform: scale(1.04); }
  .project-content { padding: 44px 48px; transition: background 0.2s; }
  .project-card-image:hover .project-content { background: var(--red-dim); }
  .project-card-image:hover .project-content .project-accent { width: 48px; }

  .project-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; }
  .project-num { font-size: 2.8rem; font-weight: 900; color: var(--ink-faint); letter-spacing: -0.05em; line-height: 1; }
  .project-type { font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--red); font-weight: 800; }
  .project-accent { width: 18px; height: 3px; background: var(--red); margin-bottom: 16px; transition: width 0.3s; }
  .project-title { font-size: 1.4rem; font-weight: 900; letter-spacing: -0.03em; color: var(--ink); margin-bottom: 14px; }
  .project-desc { font-size: 0.88rem; color: var(--ink-dim); line-height: 1.7; margin-bottom: 24px; }
  .project-links { display: flex; gap: 12px; flex-wrap: wrap; }
  .project-link {
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 9px 20px;
    border-radius: 3px;
    transition: all 0.2s;
  }
  .project-link-primary { background: var(--red); color: #fff; }
  .project-link-primary:hover { filter: brightness(1.1); }
  .project-link-ghost { background: transparent; color: var(--ink-dim); border: 1px solid var(--ink-rule); }
  .project-link-ghost:hover { border-color: var(--ink-muted); color: var(--ink); }

  @media (max-width: 1024px) {
    .header-inner { padding: 56px 40px 44px; }
  }
  @media (max-width: 900px) {
    .header-inner { padding: 48px 24px 36px; }
    .project-card { padding: 32px 24px; }
    .project-card-image { grid-template-columns: 1fr; }
    .project-img-wrap { height: 200px; }
    .project-content { padding: 28px 24px; }
  }
</style>
