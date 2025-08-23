<script>
  // Logo is now in static folder, accessed directly via URL
</script>

<nav class="nav">
  <div class="container">
    <div class="brand">
      <img src="/adlogo.png" alt="AD Logo" class="logo" />
      <span>AD</span>
    </div>
    <ul class="links">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

<main>
  <section id="home" class="section">
    <div class="hero">
      <img src="/adlogo.png" alt="AD Logo" class="hero-logo" />
      <h1>Welcome to AD</h1>
      <p class="slogan">Your Local Partner for Smarter Tech</p>
      <p>Explore my services, recent projects, and get in touch.</p>
    </div>
  </section>

  <section id="services" class="section">
    <h2>Services</h2>
    <div class="services-grid">
      <div class="service-card">
        <h3>Local Search Domination</h3>
        <p class="service-subtitle">
          Get Your Business to the Top of Google Maps and Search
        </p>
        <p class="service-description">
          Stop losing customers to competitors who show up first online. I'll
          optimize your Google Business Profile, build local citations, and
          implement proven strategies to get you ranking at the top when local
          customers search. Includes automated review generation and monthly
          performance reporting so you can see your climbing rankings and
          increased visibility.
        </p>
      </div>

      <div class="service-card">
        <h3>Smart Customer Insights Dashboard</h3>
        <p class="service-subtitle">Know Your Business Like Never Before</p>
        <p class="service-description">
          Turn your scattered business data into clear, actionable insights.
          I'll create a custom dashboard that shows you who your best customers
          really are, when they buy, what they spend, and which marketing
          actually works. Get automated reports that translate complex analytics
          into plain English decisions you can act on immediately.
        </p>
      </div>

      <div class="service-card">
        <h3>AI-Powered Website That Sells 24/7</h3>
        <p class="service-subtitle">
          Your Digital Salesperson That Never Sleeps
        </p>
        <p class="service-description">
          Transform your website from a digital brochure into a sales machine.
          I'll build you a modern, mobile-optimized site with an AI chatbot that
          answers questions, captures leads, and guides visitors toward buying -
          even when you're closed. Includes lead capture systems and automated
          follow-up sequences.
        </p>
      </div>
    </div>
  </section>

  <section id="projects" class="section">
    <h2>Projects</h2>
    <p>Project highlights will appear here.</p>
  </section>

  <section id="contact" class="section">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
  </section>
</main>

<style>
  :root {
    --header-height: 64px;
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
    color: #111827;
    background: #ffffff;
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: saturate(180%) blur(10px);
    border-bottom: 1px solid #e5e7eb;
    height: var(--header-height);
    display: flex;
    align-items: center;
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
    color: #374151;
    padding: 6px 8px;
    border-radius: 6px;
  }

  .links a:hover,
  .links a:focus {
    background: #f3f4f6;
    color: #111827;
  }

  main {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 16px 80px;
  }

  .section {
    padding: 48px 0;
    scroll-margin-top: calc(var(--header-height) + 16px);
    border-bottom: 1px solid #f3f4f6;
  }

  .hero {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  .hero-logo {
    height: 120px;
    width: auto;
    margin-bottom: 16px;
  }

  .slogan {
    font-size: 1.25rem;
    font-weight: 500;
    color: #6b7280;
    margin: 8px 0 16px;
    font-style: italic;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    margin-top: 32px;
  }

  .service-card {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
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
    color: #111827;
  }

  .service-subtitle {
    font-size: 1rem;
    font-weight: 600;
    color: #374151;
    margin: 0 0 16px;
  }

  .service-description {
    color: #6b7280;
    line-height: 1.6;
    margin: 0;
  }

  .section:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  h1 {
    margin: 0 0 8px;
    font-size: 2rem;
  }

  h2 {
    margin: 0 0 12px;
    font-size: 1.5rem;
  }
</style>
