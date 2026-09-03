import './style.css'

const app = document.querySelector('#app')

// Navigation View State
let activeView = 'trademarks' // Default to show William the new brandmarks immediately!
let selectedLogoId = 'logo-sovereign-keystone'
let activeTmFilter = 'all' // 'all' | 'cargo' | 'tech' | 'sovereign' | 'compliance'

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

// 16 Full-Color, Domain-Tailored Trademark Concepts
const trademarkLogos = [
  // 1. Sovereign Keystone Bridge
  {
    id: 'logo-sovereign-keystone',
    cat: 'sovereign',
    name: 'The Sovereign Arch & Keystone',
    badge: 'Institutional Prestige',
    colors: ['#0f2744', '#8C2633', '#d4af37'],
    colorNames: 'Corporate Navy &bull; SCM Crimson &bull; Imperial Gold',
    desc: 'Deep Corporate Navy pillars crowned by Walker SCM’s signature #8C2633 burgundy keystone and a golden foundation span. Projects 16 years of legal authority and permanent enterprise stability.',
    specs: { Domain: 'Aged Corporate Sovereign', Meaning: 'Unshakeable Institutional Foundation', VectorStyle: 'Multi-Tone Solid Vector' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <path d="M15 85V45L35 25V85" fill="#0f2744"/>
        <path d="M85 85V45L65 25V85" fill="#0f2744"/>
        <path d="M42 22L50 14L58 22L55 34H45L42 22Z" fill="#8C2633"/>
        <path d="M35 55C35 45 42 38 50 38C58 38 65 45 65 55" stroke="#8C2633" stroke-width="6" stroke-linecap="round"/>
        <line x1="10" y1="88" x2="90" y2="88" stroke="#d4af37" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="62" r="4" fill="#d4af37"/>
      </svg>
    `
  },

  // 2. Multi-Modal Transit Span
  {
    id: 'logo-multimodal-transit',
    cat: 'cargo',
    name: 'The Multi-Modal Transit Span',
    badge: 'Air & Ocean Logistics',
    colors: ['#38bdf8', '#1d4ed8', '#10b981'],
    colorNames: 'Sky Blue (Air) &bull; Royal Cobalt (Ocean) &bull; Rail Emerald',
    desc: 'Three vivid aerodynamic bridge ribbons representing the 3 pillars of global freight: Sky Blue for Air Charters, Royal Cobalt for Ocean Containers, and Emerald for Intermodal Rail & Dwell automation.',
    specs: { Domain: 'WiseTech CargoWise One', Meaning: 'Multi-Leg Supply Chain Visibility', VectorStyle: 'Dynamic Fluid Ribbon Span' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <path d="M16 35C35 20 65 20 84 35" stroke="#38bdf8" stroke-width="6" stroke-linecap="round"/>
        <path d="M16 52C35 37 65 37 84 52" stroke="#1d4ed8" stroke-width="6" stroke-linecap="round"/>
        <path d="M16 69C35 54 65 54 84 69" stroke="#10b981" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="27" r="4.5" fill="#38bdf8"/>
        <circle cx="50" cy="44" r="4.5" fill="#1d4ed8"/>
        <circle cx="50" cy="61" r="4.5" fill="#10b981"/>
        <line x1="20" y1="82" x2="80" y2="82" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  },

  // 3. Interlocking UB Monogram
  {
    id: 'logo-gilded-monogram',
    cat: 'sovereign',
    name: 'The Gilded Wall Street Ligature',
    badge: 'Executive Monogram',
    colors: ['#ffd700', '#d4af37', '#0f172a'],
    colorNames: 'Bright Gold &bull; Antique Bronze &bull; Obsidian Slate',
    desc: 'An interlocking monogram where the curves of the capital "U" descend into bridge suspension cables that lock into the foundation of the capital "B". Finished in metallic gold gradients.',
    specs: { Domain: 'Wall Street & Financial Heritage', Meaning: 'Bespoke Executive Consulting', VectorStyle: 'Gilded Metallic Gradient' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ffd700"/>
            <stop offset="50%" stop-color="#d4af37"/>
            <stop offset="100%" stop-color="#996515"/>
          </linearGradient>
        </defs>
        <path d="M22 24V56C22 69 32 78 45 78C58 78 68 69 68 56V24" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round"/>
        <path d="M45 24H68C77 24 84 30 84 38C84 46 77 51 68 51H45" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round"/>
        <path d="M45 51H70C80 51 88 57 88 66C88 74 80 80 70 80H45" stroke="url(#goldGrad)" stroke-width="7" stroke-linecap="round"/>
        <line x1="16" y1="88" x2="88" y2="88" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
      </svg>
    `
  },

  // 4. Algorithmic Graph Bridge
  {
    id: 'logo-algorithmic-graph',
    cat: 'tech',
    name: 'The Algorithmic Graph Bridge',
    badge: 'CS & Math Modeling',
    colors: ['#8b5cf6', '#06b6d4', '#ec4899'],
    colorNames: 'Electric Violet &bull; Neon Cyan &bull; Laser Magenta',
    desc: 'Direct tribute to Sal Hanusiewicz’s Dual B.S. in CS & Applied Mathematics. Five interconnected mathematical graph nodes form a structural suspension bridge over coordinate axes.',
    specs: { Domain: 'Algorithms, Data Structures & Compilers', Meaning: 'Sub-Second Computational Precision', VectorStyle: 'Graph Theory & Telemetry' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <line x1="15" y1="50" x2="32" y2="28" stroke="#8b5cf6" stroke-width="3.5"/>
        <line x1="32" y1="28" x2="50" y2="40" stroke="#06b6d4" stroke-width="3.5"/>
        <line x1="50" y1="40" x2="68" y2="28" stroke="#06b6d4" stroke-width="3.5"/>
        <line x1="68" y1="28" x2="85" y2="50" stroke="#ec4899" stroke-width="3.5"/>
        <path d="M15 65C32 50 68 50 85 65" stroke="#8b5cf6" stroke-width="4.5" stroke-linecap="round"/>
        <circle cx="15" cy="50" r="5" fill="#8b5cf6"/>
        <circle cx="32" cy="28" r="5" fill="#06b6d4"/>
        <circle cx="50" cy="40" r="6" fill="#ec4899"/>
        <circle cx="68" cy="28" r="5" fill="#06b6d4"/>
        <circle cx="85" cy="50" r="5" fill="#8b5cf6"/>
        <line x1="12" y1="80" x2="88" y2="80" stroke="#06b6d4" stroke-width="3" stroke-dasharray="3 3"/>
      </svg>
    `
  },

  // 5. Trans-Oceanic Horizon Arch
  {
    id: 'logo-ocean-horizon',
    cat: 'cargo',
    name: 'The Trans-Oceanic Horizon Arch',
    badge: 'Maritime Cargo & Vessels',
    colors: ['#002244', '#f97316', '#14b8a6'],
    colorNames: 'Deep Marine &bull; Sunrise Orange &bull; Seafoam Cyan',
    desc: 'The hull of an ocean container vessel slicing through deep waters, merging seamlessly into a global horizon bridge illuminated by a rising dawn sun. Built for global ocean freight.',
    specs: { Domain: 'Global Ocean Freight & Vessel Tracking', Meaning: 'Intercontinental Transit Certainty', VectorStyle: 'Nautical Horizon Vector' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <circle cx="50" cy="42" r="14" fill="#f97316"/>
        <path d="M12 60C35 40 65 40 88 60" stroke="#14b8a6" stroke-width="6" stroke-linecap="round"/>
        <path d="M22 75L35 56H65L78 75H22Z" fill="#002244"/>
        <line x1="10" y1="82" x2="90" y2="82" stroke="#002244" stroke-width="6" stroke-linecap="round"/>
        <line x1="32" y1="56" x2="32" y2="46" stroke="#f97316" stroke-width="3"/>
        <line x1="68" y1="56" x2="68" y2="46" stroke="#f97316" stroke-width="3"/>
      </svg>
    `
  },

  // 6. HUD Compliance Keystone Shield
  {
    id: 'logo-federal-shield',
    cat: 'compliance',
    name: 'The HUD Compliance Keystone Shield',
    badge: 'Regulatory Audit Defense',
    colors: ['#003366', '#dc2626', '#f59e0b'],
    colorNames: 'Federal Blue &bull; Vermilion Red &bull; Audit Gold',
    desc: 'Official Federal Blue security shield enclosing an arching keystone bridge and 3 gold compliance stars. Built specifically for Certified Occupancy Specialist authority and HUD 50059 defense.',
    specs: { Domain: 'Certified Occupancy Specialist & HUD', Meaning: 'Zero Subsidy Recapture Audit Defense', VectorStyle: 'Institutional Defense Heraldry' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <path d="M50 12L85 25V54C85 75 69 90 50 96C31 90 15 75 15 54V25L50 12Z" fill="#003366"/>
        <path d="M30 68C30 52 40 42 50 42C60 42 70 52 70 68" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
        <line x1="26" y1="72" x2="74" y2="72" stroke="#dc2626" stroke-width="5" stroke-linecap="round"/>
        <circle cx="50" cy="30" r="4.5" fill="#f59e0b"/>
        <circle cx="36" cy="34" r="3.5" fill="#f59e0b"/>
        <circle cx="64" cy="34" r="3.5" fill="#f59e0b"/>
      </svg>
    `
  },

  // 7. ThinkAutomation Pipeline Conduit
  {
    id: 'logo-thinkauto-pipeline',
    cat: 'tech',
    name: 'The ThinkAutomation Pipeline Conduit',
    badge: 'C# Integration Middleware',
    colors: ['#635bff', '#00d4ff', '#1e293b'],
    colorNames: 'Stripe Blurple &bull; Electric Cyan &bull; Dark Slate',
    desc: 'Two enterprise endpoints linked by a sub-second packet conduit glowing with high-voltage cyan data packets. Represents William’s C# ThinkAutomation parsing engines and exception routers.',
    specs: { Domain: 'ThinkAutomation C# & Middleware', Meaning: 'Sub-Second Data Synchronization', VectorStyle: 'Isometric High-Tech Flow' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <rect x="15" y="25" width="14" height="50" rx="3" fill="#635bff"/>
        <rect x="71" y="25" width="14" height="50" rx="3" fill="#635bff"/>
        <path d="M29 38H71" stroke="#00d4ff" stroke-width="5" stroke-linecap="round"/>
        <path d="M29 50H71" stroke="#00d4ff" stroke-width="5" stroke-linecap="round"/>
        <path d="M29 62H71" stroke="#00d4ff" stroke-width="5" stroke-linecap="round"/>
        <circle cx="42" cy="38" r="4" fill="#ffffff"/>
        <circle cx="58" cy="50" r="4" fill="#ffffff"/>
        <circle cx="46" cy="62" r="4" fill="#ffffff"/>
        <line x1="12" y1="84" x2="88" y2="84" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  },

  // 8. Commercial Fleet Telematics Ring
  {
    id: 'logo-fleet-canbus',
    cat: 'tech',
    name: 'The Fleet Telematics J1939 Ring',
    badge: 'Heavy Fleet CAN-Bus',
    colors: ['#eab308', '#18181b', '#ef4444'],
    colorNames: 'CAT Safety Yellow &bull; Asphalt Black &bull; Alert Red',
    desc: 'An industrial heavy-duty telemetry hub gear enclosing an arching CAN-bus data bridge with a live engine alert beacon. Built for SAE J1939 protocols, sensor logging, and hands-free voice co-pilots.',
    specs: { Domain: 'Commercial Fleet & CAN-Bus Telematics', Meaning: 'Mission-Critical Vehicle Telemetry', VectorStyle: 'Industrial Hardware Badge' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <circle cx="50" cy="50" r="38" stroke="#eab308" stroke-width="6"/>
        <circle cx="50" cy="50" r="30" stroke="#18181b" stroke-width="3" stroke-dasharray="6 4"/>
        <path d="M28 62C36 46 64 46 72 62" stroke="#eab308" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="38" r="6" fill="#ef4444"/>
        <line x1="24" y1="66" x2="76" y2="66" stroke="#18181b" stroke-width="5"/>
      </svg>
    `
  },

  // 9. Universal Globe & Orbital Span
  {
    id: 'logo-universal-globe',
    cat: 'cargo',
    name: 'The Universal Orbital Span',
    badge: 'Global Scale',
    colors: ['#2563eb', '#10b981', '#1e1b4b'],
    colorNames: 'Electric Azure &bull; Mint Green &bull; Midnight Indigo',
    desc: 'A true embodiment of "Universal Bridge": a wireframe globe girdled by an ascending high-speed orbital bridge connecting the Western Hemisphere to global logistics nodes.',
    specs: { Domain: 'Intercontinental Supply Networks', Meaning: 'Global Span & Universal Integration', VectorStyle: '3D Orbital Wireframe' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <circle cx="50" cy="50" r="36" stroke="#2563eb" stroke-width="4"/>
        <ellipse cx="50" cy="50" rx="36" ry="14" stroke="#2563eb" stroke-width="2.5" stroke-opacity="0.6"/>
        <line x1="50" y1="14" x2="50" y2="86" stroke="#2563eb" stroke-width="2" stroke-opacity="0.6"/>
        <path d="M12 70C25 40 75 30 92 48" stroke="#10b981" stroke-width="7" stroke-linecap="round"/>
        <circle cx="50" cy="39" r="5" fill="#10b981"/>
        <circle cx="82" cy="44" r="4" fill="#ffffff"/>
      </svg>
    `
  },

  // 10. Yardi Database Schema Keystone
  {
    id: 'logo-yardi-schema',
    cat: 'compliance',
    name: 'The Relational Schema Keystone',
    badge: 'Database Architecture',
    colors: ['#0284c7', '#f59e0b', '#475569'],
    colorNames: 'Database Cyan &bull; Schema Amber &bull; Relational Slate',
    desc: 'Relational database cylinder stacks securely bridged by a golden compliance arch. Directly reflects Salvatore’s background as a former Yardi Voyager database internals systems engineer.',
    specs: { Domain: 'Yardi Voyager & Relational SQL Schemas', Meaning: 'Database Structural Integrity', VectorStyle: 'Relational Stack Architecture' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <ellipse cx="28" cy="30" rx="14" ry="6" fill="#0284c7"/>
        <path d="M14 30V65C14 68 20 71 28 71C36 71 42 68 42 65V30" fill="#0284c7" fill-opacity="0.8"/>
        <ellipse cx="72" cy="30" rx="14" ry="6" fill="#0284c7"/>
        <path d="M58 30V65C58 68 64 71 72 71C80 71 86 68 86 65V30" fill="#0284c7" fill-opacity="0.8"/>
        <path d="M28 50C38 32 62 32 72 50" stroke="#f59e0b" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="37" r="4.5" fill="#f59e0b"/>
        <line x1="10" y1="82" x2="90" y2="82" stroke="#475569" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  },

  // 11. Swiss Brutalist Duotone Monolith
  {
    id: 'logo-swiss-duotone',
    cat: 'sovereign',
    name: 'The Swiss Bauhaus Cantilever',
    badge: 'Architectural Modernism',
    colors: ['#000000', '#ff0000', '#64748b'],
    colorNames: 'Pitch Black &bull; International Red &bull; Concrete Slate',
    desc: 'Stark 45-degree geometric cantilever bridge formed from high-contrast interlocking architectural planes. One of William’s favorite aesthetics, featuring a sharp International Red focal cut.',
    specs: { Domain: 'Swiss Typographic & Grid Systems', Meaning: 'Pure Structural Power', VectorStyle: 'Geometric Planar Monolith' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <path d="M12 85H88" stroke="#000000" stroke-width="8" stroke-linecap="square"/>
        <path d="M18 85L46 22H60L32 85H18Z" fill="#000000"/>
        <path d="M82 85L54 22H40L68 85H82Z" fill="#64748b"/>
        <rect x="42" y="16" width="16" height="12" fill="#ff0000"/>
        <line x1="28" y1="54" x2="72" y2="54" stroke="#ff0000" stroke-width="5"/>
      </svg>
    `
  },

  // 12. Platinum Infinity Loop
  {
    id: 'logo-platinum-infinity',
    cat: 'sovereign',
    name: 'The Titanium Infinity Span',
    badge: 'Perpetual Enterprise',
    colors: ['#3b82f6', '#94a3b8', '#ffffff'],
    colorNames: 'Sapphire Blue &bull; Polished Titanium &bull; Pure White',
    desc: 'A continuous, topological Möbius ribbon forming an infinity loop and suspension bridge span. Symbolizes 16+ continuous years in good standing and perpetual supply chain continuity.',
    specs: { Domain: 'Sovereign Holding & Continuity', Meaning: 'Perpetual Enterprise Circulation', VectorStyle: 'Titanium 3D Ribbon' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <path d="M22 65C12 55 12 38 25 28C38 18 55 24 68 38L80 52C88 62 88 75 78 82C68 89 54 84 44 72L30 55" stroke="#3b82f6" stroke-width="7" stroke-linecap="round"/>
        <path d="M30 55L18 42C10 32 15 20 28 16C42 12 58 20 70 32" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
        <circle cx="50" cy="45" r="5" fill="#3b82f6"/>
        <line x1="16" y1="86" x2="84" y2="86" stroke="#94a3b8" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  },

  // 13. Healthcare Cold-Chain Cryo Span
  {
    id: 'logo-pharma-cryo',
    cat: 'cargo',
    name: 'The Cold-Chain Cryo Span',
    badge: 'Pharma & Healthcare Logistics',
    colors: ['#0284c7', '#0d9488', '#38bdf8'],
    colorNames: 'Cryo Cobalt &bull; Clinical Teal &bull; Frost Cyan',
    desc: 'Tailored for Fortune 50 healthcare and life sciences freight: an interlocking crystal snowflake merged with an intermodal bridge arch. Represents temperature-controlled cold chain integrity.',
    specs: { Domain: 'Fortune 50 Healthcare & Life Sciences', Meaning: 'Temperature-Controlled Data Integrity', VectorStyle: 'Precision Geometric Crystal Arch' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <path d="M15 70C30 45 70 45 85 70" stroke="#0284c7" stroke-width="6" stroke-linecap="round"/>
        <line x1="50" y1="20" x2="50" y2="60" stroke="#0d9488" stroke-width="5" stroke-linecap="round"/>
        <line x1="30" y1="35" x2="70" y2="45" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <line x1="70" y1="35" x2="30" y2="45" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
        <circle cx="50" cy="20" r="4.5" fill="#0284c7"/>
        <circle cx="50" cy="50" r="5" fill="#0d9488"/>
        <line x1="12" y1="78" x2="88" y2="78" stroke="#0284c7" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  },

  // 14. Madison & Wall Street Monogram
  {
    id: 'logo-madison-wall',
    cat: 'sovereign',
    name: 'The Madison & Wall Heritage Crest',
    badge: 'Madison Ave & Wall St',
    colors: ['#064e3b', '#b45309', '#eab308'],
    colorNames: 'British Racing Green &bull; Antique Bronze &bull; Sovereign Gold',
    desc: 'Classic Manhattan financial prestige: Roman serif capital letters "U" and "B" intertwined within an engraved architectural bridge vault. Commemorates William’s tech career on Wall St and Madison Ave.',
    specs: { Domain: 'Wall St Brokerages & Madison Ave Agencies', Meaning: '25-Year Manhattan Tech Lineage', VectorStyle: 'Classical Engraved Crest' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <circle cx="50" cy="50" r="40" stroke="#064e3b" stroke-width="5"/>
        <path d="M30 32V54C30 64 38 70 48 70C58 70 66 64 66 54V32" stroke="#b45309" stroke-width="6" stroke-linecap="round"/>
        <path d="M48 32H68C76 32 82 37 82 43C82 50 76 53 68 53H48" stroke="#eab308" stroke-width="5" stroke-linecap="round"/>
        <path d="M48 53H70C78 53 84 58 84 65C84 72 78 76 70 76H48" stroke="#eab308" stroke-width="5" stroke-linecap="round"/>
      </svg>
    `
  },

  // 15. Cyberpunk Mainframe Conduit
  {
    id: 'logo-cyberpunk-crt',
    cat: 'tech',
    name: 'The Cyberpunk CRT Conduit',
    badge: 'Systems Hacker & Assembly',
    colors: ['#00ff66', '#ffb703', '#052e16'],
    colorNames: 'Phosphor Green &bull; Cyber Amber &bull; Deep Matrix',
    desc: 'Terminal vector oscilloscope bridge featuring glowing phosphor green vectors, hexadecimal data points, and an amber alert tracer. Built for low-level systems programming and compiler mastery.',
    specs: { Domain: 'Low-Latency Systems & Mainframes', Meaning: 'Real-Time Edge Diagnostic Matrix', VectorStyle: 'Terminal CRT Vector Display' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <rect x="12" y="16" width="76" height="68" rx="4" stroke="#00ff66" stroke-width="4"/>
        <path d="M16 64L34 38L50 56L66 38L84 64" stroke="#00ff66" stroke-width="4.5" stroke-linejoin="round"/>
        <circle cx="50" cy="56" r="4.5" fill="#ffb703"/>
        <circle cx="34" cy="38" r="3.5" fill="#00ff66"/>
        <circle cx="66" cy="38" r="3.5" fill="#00ff66"/>
        <line x1="20" y1="74" x2="80" y2="74" stroke="#00ff66" stroke-width="2" stroke-dasharray="4 4"/>
      </svg>
    `
  },

  // 16. Intermodal Sunrise Port Gateway
  {
    id: 'logo-intermodal-sunrise',
    cat: 'cargo',
    name: 'The Intermodal Sunrise Gateway',
    badge: 'Port & Container Terminal',
    colors: ['#f43f5e', '#fbbf24', '#0f172a'],
    colorNames: 'Sunrise Coral &bull; Sunbeam Gold &bull; Port Navy',
    desc: 'A vibrant coral sunrise ascending over a high-capacity container port gantry crane and suspension bridge. Built to symbolize container terminal operations, rail ramps, and port dwell elimination.',
    specs: { Domain: 'Container Terminals & Port Operations', Meaning: 'Zero-Dwell Intermodal Routing', VectorStyle: 'Vibrant Duotone Horizon' },
    svg: `
      <svg viewBox="0 0 100 100" class="trademark-svg" fill="none">
        <circle cx="50" cy="38" r="15" fill="#fbbf24"/>
        <path d="M10 65C35 48 65 48 90 65" stroke="#f43f5e" stroke-width="6.5" stroke-linecap="round"/>
        <path d="M26 84V56L44 44V84" fill="#0f172a"/>
        <path d="M74 84V56L56 44V84" fill="#0f172a"/>
        <line x1="10" y1="88" x2="90" y2="88" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
        <circle cx="50" cy="52" r="4" fill="#f43f5e"/>
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

  // Filter Trademarks
  const filteredMarks = activeTmFilter === 'all'
    ? trademarkLogos
    : trademarkLogos.filter(m => m.cat === activeTmFilter)

  // Render Trademarks Grid HTML
  const trademarkCardsHtml = filteredMarks.map(m => `
    <div class="trademark-card" id="${m.id}">
      <div class="trademark-preview-box">
        <div>
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
          
          <!-- Palette Swatch Strip -->
          <div class="swatch-row">
            ${m.colors.map(c => `<span class="swatch-chip" style="background:${c};"></span>`).join('')}
            <span class="swatch-label">${m.colorNames}</span>
          </div>

          <p class="trademark-desc">${m.desc}</p>
          
          <table class="trademark-specs-table">
            <tr><td class="k">Domain Focus</td><td class="v">${m.specs.Domain}</td></tr>
            <tr><td class="k">Symbolism</td><td class="v">${m.specs.Meaning}</td></tr>
            <tr><td class="k">Vector Style</td><td class="v">${m.specs.VectorStyle}</td></tr>
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
          <div class="brand-icon" style="background:transparent;border:none;box-shadow:none;width:44px;height:44px;">
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
            🎨 Trademark Studio (${trademarkLogos.length})
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
              <span class="meta-chip">16 Distinct Color Trademarks</span>
              <span class="meta-chip">Multi-Tone Vector SVGs</span>
            </div>

            <h2 class="hero-title" style="font-size:2.8rem;">
              Brandmark & Trademark Studio.<br/>
              <span class="accent-word">16 Full-Color Corporate Emblems.</span>
            </h2>
            
            <p class="hero-subtitle">
              Engineered around our company name and institutional disciplines: WiseTech CargoWise supply chains, Yardi & HUD 50059 regulatory compliance, mathematical algorithms, and Wall Street heritage. Click any mark to preview it live in color as the site header logo!
            </p>

            <!-- Trademark Filter Tabs -->
            <div class="trademark-filter-bar">
              <button class="tm-filter-btn ${activeTmFilter === 'all' ? 'active' : ''}" data-tmfilter="all">All Trademarks (16)</button>
              <button class="tm-filter-btn ${activeTmFilter === 'cargo' ? 'active' : ''}" data-tmfilter="cargo">🚢 Supply Chain & Cargo (5)</button>
              <button class="tm-filter-btn ${activeTmFilter === 'tech' ? 'active' : ''}" data-tmfilter="tech">⚡ Tech, Math & Telematics (4)</button>
              <button class="tm-filter-btn ${activeTmFilter === 'sovereign' ? 'active' : ''}" data-tmfilter="sovereign">🏛️ Sovereign & Wall St (4)</button>
              <button class="tm-filter-btn ${activeTmFilter === 'compliance' ? 'active' : ''}" data-tmfilter="compliance">⚖️ Compliance & HUD (3)</button>
            </div>
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

  // Attach trademark filter button events
  document.querySelectorAll('.tm-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-tmfilter')
      if (filter) {
        activeTmFilter = filter
        renderApp()
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
