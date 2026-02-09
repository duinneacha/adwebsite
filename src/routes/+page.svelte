<script>
  // Logo is now in static folder, accessed directly via URL
  import { onMount } from "svelte";

  let isDark = true;
  let mounted = false;

  onMount(() => {
    mounted = true;
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      isDark = savedTheme === "dark";
    } else {
      // Default to dark theme if no preference saved
      isDark = true;
      localStorage.setItem("theme", "dark");
    }
    updateTheme();
    console.log("Component mounted, theme:", isDark ? "dark" : "light");
  });

  // Initialize theme on client side only after component loads
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
      // Force remove both classes first to ensure clean state
      htmlElement.classList.remove("light-theme", "dark-theme");

      // Add the appropriate class
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

  // Dynamic logo based on theme
  $: logoPath = isDark ? "/adlogo-dark.png" : "/adlogo-light.png";
</script>

<svelte:head>
  <title>Cork Web Consultant & SEO Services | Aidan Dennehy</title>
  <meta
    name="description"
    content="Cork-based web consultant helping local businesses with SEO, data analytics, and modern websites. Practical support to grow online in Ireland."
  />
  <link rel="canonical" href="https://www.aidandennehy.ie/" />
</svelte:head>

<nav class="nav">
  <div class="container">
    <div class="brand">
      <img src={logoPath} alt="AD Logo" class="logo" />
      <span>AD</span>
    </div>
    <div class="nav-right">
      <ul class="links">
        <li><a href="#home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
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
  <section id="home" class="section hero-section">
    <div class="hero">
      <img src={logoPath} alt="AD Logo" class="hero-logo" />
      <h1 class="hero-title">
        Clear, well-defined web and data systems for Cork businesses
      </h1>
      <p class="hero-subtitle-text">
        I help you turn a vague idea or messy process into a reliable,
        maintainable solution — by defining requirements properly before we
        build.
      </p>
      <div class="hero-actions">
        <a class="cta-button" href="#contact">Book a 15-minute call</a>
        <a class="cta-button secondary" href="#how-i-work">See how I work</a>
      </div>
    </div>
  </section>

  <section id="how-i-work" class="section">
    <div class="content-block">
      <h2 class="section-title">How I work</h2>
      <p class="section-intro">
        Most projects go wrong because goals and requirements were never
        properly nailed down. I start with clarity, then build.
      </p>
      <div class="process-grid">
        <div class="process-card">
          <span class="process-step">1</span>
          <h3>Discovery</h3>
          <p>
            Understand the business, constraints, and what “success” means.
          </p>
        </div>
        <div class="process-card">
          <span class="process-step">2</span>
          <h3>Requirements</h3>
          <p>Define scope, priorities, and what we’re not doing.</p>
        </div>
        <div class="process-card">
          <span class="process-step">3</span>
          <h3>Prototype</h3>
          <p>Early working version to validate direction fast.</p>
        </div>
        <div class="process-card">
          <span class="process-step">4</span>
          <h3>Build & iterate</h3>
          <p>Steady delivery with transparent updates.</p>
        </div>
        <div class="process-card">
          <span class="process-step">5</span>
          <h3>Handover & support</h3>
          <p>Documentation, maintenance options, next steps.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="content-block">
      <h2 class="section-title">Why this approach works</h2>
      <ul class="benefit-list">
        <li>Reduces rework and scope drift</li>
        <li>Makes cost and timelines more predictable</li>
        <li>Produces clearer, maintainable systems</li>
        <li>Keeps decisions tied to business value</li>
      </ul>
      <p class="credibility-line">
        I’m an experienced IT consultant working across web development and data
        analytics, with a focus on clear communication and practical delivery.
      </p>
    </div>
  </section>

  <section id="contact" class="section">
    <div class="contact-container">
      <div class="contact-header">
        <h2 class="contact-title">Get In Touch</h2>
        <p class="contact-subtitle">
          If you’re considering a new system — or improving an existing one —
          tell me what you’re trying to achieve. Review the
          <a href="/privacy">Privacy Policy</a> and
          <a href="/cookies">Cookie Policy</a> for details on how this site handles
          your data.
        </p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <h3>📧 Email Me Directly</h3>
            <p>
              <a href="mailto:duinneacha@gmail.com" class="contact-link"
                >duinneacha@gmail.com</a
              >
            </p>
          </div>

          <div class="contact-item">
            <h3>🚀 Quick Response</h3>
            <p>
              I typically respond within 24 hours and offer free 15-minute
              consultations to discuss your local search goals.
            </p>
          </div>

          <div class="contact-item">
            <h3>📍 Local to Cork</h3>
            <p>
              Based in Cork, I understand the local market and can meet in
              person if needed.
            </p>
          </div>
        </div>

        <div class="contact-form-wrapper">
          <form
            class="contact-form"
            action="https://formspree.io/f/mvzbggar"
            method="POST"
          >
            <div class="form-group">
              <label for="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Smith"
              />
            </div>

            <div class="form-group">
              <label for="email">Your Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
              />
            </div>

            <div class="form-group">
              <label for="business">Business Name</label>
              <input
                type="text"
                id="business"
                name="business"
                placeholder="Your Business Name"
              />
            </div>

            <div class="form-group">
              <label for="service">What are you trying to improve? *</label>
              <select id="service" name="service" required>
                <option value="">Select a service...</option>
                <option value="Local Search Domination"
                  >Local Search Domination</option
                >
                <option value="Customer Insights Dashboard"
                  >Customer Insights Dashboard</option
                >
                <option value="AI-Powered Website">AI-Powered Website</option>
                <option value="General Consultation"
                  >General Consultation</option
                >
              </select>
            </div>

            <div class="form-group">
              <label for="message">Tell me about your goals *</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Describe your current challenges and what you'd like to achieve with your online presence..."
              ></textarea>
              <p class="form-helper">
                If you’re not sure, describe the situation — we’ll define the
                requirements together.
              </p>
            </div>

            <button type="submit" class="submit-btn">Send Message 🚀</button>
          </form>
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

  :global(html) {
    scroll-behavior: smooth;
  }

  .section {
    padding: 48px 0;
    scroll-margin-top: calc(var(--header-height) + 16px);
    border-bottom: 1px solid var(--border-color);
  }

  .hero-section {
    background: linear-gradient(
      135deg,
      var(--bg-primary) 0%,
      var(--bg-secondary) 100%
    );
    border-bottom: 2px solid var(--accent-color);
    position: relative;
    overflow: hidden;
  }

  .hero-section::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(59, 130, 246, 0.05) 100%
    );
    pointer-events: none;
  }

  .hero {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    position: relative;
    z-index: 1;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--text-primary);
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .cta-button {
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
    border: none;
    cursor: pointer;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cta-button.secondary {
    background: transparent;
    border: 2px solid var(--accent-color);
    color: var(--accent-color);
    box-shadow: none;
  }

  .cta-button.secondary:hover {
    background: var(--bg-secondary);
    box-shadow: none;
  }

  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
  }

  .hero-logo {
    height: 120px;
    width: auto;
    margin-bottom: 16px;
    transition: opacity 0.3s ease;
  }

  .hero-subtitle-text {
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin: 8px 0 16px;
  }

  .content-block {
    max-width: 900px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.2rem;
    text-align: center;
    margin: 0 0 16px;
    color: var(--text-primary);
    font-weight: 700;
  }

  .section-intro {
    text-align: center;
    color: var(--text-secondary);
    margin: 0 auto 32px;
    max-width: 720px;
    line-height: 1.6;
  }

  .process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
  }

  .process-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 20px;
  }

  .process-card h3 {
    margin: 0 0 8px;
    font-size: 1.1rem;
    color: var(--text-primary);
  }

  .process-card p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.5;
  }

  .process-step {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: var(--accent-color);
    color: #fff;
    font-weight: 700;
    margin-bottom: 12px;
    font-size: 0.9rem;
  }

  .benefit-list {
    list-style: none;
    padding: 0;
    margin: 0 auto 24px;
    max-width: 720px;
    display: grid;
    gap: 12px;
  }

  .benefit-list li {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 10px;
    padding: 14px 16px;
    color: var(--text-secondary);
  }

  .credibility-line {
    text-align: center;
    color: var(--text-secondary);
    margin: 0 auto;
    max-width: 720px;
    line-height: 1.6;
  }

  /* Contact Section Styles */
  .contact-container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .contact-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .contact-title {
    font-size: 2.5rem;
    color: var(--text-primary);
    margin: 0 0 16px;
    font-weight: 700;
  }

  .contact-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .contact-item h3 {
    font-size: 1.3rem;
    color: var(--accent-color);
    margin: 0 0 8px;
    font-weight: 600;
  }

  .contact-item p {
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.6;
  }

  .contact-link {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.2s ease;
  }

  .contact-link:hover {
    color: var(--accent-hover);
    text-decoration: underline;
  }

  .contact-form-wrapper {
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
    font-size: 0.95rem;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 12px 16px;
    border: 2px solid var(--border-color);
    border-radius: 8px;
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 1rem;
    transition: border-color 0.2s ease;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: var(--text-muted);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
  }

  .form-helper {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin: 8px 0 0;
  }

  .submit-btn {
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-hover) 100%
    );
    color: white;
    border: none;
    padding: 16px 32px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    margin-top: 8px;
  }

  .submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(59, 130, 246, 0.4);
  }

  .submit-btn:active {
    transform: translateY(0);
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

  /* Mobile Responsive */
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

    .hero-title {
      font-size: 2.2rem;
      line-height: 1.2;
    }

    .hero-logo {
      height: 80px;
    }

    .hero-subtitle-text {
      font-size: 1rem;
    }

    .cta-button {
      width: 100%;
      text-align: center;
      padding: 14px 24px;
    }

    .hero-actions {
      width: 100%;
    }

    .section-title {
      font-size: 1.8rem;
    }

    main {
      padding: 16px 8px 60px;
    }

    .section {
      padding: 32px 0;
    }

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.3rem;
    }

    .contact-content {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    .contact-title {
      font-size: 2rem;
    }

    .contact-form-wrapper {
      padding: 24px;
    }

    .contact-info {
      order: 2;
    }

    .contact-form-wrapper {
      order: 1;
    }

  }

  @media (max-width: 480px) {
    .hero-title {
      font-size: 1.8rem;
    }

  }
</style>
