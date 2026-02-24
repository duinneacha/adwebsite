<svelte:head>
  <title>About Aidan Dennehy | Full-Stack Developer & Data Analyst</title>
  <meta name="description" content="35+ years of commercial IT delivery across Ireland, the UK, the US, and India. BSc Computer Science & Web Dev (MTU, 2021) · MSc Data Science & Analytics (MTU, 2024). Actively seeking employment." />
  <link rel="canonical" href="https://www.aidandennehy.ie/about" />
</svelte:head>

<div class="page-wrap">

  <header class="page-header">
    <div class="header-inner">
      <div class="page-eyebrow">✦ About</div>
      <h1 class="page-title">Aidan<br /><em>Dennehy.</em></h1>
      <p class="page-sub">35+ years of commercial IT delivery · Cork-based · Actively seeking employment</p>
    </div>
  </header>

  <!-- Story sections -->
  <section class="site-section">
    <div class="section-inner story-grid">
      <div class="story-col">
        <div class="story-block">
          <div class="section-label">✦ The Long Game</div>
          <h2 class="story-heading">Started in 1989.<br />Still building.</h2>
          <p class="story-body">
            I started writing code professionally in 1989. Since then I've built payroll systems, MRP systems, plant maintenance reporting for Coal India, audit management systems, project cost control systems in the USA, data capture networks, CRM integrations, and full-stack web applications. I've worked across Ireland, Europe, the UK, the USA, and India — in startups, research centres, and large enterprises.
          </p>
        </div>

        <div class="story-block">
          <div class="section-label">✦ Back to Learn</div>
          <h2 class="story-heading">Experience plus<br /><em>formal qualifications.</em></h2>
          <p class="story-body">
            In 2021 I completed a BSc in Computer Science &amp; Web Development at MTU Cork, and in 2024 an MSc in Data Science &amp; Analytics — also at MTU. I went back because I wanted formal grounding in the modern stack, not just experience. The combination of 35 years of commercial delivery and up-to-date academic qualifications is something most candidates simply don't have.
          </p>
        </div>

        <div class="story-block">
          <div class="section-label">✦ How I Work Now</div>
          <h2 class="story-heading">AI-fluent,<br /><em>full-stack.</em></h2>
          <p class="story-body">
            I work across the full stack — Python, JavaScript, TypeScript, React, Node.js, SQL, machine learning, data visualisation. I'm fluent with modern AI-assisted development tools including Claude Code, Cursor, and GitHub Copilot — not as a shortcut, but as a way to deliver better work faster while keeping full understanding of what's being built.
          </p>
        </div>
      </div>

      <div class="highlights-col">
        <div class="highlight-card">
          <div class="hl-num">35<em>+</em></div>
          <div class="hl-label">Years Experience</div>
          <p class="hl-note">Commercial delivery from 1989 across four countries</p>
        </div>
        <div class="highlight-card">
          <div class="hl-num">BSc<em>+</em>MSc</div>
          <div class="hl-label">MTU Qualifications</div>
          <p class="hl-note">Computer Science (2021) and Data Science &amp; Analytics (2024)</p>
        </div>
        <div class="highlight-card">
          <div class="hl-num">AI<em>.</em></div>
          <div class="hl-label">AI-Fluent</div>
          <p class="hl-note">Daily use of Claude Code, Cursor, Copilot in production workflows</p>
        </div>
        <div class="highlight-card">
          <div class="hl-num"><em>4</em></div>
          <div class="hl-label">Countries</div>
          <p class="hl-note">Ireland, UK, USA, India — enterprise and startup environments</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="site-section">
    <div class="section-inner cta-section">
      <div class="cta-left">
        <div class="section-label">✦ Next Step</div>
        <h2 class="section-title">Looking to hire<br />or collaborate?</h2>
        <p class="section-note">Let's have a conversation about what you're trying to build.</p>
      </div>
      <div class="cta-right">
        <a href="/#contact" class="cta-btn">Get in touch →</a>
        <a href="https://www.linkedin.com/in/aidan-dennehy-bsc-msc-cork" target="_blank" rel="noopener" class="cta-btn-outline">View LinkedIn</a>
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
  .page-title { font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 900; letter-spacing: -0.05em; line-height: 0.92; color: var(--ink); margin-bottom: 20px; }
  .page-title em { font-style: normal; color: var(--red); }
  .page-eyebrow { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); font-weight: 800; margin-bottom: 20px; }
  .page-sub { font-size: 1rem; color: var(--ink-dim); max-width: 480px; line-height: 1.65; }
  .page-header { border-bottom: 1px solid var(--ink-rule); }

  .story-grid {
    display: grid;
    grid-template-columns: 1fr 360px;
    gap: 80px;
    align-items: start;
  }
  .story-col { display: flex; flex-direction: column; gap: 56px; }
  .story-block {}
  .story-heading {
    font-size: clamp(1.6rem, 2.8vw, 2.2rem);
    font-weight: 900;
    letter-spacing: -0.04em;
    color: var(--ink);
    line-height: 1.0;
    margin: 12px 0 18px;
  }
  .story-heading em { font-style: normal; color: var(--red); }
  .story-body { font-size: 1rem; color: var(--ink-dim); line-height: 1.75; }

  .highlights-col { display: flex; flex-direction: column; gap: 1px; }
  .highlight-card {
    background: var(--ink-faint);
    border: 1px solid var(--ink-rule);
    padding: 28px 24px;
    position: relative;
    overflow: hidden;
    transition: background 0.2s;
  }
  .highlight-card::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 0;
    background: var(--red);
    transition: width 0.3s ease;
  }
  .highlight-card:hover { background: var(--red-dim); }
  .highlight-card:hover::before { width: 3px; }
  .hl-num {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -0.04em;
    color: var(--ink);
    line-height: 1;
    margin-bottom: 6px;
  }
  .hl-num em { font-style: normal; color: var(--red); }
  .hl-label {
    font-size: 0.68rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--red);
    font-weight: 800;
    margin-bottom: 8px;
  }
  .hl-note { font-size: 0.82rem; color: var(--ink-dim); line-height: 1.5; margin: 0; }

  .cta-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
  }
  .cta-right { display: flex; flex-direction: column; gap: 12px; flex-shrink: 0; }
  .cta-btn {
    display: block;
    background: var(--red);
    color: #fff;
    padding: 16px 40px;
    font-weight: 900;
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.2s;
    text-align: center;
    white-space: nowrap;
  }
  .cta-btn:hover { filter: brightness(1.1); }
  .cta-btn-outline {
    display: block;
    background: transparent;
    color: var(--ink-dim);
    padding: 16px 40px;
    font-weight: 700;
    font-size: 0.85rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    border: 1px solid var(--ink-rule);
    border-radius: 4px;
    transition: all 0.2s;
    text-align: center;
    white-space: nowrap;
  }
  .cta-btn-outline:hover { border-color: var(--ink-muted); color: var(--ink); }

  @media (max-width: 1024px) {
    .header-inner { padding: 56px 40px 44px; }
    .story-grid { gap: 48px; }
  }
  @media (max-width: 900px) {
    .header-inner { padding: 48px 24px 36px; }
    .story-grid { grid-template-columns: 1fr; gap: 0; }
    .highlights-col { flex-direction: row; flex-wrap: wrap; margin-top: 0; }
    .highlight-card { flex: 1; min-width: 180px; }
    .cta-section { flex-direction: column; align-items: flex-start; }
    .cta-right { flex-direction: row; flex-wrap: wrap; }
  }
  @media (max-width: 600px) {
    .cta-right { flex-direction: column; width: 100%; }
    .cta-btn, .cta-btn-outline { text-align: center; }
  }
</style>
