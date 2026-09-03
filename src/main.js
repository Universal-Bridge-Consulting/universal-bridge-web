import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="site-wrapper">
    <!-- Ambient Background Glows -->
    <div class="glow-orb orb-1"></div>
    <div class="glow-orb orb-2"></div>
    <div class="glow-orb orb-3"></div>

    <!-- Navigation Bar -->
    <header class="navbar-container">
      <nav class="navbar">
        <div class="brand">
          <a href="#" class="brand-link">
            <span class="brand-text">UNIVERSAL BRIDGE</span>
            <span class="brand-badge">EST. 2010</span>
          </a>
        </div>
        <div class="nav-menu">
          <a href="#services" class="nav-item">Practices</a>
          <a href="#supply-chain" class="nav-item">Supply Chain</a>
          <a href="#compliance" class="nav-item">HUD & Yardi</a>
          <a href="#leadership" class="nav-item">Leadership</a>
          <a href="#verification" class="nav-item">Corporate Dossier</a>
          <a href="#contact" class="btn-primary nav-cta">Inquire</a>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-inner">
          <div class="hero-badge animate-fade">
            <span class="badge-dot"></span>
            <span>16+ YEARS OF MISSION-CRITICAL ENTERPRISE ARCHITECTURE</span>
          </div>
          <h1 class="hero-title animate-up delay-1">
            Architecting Data Integrity.<br>
            <span class="gradient-text">Bridging Enterprise Scale.</span>
          </h1>
          <p class="hero-subtitle animate-up delay-2">
            Universal Bridge Consulting delivers high-availability data automation, turnkey CargoWise One middleware, and certified Yardi Voyager HUD compliance for complex, heavily regulated enterprise operations.
          </p>
          <div class="hero-actions animate-up delay-3">
            <a href="#services" class="btn-primary large">Explore Practice Areas</a>
            <a href="#verification" class="btn-secondary large">Corporate Credentials</a>
          </div>

          <!-- Live Metrics Ledger -->
          <div class="metrics-grid animate-up delay-4">
            <div class="metric-card glass-panel">
              <div class="metric-val">16+</div>
              <div class="metric-label">Years Continuous Standing</div>
              <div class="metric-sub">Est. February 17, 2010</div>
            </div>
            <div class="metric-card glass-panel">
              <div class="metric-val">100%</div>
              <div class="metric-label">Pipeline SLA Execution</div>
              <div class="metric-sub">Fortune 500 Supply Chains</div>
            </div>
            <div class="metric-card glass-panel">
              <div class="metric-val">COS</div>
              <div class="metric-label">Certified Occupancy Specialist</div>
              <div class="metric-sub">NCHM HUD 50059 Accredited</div>
            </div>
            <div class="metric-card glass-panel">
              <div class="metric-val">$0</div>
              <div class="metric-label">Enterprise Debt</div>
              <div class="metric-sub">D-U-N-S # 117517116 Verified</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Validation Banner -->
      <section class="trust-banner">
        <div class="trust-inner">
          <p class="trust-label">DEPLOYED ACROSS MISSION-CRITICAL ENTERPRISE ECOSYSTEMS</p>
          <div class="trust-tags">
            <span class="trust-chip">WiseTech CargoWise One</span>
            <span class="trust-chip">ThinkAutomation C# Middleware</span>
            <span class="trust-chip">Yardi Systems Voyager</span>
            <span class="trust-chip">HUD TRACS & 50059</span>
            <span class="trust-chip">Walker SCM</span>
            <span class="trust-chip">Kenvue Supply Chain</span>
          </div>
        </div>
      </section>

      <!-- Core Practice Areas -->
      <section id="services" class="section-container">
        <div class="section-header">
          <h2 class="section-title">Core Practice Areas</h2>
          <p class="section-desc">Specialized technical and compliance disciplines engineered to bypass vendor risk, eliminate manual data latency, and ensure regulatory perfection.</p>
        </div>

        <div class="practices-grid">
          <!-- Card 1 -->
          <div class="practice-card glass-panel" id="supply-chain">
            <div class="practice-icon">⚡</div>
            <h3 class="practice-title">Supply Chain Data Automation</h3>
            <p class="practice-lead">WiseTech CargoWise One architecture, ThinkAutomation C# middleware pipelines, and multimodal telemetry.</p>
            <ul class="practice-list">
              <li><strong>CargoWise Architecture:</strong> Certified tracks (CCO, CCS, CCP) across freight forwarding, customs, and order management.</li>
              <li><strong>C# Routing Engines:</strong> ThinkAutomation Phase 2 pipelines executing sub-second XML/JSON translation and SQL injections.</li>
              <li><strong>Milestone Telemetry:</strong> Automated ocean vessel tracking, rail intermodal dwell calculations, and air exception workflows.</li>
              <li><strong>Fortune 500 Proof:</strong> Production pipelines actively serving Walker SCM, Kenvue, and global manufacturing operations.</li>
            </ul>
          </div>

          <!-- Card 2 -->
          <div class="practice-card glass-panel" id="compliance">
            <div class="practice-icon">⚖️</div>
            <h3 class="practice-title">Affordable Housing & HUD Compliance</h3>
            <p class="practice-lead">NCHM Certified Occupancy Specialist oversight paired with ex-Yardi Voyager database systems engineering.</p>
            <ul class="practice-list">
              <li><strong>Certified Expertise:</strong> Active NCHM Certified Occupancy Specialist (COS) accreditation through June 2027.</li>
              <li><strong>Yardi Voyager DB Audits:</strong> Direct SQL schema diagnostics identifying certification discrepancies before state audits.</li>
              <li><strong>HUD 50059 & TRACS:</strong> End-to-end transmission remediation, voucher reconciliation, and subsidy recapture protection.</li>
              <li><strong>LIHTC & Section 8:</strong> Tenant file compliance audits, utility allowance verification, and management agent reviews.</li>
            </ul>
          </div>

          <!-- Card 3 -->
          <div class="practice-card glass-panel">
            <div class="practice-icon">🛰️</div>
            <h3 class="practice-title">Autonomous Telematics & Middleware</h3>
            <p class="practice-lead">Commercial heavy fleet telemetry, J1939 protocols, and hands-free automated diagnostic co-pilots.</p>
            <ul class="practice-list">
              <li><strong>J1939 & OBD-II Systems:</strong> Real-time engine telemetry capture, fuel trim diagnostics, and fault code isolation.</li>
              <li><strong>Voice Co-Pilot Engines:</strong> Hands-free Windows and Android voice synthesis alerting operators to threshold excursions.</li>
              <li><strong>Enterprise Integration:</strong> Bridges between field telemetry hardware and cloud reporting dashboards.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Leadership Section -->
      <section id="leadership" class="section-container">
        <div class="section-header">
          <h2 class="section-title">Syndicate Leadership</h2>
          <p class="section-desc">Decades of combined technical execution in enterprise data engineering, corporate compliance, and applied mathematics.</p>
        </div>

        <div class="leadership-grid">
          <div class="leader-card glass-panel">
            <div class="leader-header">
              <div>
                <h3 class="leader-name">William Hanusiewicz</h3>
                <p class="leader-role">Principal Solutions Architect & Managing Director</p>
              </div>
              <span class="leader-exp">16+ Yrs Enterprise</span>
            </div>
            <p class="leader-bio">
              Founded Universal Bridge Consulting in February 2010. Specialist in enterprise data automation, WiseTech CargoWise One integration pipelines, ThinkAutomation C# execution engines, and active NCHM Certified Occupancy Specialist (COS) for HUD affordable housing compliance. Architect of high-availability visibility pipelines for Fortune 500 manufacturing and logistics clients.
            </p>
            <div class="leader-tags">
              <span class="tag">CargoWise Certified</span>
              <span class="tag">Certified Occupancy Specialist</span>
              <span class="tag">C# / SQL Systems</span>
            </div>
          </div>

          <div class="leader-card glass-panel">
            <div class="leader-header">
              <div>
                <h3 class="leader-name">Salvatore Hanusiewicz</h3>
                <p class="leader-role">Lead Systems Engineer & Technical Architect</p>
              </div>
              <span class="leader-exp">BS + MS Math & CS</span>
            </div>
            <p class="leader-bio">
              Lead Systems Engineer with deep engineering background at Yardi Systems, holding both a Bachelor of Science and Master of Science in Mathematics and Computer Science. Authority on relational database engines, complex SQL schemas, high-throughput ETL data pipelines, and automated diagnostic scripting for property management and enterprise operations.
            </p>
            <div class="leader-tags">
              <span class="tag">Ex-Yardi Voyager DB</span>
              <span class="tag">Master of Science</span>
              <span class="tag">Database Architecture</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Corporate Dossier & Verification -->
      <section id="verification" class="section-container">
        <div class="section-header">
          <h2 class="section-title">Corporate Dossier & Verified Standing</h2>
          <p class="section-desc">Universal Bridge Consulting operates with complete transparency, verified state good standing, and a debt-free institutional credit profile.</p>
        </div>

        <div class="dossier-card glass-panel">
          <div class="dossier-grid">
            <div class="dossier-row">
              <span class="dossier-key">Legal Entity:</span>
              <span class="dossier-val">UNIVERSAL BRIDGE CONSULTING, LLC</span>
            </div>
            <div class="dossier-row">
              <span class="dossier-key">Date of Formation:</span>
              <span class="dossier-val">February 17, 2010 (16.5 Years of Continuous Standing)</span>
            </div>
            <div class="dossier-row">
              <span class="dossier-key">Jurisdiction:</span>
              <span class="dossier-val">New York State Department of State (Nassau County)</span>
            </div>
            <div class="dossier-row">
              <span class="dossier-key">NYS DOS ID:</span>
              <span class="dossier-val highlight">3913719 (Verified Active & In Good Standing)</span>
            </div>
            <div class="dossier-row">
              <span class="dossier-key">Dun & Bradstreet:</span>
              <span class="dossier-val highlight">D-U-N-S # 117517116 (Active Profile Since May 2020)</span>
            </div>
            <div class="dossier-row">
              <span class="dossier-key">Primary NAICS Codes:</span>
              <span class="dossier-val">541512 (Computer Systems Design) • 541611 (Management Consulting)</span>
            </div>
            <div class="dossier-row">
              <span class="dossier-key">Commercial Headquarters:</span>
              <span class="dossier-val">Garden City, Nassau County, New York 11530</span>
            </div>
            <div class="dossier-row">
              <span class="dossier-key">State Regulatory Status:</span>
              <span class="dossier-val">Biennial Statement Filed & Current with New York State</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact & Consultation Section -->
      <section id="contact" class="section-container contact-section">
        <div class="glass-panel contact-card">
          <h2 class="contact-title">Initiate Enterprise Engagement</h2>
          <p class="contact-desc">Discuss your supply chain integration pipeline, Yardi Voyager HUD audit prep, or specialized consulting needs directly with our principal architects.</p>
          <div class="contact-methods">
            <a href="mailto:ceo@universalbridgeconsulting.com" class="btn-primary large">
              ✉️ Contact Executive Office: ceo@universalbridgeconsulting.com
            </a>
          </div>
          <p class="contact-note">Direct principal response within 24 business hours. Confidentiality assured.</p>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <strong>UNIVERSAL BRIDGE CONSULTING, LLC</strong>
          <p>Enterprise Supply Chain Data Automation & HUD Regulatory Compliance</p>
        </div>
        <div class="footer-legal">
          <p>&copy; 2010–2026 Universal Bridge Consulting, LLC. All rights reserved.</p>
          <p>NYS Department of State DOS ID: 3913719 • D-U-N-S: 117517116 • Garden City, NY</p>
        </div>
      </div>
    </footer>
  </div>
`
