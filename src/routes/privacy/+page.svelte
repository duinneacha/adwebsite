<script>
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Privacy Policy for Web Consulting Services | Aidan Dennehy</title>
  <meta
    name="description"
    content="Privacy policy for Aidan Dennehy's web consulting services in Cork, Ireland, explaining what data we collect, use, and protect."
  />
  <link rel="canonical" href="https://www.aidandennehy.ie/privacy" />
</svelte:head>

<main class="legal-page">
  <div class="container">
    <header class="page-header">
      <h1>Privacy Policy</h1>
      <p class="last-updated">
        Last updated: {new Date().toLocaleDateString("en-IE")}
      </p>
    </header>

    <div class="content">
      <p>
        This Privacy Policy explains how Aidan Dennehy handles personal
        information on this site for visitors and clients in Cork, Ireland. For
        related details, read the <a href="/cookies">Cookie Policy</a> and
        <a href="/terms">Terms of Service</a>.
      </p>
      <section>
        <h2>1. Information We Collect</h2>
        <p>
          When you contact us through our website, we may collect the following
          information:
        </p>
        <ul>
          <li>Your name and email address</li>
          <li>Business name and contact information</li>
          <li>Information you provide in contact forms or emails</li>
          <li>Website usage data through analytics (anonymized)</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your inquiries and provide consulting services</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>3. Data Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except:
        </p>
        <ul>
          <li>
            To trusted service providers who assist us in operating our website
          </li>
          <li>When required by law or to protect our rights</li>
          <li>With your explicit consent</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal
          information against unauthorized access, alteration, disclosure, or
          destruction.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>Under GDPR, you have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Rectify inaccurate personal data</li>
          <li>Erase your personal data</li>
          <li>Restrict processing of your personal data</li>
          <li>Data portability</li>
          <li>Object to processing</li>
        </ul>
      </section>

      <section>
        <h2>6. Cookies</h2>
        <p>
          Our website may use cookies to enhance your experience. You can choose
          to disable cookies through your browser settings.
        </p>
      </section>

      <section>
        <h2>7. Contact Information</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          Email: <a href="mailto:duinneahca@gmail.com">duinneahca@gmail.com</a
          ><br />
          Address: Cork, Ireland
        </p>
      </section>

      <section>
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated revision date.
        </p>
      </section>
    </div>

    <div class="back-link">
      <a href="/">← Back to Home</a>
    </div>
  </div>
</main>

<style>
  .legal-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 80px 16px 60px;
    color: var(--text-primary);
    line-height: 1.6;
  }

  .container {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  .page-header {
    text-align: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--accent-color);
  }

  .page-header h1 {
    font-size: 2.5rem;
    color: var(--accent-color);
    margin: 0 0 10px;
    font-weight: 700;
  }

  .last-updated {
    color: var(--text-secondary);
    font-style: italic;
    margin: 0;
  }

  .content {
    margin-bottom: 40px;
  }

  section {
    margin-bottom: 32px;
  }

  h2 {
    color: var(--text-primary);
    font-size: 1.4rem;
    margin: 0 0 16px;
    font-weight: 600;
  }

  p {
    margin: 0 0 16px;
    color: var(--text-secondary);
  }

  ul {
    margin: 0 0 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
    color: var(--text-secondary);
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 500;
  }

  a:hover {
    color: var(--accent-hover);
    text-decoration: underline;
  }

  .back-link {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid var(--border-color);
  }

  .back-link a {
    display: inline-block;
    padding: 12px 24px;
    background: var(--accent-color);
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.2s ease;
  }

  .back-link a:hover {
    background: var(--accent-hover);
    text-decoration: none;
  }

  /* Mobile Responsive */
  @media (max-width: 768px) {
    .legal-page {
      padding: 60px 12px 40px;
    }

    .container {
      padding: 24px;
    }

    .page-header h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.2rem;
    }
  }
</style>
