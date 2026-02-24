<script>
  let menuOpen = false;
  function toggleMenu() { menuOpen = !menuOpen; }

  import { onMount } from 'svelte';
  onMount(() => {
    /** @param {MouseEvent} e */
    function handleClickOutside(e) {
      if (e.target instanceof Element && !e.target.closest('.site-nav')) menuOpen = false;
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<nav class="site-nav">
  <div class="nav-inner">
    <a href="/" class="brand">
      <picture>
        <source media="(prefers-color-scheme: light)" srcset="/adlogo-light.webp" type="image/webp" />
        <source media="(prefers-color-scheme: light)" srcset="/adlogo-light.png" type="image/png" />
        <source srcset="/adlogo-dark.webp" type="image/webp" />
        <img src="/adlogo-dark.png" alt="AD Logo" class="brand-logo" />
      </picture>
      <span class="brand-text">Aidan<span class="brand-dot">.</span></span>
    </a>

    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/#contact">Contact</a></li>
    </ul>

    <div class="nav-right">
      <div class="nav-social">
        <a class="social-link" href="https://www.linkedin.com/in/aidan-dennehy-bsc-msc-cork" target="_blank" rel="noopener" aria-label="LinkedIn">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a class="social-link" href="https://github.com/duinneacha" target="_blank" rel="noopener" aria-label="GitHub">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
      </div>
      <a class="hire-btn" href="/#contact">Hire me</a>
      <button class="hamburger" on:click={toggleMenu} aria-label="Toggle navigation" aria-expanded={menuOpen}>
        {#if menuOpen}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        {:else}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        {/if}
      </button>
    </div>
  </div>

  {#if menuOpen}
    <div class="mobile-menu">
      <ul>
        <li><a href="/" on:click={() => menuOpen = false}>Home</a></li>
        <li><a href="/about" on:click={() => menuOpen = false}>About</a></li>
        <li><a href="/services" on:click={() => menuOpen = false}>Services</a></li>
        <li><a href="/projects" on:click={() => menuOpen = false}>Projects</a></li>
        <li><a href="/#contact" on:click={() => menuOpen = false}>Contact</a></li>
      </ul>
      <div class="mobile-social">
        <a href="https://www.linkedin.com/in/aidan-dennehy-bsc-msc-cork" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/duinneacha" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  {/if}
</nav>

<style>
  .site-nav {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(8, 8, 8, 0.88);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--ink-rule);
  }

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  /* Brand */
  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .brand-logo {
    height: 32px;
    width: auto;
    opacity: 0.9;
  }
  .brand-text {
    font-size: 1.05rem;
    font-weight: 900;
    letter-spacing: -0.03em;
    color: var(--ink);
  }
  .brand-dot { color: var(--red); }

  /* Nav links */
  .nav-links {
    list-style: none;
    display: flex;
    gap: 32px;
    margin: 0;
    padding: 0;
    flex: 1;
    justify-content: center;
  }
  .nav-links a {
    text-decoration: none;
    color: var(--ink-dim);
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 700;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--red); }

  /* Right side */
  .nav-right {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
  }

  .nav-social {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-right: 8px;
  }
  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 6px;
    color: rgba(245,240,235,0.3);
    text-decoration: none;
    transition: all 0.2s;
    border: 1px solid transparent;
  }
  .social-link:hover {
    color: var(--red);
    background: var(--red-dim);
    border-color: var(--red-border);
  }

  .hire-btn {
    background: var(--red);
    color: #fff;
    padding: 9px 22px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.2s;
    white-space: nowrap;
  }
  .hire-btn:hover { filter: brightness(1.1); transform: scale(1.03); }

  /* Hamburger */
  .hamburger {
    display: none;
    background: none;
    border: 1px solid var(--ink-rule);
    border-radius: 6px;
    padding: 0;
    cursor: pointer;
    color: var(--ink-dim);
    width: 36px;
    height: 36px;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }
  .hamburger:hover { color: var(--red); border-color: var(--red-border); }

  /* Mobile menu */
  .mobile-menu {
    display: none;
    border-top: 1px solid var(--ink-rule);
    background: rgba(8,8,8,0.97);
  }
  .mobile-menu ul {
    list-style: none;
    margin: 0;
    padding: 8px 0 4px;
    display: flex;
    flex-direction: column;
  }
  .mobile-menu a {
    display: block;
    padding: 13px 24px;
    color: var(--ink-dim);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: all 0.15s;
    border-left: 3px solid transparent;
  }
  .mobile-menu a:hover {
    color: var(--red);
    border-left-color: var(--red);
    background: var(--red-dim);
  }
  .mobile-social {
    display: flex;
    gap: 0;
    border-top: 1px solid var(--ink-rule);
    padding: 4px 0 8px;
  }
  .mobile-social a {
    flex: 1;
    display: block;
    padding: 12px 24px;
    color: rgba(245,240,235,0.25);
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    transition: color 0.2s;
  }
  .mobile-social a:hover { color: var(--red); }

  @media (max-width: 900px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
    .mobile-menu { display: block; }
    .hire-btn { display: none; }
    .nav-inner { padding: 0 20px; }
  }

  @media (max-width: 480px) {
    .nav-social { display: none; }
  }
</style>
