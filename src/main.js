import './style.css'

document.querySelector('#app').innerHTML = `
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
`
