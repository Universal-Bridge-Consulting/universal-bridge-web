(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="hero-container">
    <nav class="navbar">
      <div class="logo">Universal Bridge</div>
      <div class="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact" class="btn-primary">Get in Touch</a>
      </div>
    </nav>
    <main class="hero">
      <div class="hero-content">
        <h1 class="animate-up delay-1">Architecting the <span class="gradient-text">Future</span></h1>
        <p class="animate-up delay-2">We bridge the gap between complex infrastructure and seamless execution. Enterprise consulting for the AI generation.</p>
        <div class="hero-actions animate-up delay-3">
          <button class="btn-primary large">Start Building</button>
          <button class="btn-secondary large">Our Work</button>
        </div>
      </div>
      <div class="hero-visual animate-fade delay-4">
        <div class="glow-orb"></div>
        <div class="glass-card">
          <div class="stat">
            <span class="stat-value">100%</span>
            <span class="stat-label">Infrastructure Uptime</span>
          </div>
          <div class="stat">
            <span class="stat-value">Global</span>
            <span class="stat-label">Scale Deployments</span>
          </div>
        </div>
      </div>
    </main>
  </div>
`;