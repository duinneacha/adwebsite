<script>
  import { onMount } from "svelte";

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Terms of Service - Aidan Dennehy</title>
  <meta
    name="description"
    content="Terms of Service for Aidan Dennehy's web consulting services. Understand our service terms and conditions."
  />
</svelte:head>

<main class="legal-page">
  <div class="container">
    <header class="page-header">
      <h1>Terms of Service</h1>
      <p class="last-updated">
        Last updated: {new Date().toLocaleDateString("en-IE")}
      </p>
    </header>

    <div class="content">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the services provided by Aidan Dennehy ("we,"
          "us," or "our"), you accept and agree to be bound by the terms and
          provision of this agreement.
        </p>
      </section>

      <section>
        <h2>2. Services Provided</h2>
        <p>
          We provide web consulting and data analysis services, including but
          not limited to:
        </p>
        <ul>
          <li>Local SEO and Google Business Profile optimization</li>
          <li>Website development and design</li>
          <li>Data analytics and business intelligence</li>
          <li>AI-powered website solutions</li>
          <li>Digital marketing consulting</li>
        </ul>
      </section>

      <section>
        <h2>3. Client Responsibilities</h2>
        <p>As a client, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Respond to requests for information in a timely manner</li>
          <li>Pay invoices according to agreed terms</li>
          <li>
            Provide necessary access to platforms and accounts when required
          </li>
          <li>Review and approve deliverables within reasonable timeframes</li>
        </ul>
      </section>

      <section>
        <h2>4. Payment Terms</h2>
        <ul>
          <li>
            Payment terms will be specified in individual project agreements
          </li>
          <li>Late payments may incur additional charges</li>
          <li>
            Refunds are subject to the specific terms of each project agreement
          </li>
          <li>All prices are quoted in Euros unless otherwise specified</li>
        </ul>
      </section>

      <section>
        <h2>5. Intellectual Property</h2>
        <p>
          Upon full payment, clients will own the intellectual property rights
          to custom work created specifically for them. However:
        </p>
        <ul>
          <li>
            We retain rights to our methodologies, tools, and general knowledge
          </li>
          <li>
            Third-party software and platforms remain the property of their
            respective owners
          </li>
          <li>
            We may use anonymized project data for case studies and marketing
            purposes
          </li>
        </ul>
      </section>

      <section>
        <h2>6. Confidentiality</h2>
        <p>
          We respect the confidentiality of your business information and will
          not disclose sensitive information to third parties without your
          consent, except as required by law.
        </p>
      </section>

      <section>
        <h2>7. Limitation of Liability</h2>
        <p>
          Our liability is limited to the amount paid for our services. We are
          not responsible for indirect, incidental, or consequential damages
          arising from our services.
        </p>
      </section>

      <section>
        <h2>8. Performance and Results</h2>
        <p>While we strive to deliver the best possible results:</p>
        <ul>
          <li>
            We cannot guarantee specific outcomes such as search engine rankings
          </li>
          <li>
            Results may vary based on market conditions and client
            implementation
          </li>
          <li>
            Our recommendations are based on best practices and industry
            standards
          </li>
        </ul>
      </section>

      <section>
        <h2>9. Termination</h2>
        <p>
          Either party may terminate services with written notice. Upon
          termination:
        </p>
        <ul>
          <li>Payment is due for all work completed</li>
          <li>We will provide deliverables for paid work</li>
          <li>Both parties will return confidential information</li>
        </ul>
      </section>

      <section>
        <h2>10. Governing Law</h2>
        <p>
          These terms are governed by the laws of Ireland. Any disputes will be
          resolved in the courts of Cork, Ireland.
        </p>
      </section>

      <section>
        <h2>11. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will
          be effective when posted on our website with an updated revision date.
        </p>
      </section>

      <section>
        <h2>12. Contact Information</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:
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



















