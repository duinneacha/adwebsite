<script lang="ts">
  import { onMount } from "svelte";

  type ConsentStatus = "accepted" | "declined" | null;

  const consentKey = "analyticsConsent";
  const siteId = "c73897f724d2";

  let consentStatus: ConsentStatus = null;
  let showBanner = false;

  onMount(() => {
    const storedConsent = localStorage.getItem(consentKey) as ConsentStatus;
    if (storedConsent === "accepted" || storedConsent === "declined") {
      consentStatus = storedConsent;
      showBanner = false;
    } else {
      consentStatus = null;
      showBanner = true;
    }
  });

  function acceptAnalytics() {
    consentStatus = "accepted";
    localStorage.setItem(consentKey, "accepted");
    showBanner = false;
  }

  function declineAnalytics() {
    consentStatus = "declined";
    localStorage.setItem(consentKey, "declined");
    showBanner = false;
  }
</script>

<svelte:head>
  {#if consentStatus === "accepted"}
    <!-- Rybbit Analytics -->
    <script
      src="https://app.rybbit.io/api/script.js"
      data-site-id={siteId}
      defer
    ></script>
  {/if}
</svelte:head>

{#if showBanner}
  <div class="consent-banner" role="dialog" aria-live="polite">
    <p class="consent-text">
      This site uses analytics cookies to understand traffic. You can read the
      <a href="/cookies">Cookie Policy</a> and <a href="/privacy">Privacy Policy</a>.
    </p>
    <div class="consent-actions">
      <button class="consent-button consent-decline" on:click={declineAnalytics}>
        Decline
      </button>
      <button class="consent-button consent-accept" on:click={acceptAnalytics}>
        Accept
      </button>
    </div>
  </div>
{/if}

<style>
  .consent-banner {
    position: fixed;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    max-width: 720px;
    width: calc(100% - 32px);
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    z-index: 50;
  }

  .consent-text {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.4;
  }

  .consent-text a {
    color: var(--accent-color);
    text-decoration: none;
    font-weight: 600;
  }

  .consent-text a:hover {
    color: var(--accent-hover);
    text-decoration: underline;
  }

  .consent-actions {
    display: flex;
    gap: 8px;
    flex-shrink: 0;
  }

  .consent-button {
    border-radius: 999px;
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid var(--border-color);
    background: transparent;
    color: var(--text-primary);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .consent-button:hover {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }

  .consent-accept {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: white;
  }

  .consent-accept:hover {
    background: var(--accent-hover);
    border-color: var(--accent-hover);
    color: white;
  }

  @media (max-width: 640px) {
    .consent-banner {
      flex-direction: column;
      align-items: flex-start;
    }

    .consent-actions {
      width: 100%;
      justify-content: flex-end;
    }
  }
</style>
