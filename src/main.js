import './style.css'

const app = document.querySelector('#app')

// Available sample styles
const themes = [
  { id: 'theme-executive', name: '🏢 Style 1: ThinkAutomation Executive (Walker Classic)', desc: 'Corporate Navy & White' },
  { id: 'theme-developer', name: '💻 Style 2: GitHub Pro Flight Deck (Developer)', desc: 'Dark Obsidian & Code Matrix' },
  { id: 'theme-glass', name: '✨ Style 3: Modern Glass Neon (Command Center)', desc: 'Slate & Cyan/Violet Glow' },
  { id: 'theme-institutional', name: '🏛️ Style 4: Institutional Sovereign (Wall Street Gold)', desc: 'Charcoal & Champagne Gold' }
]

let activeTheme = 'theme-executive'
let activeTab = 'cargowise'

const cockpitData = {
  cargowise: {
    title: "WiseTech CargoWise One Integration",
    desc: "Sub-second multi-leg air & ocean data enrichment pipeline powering Fortune 500 supply chain visibility.",
    specs: [
      { label: "Throughput SLA", value: "< 250ms per transaction" },
      { label: "Read Replica Joins", value: "GlobalOceanWeekly View Injections" },
      { label: "Data Integrity", value: "100% Strict Audit Mode" },
      { label: "Middleware Layer", value: "ThinkAutomation C#" }
    ],
    code: `// [WiseTech CargoWise One Data Adapter]
public async Task<PipelineResult> ProcessShipmentAsync(ConsignmentRequest req) {
    using var db = new CWReadOnlyReplicaContext();
    var bol = await db.GlobalOceanWeekly
        .Where(x => x.BillOfLading == req.BOL)
        .Select(x => new {
            x.Carrier,
            x.OriginPort,
            x.RevisedETA,
            DwellDays = EF.Functions.DateDiffDay(x.OrigETA, x.RevisedETA)
        })
        .FirstOrDefaultAsync();

    if (bol?.DwellDays > 0) {
        await TelemetryRouter.BroadcastDelayAlertAsync(bol);
    }
    return PipelineResult.Success(bol);
}`
  },
  yardi: {
    title: "Yardi Voyager & HUD 50059 Engine",
    desc: "Direct database-level schema diagnostics for Section 8, HUD 50059, TRACS, and LIHTC compliance.",
    specs: [
      { label: "Accreditation", value: "NCHM Certified Occupancy Specialist" },
      { label: "Validity Period", value: "Active thru June 2027" },
      { label: "Compliance Scope", value: "HUD 50059, TRACS, LIHTC" },
      { label: "Database Layer", value: "Yardi Voyager SQL Schema" }
    ],
    code: `-- [Yardi Voyager HUD 50059 Certification Audit Query]
SELECT 
    t.TenantID,
    t.UnitCode,
    c.CertType,
    c.EffectiveDate,
    c.TenantRent,
    c.UtilityAllowance,
    c.AssistancePayment,
    CASE 
        WHEN c.GrossRent <> (c.TenantRent + c.AssistancePayment) 
        THEN 'DISCREPANCY_FLAG'
        ELSE 'AUDIT_VERIFIED'
    END AS ComplianceStatus
FROM Yardi_Tenant t
INNER JOIN Yardi_Certifications c ON t.TenantID = c.TenantID
WHERE c.EffectiveDate >= DATEADD(month, -12, GETDATE())
  AND c.TRACSStatus = 'Pending_Review';`
  },
  fleet: {
    title: "Commercial Fleet Telematics & Middleware",
    desc: "Autonomous J1939 CAN-bus engine monitoring, hands-free voice co-pilots, and cold-chain compliance.",
    specs: [
      { label: "Protocol", value: "SAE J1939 CAN Bus" },
      { label: "Telemetry Mode", value: "Hands-Free Voice Co-Pilot" },
      { label: "Latency", value: "Real-time edge polling" },
      { label: "Hardware Interop", value: "OBDLink MX+ / Android Wi-Fi" }
    ],
    code: `// [J1939 Commercial Heavy Fleet Telemetry Hook]
void OnCanFrameReceived(uint32_t pgn, const uint8_t* data) {
    if (pgn == PGN_ENGINE_TEMPERATURE) {
        float coolantTemp = (data[0] * 1.0f) - 40.0f;
        if (coolantTemp > THRESHOLD_WARN_TEMP) {
            AudioSynthesizer::SpeakHandsFree("Alert: Coolant temperature elevated.");
            DataLogger::RecordFault(FAULT_HIGH_TEMP, coolantTemp);
        }
    }
}`
  },
  dossier: {
    title: "Verified Corporate Lineage Dossier",
    desc: "16+ continuous years in good standing with the New York State Department of State and Dun & Bradstreet.",
    specs: [
      { label: "Legal Entity", value: "UNIVERSAL BRIDGE CONSULTING, LLC" },
      { label: "Date Established", value: "February 17, 2010" },
      { label: "NYS DOS ID", value: "3913719" },
      { label: "D-U-N-S Number", value: "117517116 (Since May 2020)" }
    ],
    code: `{
  "entity_name": "UNIVERSAL BRIDGE CONSULTING, LLC",
  "corporate_standing": "ACTIVE_GOOD_STANDING",
  "formation_date": "2010-02-17T00:00:00Z",
  "corporate_age_years": 16.5,
  "state_jurisdiction": "New York (DOS ID 3913719)",
  "duns_identifier": "117517116",
  "commercial_credit_debt": 0.00,
  "headquarters": "Garden City, Nassau County, NY 11530",
  "managing_director": "William Hanusiewicz (Principal Architect)",
  "systems_architect": "Salvatore Hanusiewicz (MS Computer Science)"
}`
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function applyTheme(themeId) {
  activeTheme = themeId
  document.body.className = themeId
  renderApp()
}

function renderApp() {
  const cur = cockpitData[activeTab]

  const specRows = cur.specs.map(s => `
    <tr>
      <td class="label">${s.label}</td>
      <td class="val">${s.value}</td>
    </tr>
  `).join('')

  const themeButtons = themes.map(t => `
    <button class="theme-btn ${activeTheme === t.id ? 'active' : ''}" data-theme="${t.id}">
      ${t.name}
    </button>
  `).join('')

  app.innerHTML = `
    <!-- Live Interactive Theme Selector -->
    <div class="theme-selector-bar">
      <div class="theme-selector-label">
        <span>🎨 Select Sample Style:</span>
      </div>
      <div class="theme-btn-group">
        ${themeButtons}
      </div>
    </div>

    <!-- Header Navigation -->
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="#" class="brand-badge">
          <div class="brand-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M4 19h16M4 15l4-8 4 8 4-8 4 8M9 15h6"/>
            </svg>
          </div>
          <div class="brand-text">
            <h1>Universal Bridge</h1>
            <span>Consulting, LLC &bull; Est. 2010</span>
          </div>
        </a>

        <div class="header-meta-pill">
          <span class="status-dot"></span>
          <span>16-YEAR ACTIVE ENTERPRISE</span>
        </div>

        <div>
          <a href="mailto:ceo@universalbridgeconsulting.com" class="btn-primary" style="padding:0.45rem 1rem;font-size:0.82rem;">
            Engage Syndicate
          </a>
        </div>
      </div>
    </header>

    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container">
          <div class="hero-meta-strip">
            <span class="meta-chip highlight">NYS DOS ID: 3913719</span>
            <span class="meta-chip">D-U-N-S: 117517116</span>
            <span class="meta-chip">NCHM Certified Occupancy Specialist</span>
            <span class="meta-chip">Garden City, NY 11530</span>
          </div>

          <h2 class="hero-title">
            Architecting Data Integrity.<br/>
            <span class="accent-word">Bridging Enterprise Scale.</span>
          </h2>
          
          <p class="hero-subtitle">
            Universal Bridge Consulting delivers high-throughput supply chain middleware, automated HUD 50059 and Yardi compliance validation, and mission-critical enterprise systems engineering. Founded February 17, 2010.
          </p>

          <!-- KPI Strip -->
          <div class="kpi-grid">
            <div class="kpi-card">
              <div class="kpi-num">16.5 Yrs</div>
              <div class="kpi-label">Continuous Corporate Age</div>
              <div class="kpi-sub">Est. Feb 17, 2010 &bull; DOS ID: 3913719</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-num">100%</div>
              <div class="kpi-label">Pipeline SLA Execution</div>
              <div class="kpi-sub">WiseTech CargoWise &bull; Walker &bull; Kenvue</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-num">COS</div>
              <div class="kpi-label">Certified Occupancy Specialist</div>
              <div class="kpi-sub">Active thru June 2027 &bull; Yardi Audit Defended</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-num">$0 Debt</div>
              <div class="kpi-label">Pristine Balance Sheet</div>
              <div class="kpi-sub">D-U-N-S # 117517116 &bull; Zero Liabilities</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Split-Preview Cockpit Component -->
      <section class="container">
        <div class="cockpit-wrapper">
          <div class="cockpit-bar">
            <div class="cockpit-tabs">
              <button class="tab-btn ${activeTab === 'cargowise' ? 'active' : ''}" data-tab="cargowise">⚡ CargoWise One</button>
              <button class="tab-btn ${activeTab === 'yardi' ? 'active' : ''}" data-tab="yardi">⚖️ HUD & Yardi Schema</button>
              <button class="tab-btn ${activeTab === 'fleet' ? 'active' : ''}" data-tab="fleet">🛰️ Fleet Telematics</button>
              <button class="tab-btn ${activeTab === 'dossier' ? 'active' : ''}" data-tab="dossier">🏛️ Corporate Dossier</button>
            </div>
            <div class="cockpit-meta">
              <span class="badge-sla">LIVE PREVIEW</span>
              <span>SUB-SECOND ROUTING</span>
            </div>
          </div>

          <div class="split-grid">
            <div class="spec-pane">
              <div>
                <h3>${cur.title}</h3>
                <p>${cur.desc}</p>
                <table class="spec-table">
                  ${specRows}
                </table>
              </div>
              <div>
                <a href="mailto:ceo@universalbridgeconsulting.com?subject=Consultation: ${encodeURIComponent(cur.title)}" class="btn-primary" style="padding:0.6rem 1.25rem;font-size:0.85rem;">
                  Request Architectural Review &rarr;
                </a>
              </div>
            </div>

            <div class="code-pane">
              <pre><code>${escapeHtml(cur.code)}</code></pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Practice Areas -->
      <section class="container" style="margin-bottom: 4rem;">
        <div class="section-title">
          <h2>Core Practice Areas</h2>
          <p>Institutional technical disciplines engineered to eliminate data latency and ensure compliance perfection.</p>
        </div>

        <div class="cards-3col">
          <div class="content-card">
            <span class="card-badge">Supply Chain Automation</span>
            <h3>WiseTech CargoWise One Middleware</h3>
            <p>End-to-end data pipeline construction across Certified CargoWise tracks (CCO, CCS, CCP). Automated multi-leg tracking, dwell analysis, and ThinkAutomation C# integrations.</p>
            <ul>
              <li>Direct read-replica schema discovery & join optimization</li>
              <li>Sub-second milestone updates and exceptions dispatch</li>
              <li>Production battle-tested on Walker SCM & Kenvue workflows</li>
            </ul>
          </div>

          <div class="content-card">
            <span class="card-badge">Real Estate Compliance</span>
            <h3>Affordable Housing & HUD 50059</h3>
            <p>Certified Occupancy Specialist (COS) audit protection and Yardi Voyager database schema diagnostics. Pre-audit certification discrepancy identification and subsidy recapture defense.</p>
            <ul>
              <li>Active NCHM Certified Occupancy Specialist credential</li>
              <li>HUD 50059, TRACS voucher, and LIHTC reconciliation</li>
              <li>Ex-Yardi Voyager database systems engineers</li>
            </ul>
          </div>

          <div class="content-card">
            <span class="card-badge">Telemetry & Fleet</span>
            <h3>Heavy Fleet Telematics & Middleware</h3>
            <p>Commercial heavy fleet telemetry utilizing SAE J1939 CAN protocols, real-time edge diagnostic monitors, and hands-free audible alert systems for mission-critical logistics.</p>
            <ul>
              <li>Non-interrupting audio alert synthesis & voice companion</li>
              <li>J1939 engine parameter parsing & fault code logging</li>
              <li>Direct BLE and Wi-Fi sensor telemetry ingestion</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Syndicate Leadership -->
      <section class="container" style="margin-bottom: 4rem;">
        <div class="section-title">
          <h2>Syndicate Leadership</h2>
          <p>Senior multidisciplinary technical execution with deep corporate credentials.</p>
        </div>

        <div class="leaders-grid">
          <div class="leader-box">
            <div class="leader-title">Managing Director & Principal Architect</div>
            <div class="leader-name">William Hanusiewicz</div>
            <p class="leader-bio">
              Founder of Universal Bridge Consulting, LLC (2010). 16+ years architecting enterprise supply chain automations, ThinkAutomation C# pipelines, and CargoWise One data pipelines for Fortune 500 logistics leaders. Active NCHM Certified Occupancy Specialist (COS).
            </p>
            <div class="tags-strip">
              <span>WiseTech CargoWise</span>
              <span>ThinkAutomation C#</span>
              <span>NCHM COS Accredited</span>
              <span>Enterprise Architecture</span>
            </div>
          </div>

          <div class="leader-box">
            <div class="leader-title">Lead Systems Engineer & Technical Architect</div>
            <div class="leader-name">Salvatore Hanusiewicz</div>
            <p class="leader-bio">
              BS & MS in Mathematics and Computer Science. Former Yardi Systems engineer with comprehensive mastery over Yardi Voyager database schemas, custom SQL reporting views, TRACS compliance algorithms, and large-scale enterprise data workflows.
            </p>
            <div class="tags-strip">
              <span>BS & MS Computer Science</span>
              <span>Ex-Yardi Voyager</span>
              <span>SQL Optimization</span>
              <span>Compliance Algorithms</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Corporate Dossier -->
      <section class="container">
        <div class="dossier-card">
          <div class="dossier-top">
            <div>
              <h3 style="font-size:1.45rem;font-weight:800;color:var(--text-primary);margin-bottom:0.25rem;">Official Corporate Dossier</h3>
              <p style="color:var(--text-secondary);font-size:0.9rem;">Public corporate standing data for vendor risk onboarding and enterprise RFP reviews.</p>
            </div>
            <div class="header-meta-pill" style="font-size:0.85rem;padding:0.5rem 1rem;">
              <span class="status-dot"></span>
              <span>NYS ACTIVE GOOD STANDING</span>
            </div>
          </div>

          <div class="dossier-grid">
            <div class="dossier-item">
              <div class="k">Legal Entity</div>
              <div class="v">UNIVERSAL BRIDGE CONSULTING, LLC</div>
            </div>
            <div class="dossier-item">
              <div class="k">Formation Date</div>
              <div class="v">February 17, 2010 (16+ Years)</div>
            </div>
            <div class="dossier-item">
              <div class="k">NYS DOS ID</div>
              <div class="v">3913719</div>
            </div>
            <div class="dossier-item">
              <div class="k">Dun & Bradstreet D-U-N-S</div>
              <div class="v">117517116 (Active 2020)</div>
            </div>
            <div class="dossier-item">
              <div class="k">NAICS Industry Codes</div>
              <div class="v">541512 / 541611</div>
            </div>
            <div class="dossier-item">
              <div class="k">Commercial Office</div>
              <div class="v">Garden City, Nassau County, NY</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;">
        <div>
          <strong style="color:var(--text-primary);">Universal Bridge Consulting, LLC</strong> &bull; Founded February 17, 2010.
        </div>
        <div>
          Contact: <a href="mailto:ceo@universalbridgeconsulting.com" style="color:var(--brand-accent);text-decoration:none;font-weight:600;">ceo@universalbridgeconsulting.com</a>
        </div>
      </div>
    </footer>
  `

  // Attach theme switcher click events
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const themeId = btn.getAttribute('data-theme')
      if (themeId) {
        applyTheme(themeId)
      }
    })
  })

  // Attach cockpit tab click events
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab')
      if (tab && cockpitData[tab]) {
        activeTab = tab
        renderApp()
      }
    })
  })
}

// Initial render
document.body.className = activeTheme
renderApp()
