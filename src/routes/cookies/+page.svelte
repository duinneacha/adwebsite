<script>
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Cookie Policy | Aidan Dennehy</title>
  <meta
    name="description"
    content="Cookie policy for Aidan Dennehy's website in Cork, Ireland, explaining cookie types, purposes, and how to manage preferences."
  />
  <link rel="canonical" href="https://www.aidandennehy.ie/cookies" />
</svelte:head>

<main class="legal-page">
  <div class="container">
    <header class="page-header">
      <h1>Cookie Policy</h1>
      <p class="last-updated">
        Last updated: {new Date().toLocaleDateString("en-IE")}
      </p>
    </header>

    <div class="content">
      <p>
        This Cookie Policy describes how cookies are used on the Aidan Dennehy
        website in Cork, Ireland and what choices you have. See the
        <a href="/privacy">Privacy Policy</a> and
        <a href="/terms">Terms of Service</a> for related details.
      </p>
      <section>
        <h2>1. What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your computer or
          mobile device when you visit a website. They are widely used to make
          websites work more efficiently and to provide information to website
          owners.
        </p>
      </section>

      <section>
        <h2>2. How We Use Cookies</h2>
        <p>Our website uses cookies to:</p>
        <ul>
          <li>Remember your theme preference (dark/light mode)</li>
          <li>Analyze website traffic and usage patterns</li>
          <li>Improve website performance and user experience</li>
          <li>Provide relevant content and features</li>
        </ul>
      </section>

      <section>
        <h2>3. Types of Cookies We Use</h2>

        <h3>Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly:</p>
        <ul>
          <li>
            <strong>Theme Preference:</strong> Remembers your dark/light mode choice
          </li>
          <li>
            <strong>Session Management:</strong> Maintains your session state
          </li>
        </ul>

        <h3>Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors interact with our
          website:
        </p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> Tracks website usage and performance
          </li>
          <li>
            <strong>Page Views:</strong> Counts page visits and popular content
          </li>
        </ul>

        <h3>Performance Cookies</h3>
        <p>These cookies help improve website performance:</p>
        <ul>
          <li>
            <strong>Load Time Optimization:</strong> Caches content for faster loading
          </li>
          <li>
            <strong>Error Tracking:</strong> Identifies and fixes website issues
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Third-Party Cookies</h2>
        <p>We may use third-party services that set their own cookies:</p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> For website analytics and insights
          </li>
          <li>
            <strong>Social Media Platforms:</strong> If you share our content
          </li>
          <li>
            <strong>Content Delivery Networks:</strong> For improved performance
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Managing Your Cookie Preferences</h2>
        <p>You have several options for managing cookies:</p>

        <h3>Browser Settings</h3>
        <p>Most web browsers allow you to:</p>
        <ul>
          <li>View and delete existing cookies</li>
          <li>Block cookies from being set</li>
          <li>Set preferences for specific websites</li>
          <li>Be notified when cookies are being set</li>
        </ul>

        <h3>Opt-Out Options</h3>
        <p>You can opt out of analytics tracking:</p>
        <ul>
          <li>
            Google Analytics: Use the <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener">Google Analytics Opt-out Browser Add-on</a
            >
          </li>
          <li>Do Not Track: Enable this setting in your browser preferences</li>
        </ul>
      </section>

      <section>
        <h2>6. Impact of Disabling Cookies</h2>
        <p>
          Please note that disabling cookies may affect your experience on our
          website:
        </p>
        <ul>
          <li>Your theme preference will not be remembered</li>
          <li>Some features may not work properly</li>
          <li>We won't be able to improve our services based on usage data</li>
        </ul>
      </section>

      <section>
        <h2>7. Cookie Retention</h2>
        <p>Different cookies have different retention periods:</p>
        <ul>
          <li>
            <strong>Session Cookies:</strong> Deleted when you close your browser
          </li>
          <li>
            <strong>Persistent Cookies:</strong> Remain until they expire or you
            delete them
          </li>
          <li>
            <strong>Theme Preference:</strong> Stored indefinitely until you change
            or delete
          </li>
          <li>
            <strong>Analytics Cookies:</strong> Typically expire after 2 years
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in our practices or applicable laws. We will notify you of any
          significant changes by posting the updated policy on our website.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies, please contact us
          at:
        </p>
        <p>
          Email: <a href="mailto:duinneahca@gmail.com">duinneahca@gmail.com</a
          ><br />
          Address: Cork, Ireland
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

  h3 {
    color: var(--text-primary);
    font-size: 1.2rem;
    margin: 20px 0 12px;
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

  strong {
    color: var(--text-primary);
    font-weight: 600;
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

    h3 {
      font-size: 1.1rem;
    }
  }
</style>
