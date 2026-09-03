import './style.css'

const app = document.querySelector('#app')

// Navigation View State
let activeView = 'overview' // 'overview' | 'trademarks'
let selectedLogoId = 'logo-keystone'

// 32 Total Themes Categorized
const themes = [
  // FEATURED: McKinsey / Swiss / Federal Family (6 Variations)
  { id: 'theme-mckinsey-sovereign', cat: 'mckinsey_fam', name: '👑 M.1 McKinsey Pure Sovereign', desc: 'Deep McKinsey Midnight & Playfair Serif' },
  { id: 'theme-mckinsey-swiss', cat: 'mckinsey_fam', name: '📐 M.2 McKinsey x Swiss Grid', desc: 'Stark 2px Midnight Borders, Zero Radius & Space Grotesk' },
  { id: 'theme-mckinsey-federal', cat: 'mckinsey_fam', name: '🦅 M.3 McKinsey x Federal Audit', desc: 'Official Fed Navy, HUD Seal & Document Tables' },
  { id: 'theme-mckinsey-dark', cat: 'mckinsey_fam', name: '🌌 M.4 McKinsey Dark Boardroom', desc: 'Midnight Obsidian & Sapphire Platinum Lighting' },
  { id: 'theme-mckinsey-walker', cat: 'mckinsey_fam', name: '🍷 M.5 McKinsey x Walker SCM', desc: 'Alabaster Ivory, Deep Navy & SCM Crimson Accent' },
  { id: 'theme-swiss-federal', cat: 'mckinsey_fam', name: '⚖️ M.6 Swiss Federal Minimalist', desc: 'High-Speed Pure Compliance Grid & Red Stamp' },

  // Top Enterprise Brands (8)
  { id: 'theme-stripe', cat: 'topbrands', name: '🟣 Stripe (Fintech & Dev)', desc: 'Stripe Blurple Gradient & Precision Light Mode' },
  { id: 'theme-palantir', cat: 'topbrands', name: '🛡️ Palantir (Foundry Intel)', desc: 'Tactical Blueprint Blue & Titanium Command' },
  { id: 'theme-linear', cat: 'topbrands', name: '⚡ Linear (Craft Standard)', desc: 'Dark Obsidian & Glowing Luminous Micro-Borders' },
  { id: 'theme-mckinsey', cat: 'topbrands', name: '🏛️ McKinsey Standard', desc: 'McKinsey Midnight & Editorial Serif' },
  { id: 'theme-wisetech', cat: 'topbrands', name: '🌐 WiseTech (CargoWise Brand)', desc: 'WiseTech Royal Blue & Clean Freight Enterprise' },
  { id: 'theme-apple-exec', cat: 'topbrands', name: '🍎 Apple Pro (Cupertino Glass)', desc: 'Space Gray & Polished Frosted Titanium' },
  { id: 'theme-bloomberg', cat: 'topbrands', name: '📊 Bloomberg (Quant Matrix)', desc: 'Pure Black & High-Contrast Terminal Amber' },
  { id: 'theme-vercel', cat: 'topbrands', name: '▲ Vercel (Monochrome Speed)', desc: 'Pure Pitch Black & Sharp 1px Borders' },

  // Executive Suite (Style 1 Family) (6)
  { id: 'theme-v1-classic', cat: 'exec', name: '1.1 Walker Classic Pure', desc: 'Corporate Navy & Crisp White' },
  { id: 'theme-v2-crimson', cat: 'exec', name: '1.2 Walker SCM Crimson', desc: 'Navy & Signature #8C2633 Burgundy' },
  { id: 'theme-v3-cobalt', cat: 'exec', name: '1.3 Cobalt Enterprise', desc: 'ThinkAutomation Cloud Pro' },
  { id: 'theme-v4-steel', cat: 'exec', name: '1.4 Slate & Steel Density', desc: 'Operations Logistics Command' },
  { id: 'theme-v5-midnight', cat: 'exec', name: '1.5 Midnight Boardroom', desc: 'Dark Executive Navy Hybrid' },
  { id: 'theme-v6-platinum', cat: 'exec', name: '1.6 Platinum & Sapphire', desc: 'Institutional Consulting Tier' },
  
  // Radical & Creative (6)
  { id: 'theme-brutalist', cat: 'radical', name: '2.1 Swiss Brutalist', desc: 'Stark B&W, 3px Borders, Zero Radius' },
  { id: 'theme-cyberpunk', cat: 'radical', name: '2.2 Matrix Cyberpunk CRT', desc: 'Pure Black & Phosphor Green Glow' },
  { id: 'theme-heavy-freight', cat: 'radical', name: '2.3 Heavy Freight CAT', desc: 'Safety Yellow & Industrial Asphalt' },
  { id: 'theme-tokyo-night', cat: 'radical', name: '2.4 Tokyo Night Synth', desc: 'Deep Indigo, Neon Magenta & Violet' },
  { id: 'theme-apple-monolith', cat: 'radical', name: '2.5 High-Fashion Monolith', desc: 'Pitch Black & Hairline Monochrome' },
  { id: 'theme-vaporwave', cat: 'radical', name: '2.6 Retro Vaporwave', desc: 'Pastel Sunset Pink & Cyan Mint' },

  // Heritage & Institutional (6)
  { id: 'theme-nordic-warm', cat: 'heritage', name: '3.1 Nordic Minimalist Paper', desc: 'Warm Ivory, Terracotta & Serif' },
  { id: 'theme-sovereign-gold', cat: 'heritage', name: '3.2 Sovereign Wall Street Gold', desc: 'Charcoal & Imperial Gilded Gold' },
  { id: 'theme-emerald-wealth', cat: 'heritage', name: '3.3 Private Equity Emerald', desc: 'British Racing Green & Champagne' },
  { id: 'theme-federal-gov', cat: 'heritage', name: '3.4 Federal HUD Defense', desc: 'Official Fed Navy & Red Audit Stamp' },
  { id: 'theme-neumorphic', cat: 'heritage', name: '3.5 Soft Clay Neumorphic', desc: 'Tactile 3D Extruded Shadows' },
  { id: 'theme-retro-mac', cat: 'heritage', name: '3.6 Retro Mac 1984 GUI', desc: 'System 7 Platinum Gray & Bevels' }
]

let activeCategory = 'mckinsey_fam'
let activeTheme = 'theme-mckinsey-sovereign'
let activeTab = 'cargowise'

// 8 Distinct Trademark / Logomark Concepts
const trademarkLogos = [
  {
    id: 'logo-keystone',
    name: 'The Sovereign Keystone Bridge',
    badge: 'Institutional Architecture',
    desc: 'Classical Roman triumphal arch anchored by two enterprise monoliths with a central interlocking keystone. Symbolizes unshakeable structural permanence, compliance standards, and corporate trust.',
    specs: { Geometry: 'Keystone Arch & Dual Pylons', Rationale: '16-Year Institutional Stability', FaviconScale: 'Optimal at 16px/32px' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <path d="M15 85V45L35 25V85" stroke-width="6" stroke-linejoin="round"/>
        <path d="M85 85V45L65 25V85" stroke-width="6" stroke-linejoin="round"/>
        <path d="M42 22L50 14L58 22L55 34H45L42 22Z" fill="currentColor"/>
        <path d="M35 55C35 45 42 38 50 38C58 38 65 45 65 55" stroke-width="5" stroke-linecap="round"/>
        <line x1="10" y1="88" x2="90" y2="88" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="62" r="3.5" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'logo-data-span',
    name: 'The Binary Data Span',
    badge: 'High-Throughput Routing',
    desc: 'Twin vertical mainframe towers bridged by 3 high-velocity data pipelines (Air, Ocean, and Compliance Telematics). Represents sub-second WiseTech CargoWise & ThinkAutomation throughput.',
    specs: { Geometry: 'Twin Pylons + Triple Vector Span', Rationale: 'Multi-Leg Freight Middleware', FaviconScale: 'High-contrast clean' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <rect x="16" y="24" width="12" height="60" rx="3" stroke-width="5"/>
        <rect x="72" y="24" width="12" height="60" rx="3" stroke-width="5"/>
        <path d="M28 36C42 36 58 36 72 36" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M28 54C42 54 58 54 72 54" stroke-width="4.5" stroke-linecap="round"/>
        <path d="M28 72C42 72 58 72 72 72" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="50" cy="36" r="4" fill="currentColor"/>
        <circle cx="50" cy="54" r="4" fill="currentColor"/>
        <circle cx="50" cy="72" r="4" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'logo-ub-monogram',
    name: 'The Linked UB Monogram',
    badge: 'Executive Sovereign Ligature',
    desc: 'An interlocking monogram where the curves of the capital "U" descend and form the suspension cables of a grand bridge, fusing seamlessly into the structural counter of the capital "B".',
    specs: { Geometry: 'Interlocking UB Monogram', Rationale: 'Executive Consulting & Wall St Brand', FaviconScale: 'Instant Recognition' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <path d="M22 24V56C22 69 32 78 45 78C58 78 68 69 68 56V24" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M45 24H68C77 24 84 30 84 38C84 46 77 51 68 51H45" stroke-width="6" stroke-linecap="round"/>
        <path d="M45 51H70C80 51 88 57 88 66C88 74 80 80 70 80H45" stroke-width="6" stroke-linecap="round"/>
        <line x1="22" y1="88" x2="88" y2="88" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: 'logo-hex-conduit',
    name: 'The Hexagonal Node Conduit',
    badge: 'Algorithmic Systems Engine',
    desc: 'A precision isometric hexagon containing an internal diagonal bridge corridor. Represents complex data structures, low-latency compiler algorithms, and database internals.',
    specs: { Geometry: 'Isometric Hexagon + Bridge Conduit', Rationale: 'Systems Engineering & Algorithms', FaviconScale: 'Pixel-sharp on retina' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <path d="M50 14L85 34V74L50 94L15 74V34L50 14Z" stroke-width="5.5" stroke-linejoin="round"/>
        <path d="M22 65L50 50L78 35" stroke-width="6" stroke-linecap="round"/>
        <path d="M22 45L50 30L78 15" stroke-width="3" stroke-linecap="round" stroke-dasharray="3 3"/>
        <circle cx="50" cy="50" r="6" fill="currentColor"/>
        <path d="M50 56V86" stroke-width="4" stroke-linecap="round"/>
      </svg>
    `
  },
  {
    id: 'logo-swiss-cantilever',
    name: 'The Swiss Brutalist Cantilever',
    badge: 'Architectural Pure Geometry',
    desc: 'Stark 45-degree geometric cantilever bridge formed from interlocking architectural planes. Zero fluff, pure functional mass, and absolute structural confidence.',
    specs: { Geometry: '45-Degree Solid Bevel & Cantilever', Rationale: 'Bauhaus & Swiss Typographic Rigor', FaviconScale: 'Maximum punch at small size' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <path d="M12 86H88" stroke-width="8" stroke-linecap="square"/>
        <path d="M18 86L46 22H60L32 86H18Z" fill="currentColor"/>
        <path d="M82 86L54 22H40L68 86H82Z" fill="currentColor" fill-opacity="0.3"/>
        <rect x="42" y="16" width="16" height="12" fill="currentColor"/>
        <line x1="28" y1="54" x2="72" y2="54" stroke-width="5"/>
      </svg>
    `
  },
  {
    id: 'logo-mobius-infinity',
    name: 'The Möbius Infinity Span',
    badge: 'Continuous Supply Chain Flow',
    desc: 'An unbroken, perpetual Möbius ribbon arching through 3D space. Symbolizes nonstop global ocean/air cargo movement, resilient feedback loops, and 16 years of perpetual enterprise standing.',
    specs: { Geometry: 'Continuous Topological Bridge Ribbon', Rationale: 'Perpetual Logistics Continuity', FaviconScale: 'Smooth vector flow' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <path d="M20 65C12 55 12 38 25 28C38 18 55 24 68 38L80 52C88 62 88 75 78 82C68 89 54 84 44 72L30 55" stroke-width="6" stroke-linecap="round"/>
        <path d="M30 55L18 42C10 32 15 20 28 16C42 12 58 20 70 32" stroke-width="5" stroke-linecap="round" stroke-dasharray="4 3"/>
        <circle cx="50" cy="45" r="4.5" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'logo-federal-shield',
    name: 'The Federal Keystone Shield',
    badge: 'Regulatory Compliance & HUD',
    desc: 'An institutional security shield containing an arching bridge keystone and three five-pointed audit stars. Built specifically for Certified Occupancy Specialist authority and defense contractor compliance.',
    specs: { Geometry: 'Heraldic Defense Shield + Bridge Arch', Rationale: 'HUD 50059, TRACS & Audit Defense', FaviconScale: 'Prestigious crest silhouette' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <path d="M50 14L84 26V54C84 74 69 88 50 94C31 88 16 74 16 54V26L50 14Z" stroke-width="5" stroke-linejoin="round"/>
        <path d="M30 70C30 54 39 44 50 44C61 44 70 54 70 70" stroke-width="5" stroke-linecap="round"/>
        <line x1="26" y1="72" x2="74" y2="72" stroke-width="5" stroke-linecap="round"/>
        <circle cx="50" cy="32" r="3.5" fill="currentColor"/>
        <circle cx="36" cy="36" r="2.5" fill="currentColor"/>
        <circle cx="64" cy="36" r="2.5" fill="currentColor"/>
      </svg>
    `
  },
  {
    id: 'logo-compass-navigator',
    name: 'The Global Navigator Arch',
    badge: 'Intercontinental Logistics',
    desc: 'A nautical quadrant sextant arc intersecting with precision digital suspension cables. Represents trans-oceanic navigation, international shipping lanes, and precision port-to-door telemetry.',
    specs: { Geometry: 'Nautical Sextant + Suspension Cable Array', Rationale: 'Global Maritime & Air Freight', FaviconScale: 'Sharp navigational emblem' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none" stroke="currentColor">
        <path d="M18 84C18 46 48 16 86 16" stroke-width="6" stroke-linecap="round"/>
        <line x1="18" y1="84" x2="86" y2="84" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="86" y1="16" x2="86" y2="84" stroke-width="5.5" stroke-linecap="round"/>
        <line x1="38" y1="84" x2="38" y2="52" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="56" y1="84" x2="56" y2="34" stroke-width="3.5" stroke-linecap="round"/>
        <line x1="74" y1="84" x2="74" y2="20" stroke-width="3.5" stroke-linecap="round"/>
        <polygon points="18,84 26,72 32,78" fill="currentColor"/>
        <circle cx="86" cy="16" r="4.5" fill="currentColor"/>
      </svg>
    `
  }
]

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
  "managing_director": "William Hanusiewicz (Tech Since 2001, Cargo Since 2004)",
  "lead_systems_architect": "Salvatore Hanusiewicz (Dual B.S. CS & Math, SUNY)"
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
  const activeLogoObj = trademarkLogos.find(l => l.id === selectedLogoId) || trademarkLogos[0]

  const specRows = cur.specs.map(s => `
    <tr>
      <td class="label">${s.label}</td>
      <td class="val">${s.value}</td>
    </tr>
  `).join('')

  const filteredThemes = activeCategory === 'all' 
    ? themes 
    : themes.filter(t => t.cat === activeCategory)

  const themeButtons = filteredThemes.map(t => `
    <button class="theme-btn ${activeTheme === t.id ? 'active' : ''}" data-theme="${t.id}" title="${t.desc}">
      ${t.name}
    </button>
  `).join('')

  // Render Trademarks Grid HTML
  const trademarkCardsHtml = trademarkLogos.map(m => `
    <div class="trademark-card" id="${m.id}">
      <div class="trademark-preview-box">
        <div style="color:var(--brand-primary);">
          ${m.svg}
        </div>
        <div class="trademark-lockup-row">
          <div class="lockup-text">
            <h4>Universal Bridge</h4>
            <span>Consulting, LLC</span>
          </div>
        </div>
      </div>
      <div class="trademark-body">
        <div>
          <span class="trademark-meta-badge">${m.badge}</span>
          <h3 style="font-size:1.15rem;font-weight:800;color:var(--text-primary);margin-bottom:0.45rem;">${m.name}</h3>
          <p class="trademark-desc">${m.desc}</p>
          
          <table class="trademark-specs-table">
            <tr><td class="k">Geometry</td><td class="v">${m.specs.Geometry}</td></tr>
            <tr><td class="k">Domain</td><td class="v">${m.specs.Rationale}</td></tr>
            <tr><td class="k">Scaling</td><td class="v">${m.specs.FaviconScale}</td></tr>
          </table>
        </div>

        <button class="select-mark-btn ${selectedLogoId === m.id ? 'active' : ''}" data-logo="${m.id}">
          ${selectedLogoId === m.id ? '✓ Active Site Brandmark' : 'Preview as Active Brandmark'}
        </button>
      </div>
    </div>
  `).join('')

  app.innerHTML = `
    <!-- Sticky Theme Selector Cockpit (32 Styles with McKinsey/Swiss/Federal Showcase) -->
    <div class="theme-selector-bar">
      <div class="selector-top-row">
        <div class="selector-title">
          <span>🎨 Style Engine: 32 World-Class Aesthetics</span>
        </div>
        <div class="category-tabs">
          <button class="cat-tab ${activeCategory === 'mckinsey_fam' ? 'active' : ''}" data-cat="mckinsey_fam">🏆 McKinsey & Federal (6)</button>
          <button class="cat-tab ${activeCategory === 'topbrands' ? 'active' : ''}" data-cat="topbrands">🏢 Top Companies (8)</button>
          <button class="cat-tab ${activeCategory === 'exec' ? 'active' : ''}" data-cat="exec">Executive (6)</button>
          <button class="cat-tab ${activeCategory === 'radical' ? 'active' : ''}" data-cat="radical">Radical / Tech (6)</button>
          <button class="cat-tab ${activeCategory === 'heritage' ? 'active' : ''}" data-cat="heritage">Heritage / Gov (6)</button>
          <button class="cat-tab ${activeCategory === 'all' ? 'active' : ''}" data-cat="all">All (32)</button>
        </div>
      </div>
      <div class="theme-btn-grid">
        ${themeButtons}
      </div>
    </div>

    <!-- Header Navigation -->
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="#" class="brand-badge">
          <div class="brand-icon" style="background:transparent;border:none;box-shadow:none;color:var(--brand-primary);width:40px;height:40px;">
            ${activeLogoObj.svg}
          </div>
          <div class="brand-text">
            <h1>Universal Bridge</h1>
            <span>Consulting, LLC &bull; Est. 2010</span>
          </div>
        </a>

        <!-- Page View Switcher -->
        <div class="nav-page-switcher">
          <button class="page-switch-btn ${activeView === 'overview' ? 'active' : ''}" data-view="overview">
            🏢 Enterprise Overview
          </button>
          <button class="page-switch-btn ${activeView === 'trademarks' ? 'active' : ''}" data-view="trademarks">
            ✨ Brandmark Studio (8)
          </button>
        </div>

        <div class="header-meta-pill" style="display:flex;">
          <span class="status-dot"></span>
          <span>16-YEAR ACTIVE ENTERPRISE</span>
        </div>
      </div>
    </header>

    <main>
      ${activeView === 'trademarks' ? `
        <!-- BRANDMARK & TRADEMARK STUDIO VIEW -->
        <section class="hero-section" style="padding: 3rem 0 2.5rem;">
          <div class="container">
            <div class="hero-meta-strip">
              <span class="meta-chip highlight">Corporate Identity Suite</span>
              <span class="meta-chip">USPTO Trademark Explorations</span>
              <span class="meta-chip">Vector SVG Scalability</span>
            </div>

            <h2 class="hero-title" style="font-size:2.8rem;">
              Brandmark & Trademark Studio.<br/>
              <span class="accent-word">8 Distinct Corporate Emblems.</span>
            </h2>
            
            <p class="hero-subtitle">
              Each concept embodies a distinct facet of Universal Bridge Consulting: from classical institutional keystones and Wall Street ligatures, to high-throughput data pipelines and Bauhaus Swiss cantilevers. Click any mark to preview it instantly as the active header brandmark across all 32 style sheets!
            </p>
          </div>
        </section>

        <section class="container">
          <div class="trademark-grid">
            ${trademarkCardsHtml}
          </div>
        </section>
      ` : `
        <!-- ENTERPRISE OVERVIEW VIEW -->
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="container">
            <div class="hero-meta-strip">
              <span class="meta-chip highlight">NYS DOS ID: 3913719</span>
              <span class="meta-chip">D-U-N-S: 117517116</span>
              <span class="meta-chip">Tech Since 2001 &bull; Cargo Since 2004</span>
              <span class="meta-chip">Garden City, NY 11530</span>
            </div>

            <h2 class="hero-title">
              Architecting Data Integrity.<br/>
              <span class="accent-word">Bridging Enterprise Scale.</span>
            </h2>
            
            <p class="hero-subtitle">
              Universal Bridge Consulting delivers high-throughput supply chain middleware, automated HUD 50059 and Yardi compliance validation, and mission-critical enterprise systems engineering. Founded February 17, 2010. Backed by 25 years of technology architecture and 22 years in global freight logistics.
            </p>

            <!-- KPI Strip -->
            <div class="kpi-grid">
              <div class="kpi-card">
                <div class="kpi-num">16.5 Yrs</div>
                <div class="kpi-label">Continuous Corporate Age</div>
                <div class="kpi-sub">Est. Feb 17, 2010 &bull; DOS ID: 3913719</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-num">25+ Yrs</div>
                <div class="kpi-label">Enterprise Tech Heritage</div>
                <div class="kpi-sub">Tech Since 2001 &bull; Wall St & Madison Ave</div>
              </div>
              <div class="kpi-card">
                <div class="kpi-num">22+ Yrs</div>
                <div class="kpi-label">Global Cargo Lineage</div>
                <div class="kpi-sub">Cargo Logistics Since 2004 &bull; WiseTech CCO</div>
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
                <li>Battle-tested across Fortune 50 healthcare & global freight pipelines</li>
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

        <!-- Syndicate Leadership (Updated with 25-Year Lineage) -->
        <section class="container" style="margin-bottom: 4rem;">
          <div class="section-title">
            <h2>Syndicate Leadership</h2>
            <p>Senior multidisciplinary technical execution with quarter-century credentials.</p>
          </div>

          <div class="leaders-grid">
            <!-- William Hanusiewicz -->
            <div class="leader-box">
              <div>
                <div class="leader-title">Managing Director & Principal Solutions Architect</div>
                <div class="leader-name">William Hanusiewicz</div>
                <p class="leader-bio">
                  Founder of Universal Bridge Consulting, LLC (2010). Over 25 years of enterprise technology architecture (since 2001), including mission-critical infrastructure for Wall Street brokerage trading systems and Madison Avenue marketing firms. Over 22 years of senior leadership in global cargo and supply chain automation (since 2004), architecting high-throughput CargoWise One data pipelines, ThinkAutomation C# middleware, and automated visibility engines supporting Fortune 50 healthcare, pharmaceutical, and consumer supply chains. Active NCHM Certified Occupancy Specialist (COS) overseeing HUD 50059, TRACS, and Section 8 compliance audits.
                </p>
              </div>
              <div class="tags-strip">
                <span>Tech Industry Since 2001</span>
                <span>Cargo Logistics Since 2004</span>
                <span>Wall St & Madison Ave Heritage</span>
                <span>WiseTech CargoWise (CCO/CCS)</span>
                <span>ThinkAutomation C#</span>
                <span>NCHM Certified COS</span>
              </div>
            </div>

            <!-- Salvatore Hanusiewicz -->
            <div class="leader-box">
              <div>
                <div class="leader-title">Lead Systems Engineer & Technical Architect &bull; Programming Guru</div>
                <div class="leader-name">Salvatore Hanusiewicz</div>
                <p class="leader-bio">
                  Dual B.S. in Computer Science and Applied Mathematics from the State University of New York (SUNY) at Farmingdale. Celebrated programming guru, mathematical modeler, and software architect with comprehensive mastery over complex data structures, low-latency algorithms, and database internals. Former Yardi Systems engineer with deep domain authority over Yardi Voyager database schemas, custom SQL analytics views, TRACS compliance algorithms, and enterprise automation pipelines.
                </p>
              </div>
              <div class="tags-strip">
                <span>Dual B.S. CS & Math (SUNY)</span>
                <span>Programming Guru</span>
                <span>Ex-Yardi Voyager</span>
                <span>SQL Schema Architect</span>
                <span>Algorithmic Optimization</span>
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
      `}
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

  // Attach navigation view switch events
  document.querySelectorAll('.page-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view')
      if (view) {
        activeView = view
        renderApp()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })
  })

  // Attach trademark selection events
  document.querySelectorAll('.select-mark-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const logoId = btn.getAttribute('data-logo')
      if (logoId) {
        selectedLogoId = logoId
        renderApp()
      }
    })
  })

  // Attach category tab events
  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.getAttribute('data-cat')
      if (cat) {
        activeCategory = cat
        renderApp()
      }
    })
  })

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
