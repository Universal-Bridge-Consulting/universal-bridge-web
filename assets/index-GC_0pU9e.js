(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=document.querySelector(`#app`),t={cargowise:{title:`CargoWise One Integration Architecture`,icon:`⚡`,desc:`Sub-second multi-leg air & ocean data enrichment pipeline powering Fortune 500 supply chain reporting.`,specs:[{label:`Throughput SLA`,value:`< 250ms per transaction`},{label:`Replica Joins`,value:`Custom View Injections`},{label:`Data Integrity`,value:`100% Strict Audit Mode`},{label:`Middleware Layer`,value:`ThinkAutomation C#`}],code:`// [WiseTech CargoWise One Data Adapter]
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
}`},yardi:{title:`Yardi Voyager & HUD 50059 Engine`,icon:`⚖️`,desc:`Direct database-level schema diagnostics for Section 8, HUD 50059, TRACS, and LIHTC tenant compliance.`,specs:[{label:`Accreditation`,value:`NCHM Certified Occupancy Specialist`},{label:`Validity Period`,value:`Active thru June 2027`},{label:`Compliance Scope`,value:`HUD 50059, TRACS, LIHTC`},{label:`Database Layer`,value:`Yardi Voyager SQL Schema`}],code:`-- [Yardi Voyager HUD 50059 Certification Audit Query]
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
  AND c.TRACSStatus = 'Pending_Review';`},fleet:{title:`Commercial Fleet Telematics & Middleware`,icon:`🛰️`,desc:`Autonomous J1939 CAN-bus engine monitoring, hands-free voice co-pilots, and cold-chain compliance.`,specs:[{label:`Protocol`,value:`SAE J1939 CAN Bus`},{label:`Telemetry Mode`,value:`Hands-Free Voice Co-Pilot`},{label:`Latency`,value:`Real-time edge polling`},{label:`Hardware Interop`,value:`OBDLink MX+ / Android Wi-Fi`}],code:`// [J1939 Commercial Heavy Fleet Telemetry Hook]
void OnCanFrameReceived(uint32_t pgn, const uint8_t* data) {
    if (pgn == PGN_ENGINE_TEMPERATURE) {
        float coolantTemp = (data[0] * 1.0f) - 40.0f;
        if (coolantTemp > THRESHOLD_WARN_TEMP) {
            AudioSynthesizer::SpeakHandsFree("Alert: Coolant temperature elevated.");
            DataLogger::RecordFault(FAULT_HIGH_TEMP, coolantTemp);
        }
    }
}`},dossier:{title:`Verified Corporate Lineage Dossier`,icon:`🏛️`,desc:`16+ continuous years in good standing with the New York State Department of State and Dun & Bradstreet.`,specs:[{label:`Legal Entity`,value:`UNIVERSAL BRIDGE CONSULTING, LLC`},{label:`Date Established`,value:`February 17, 2010`},{label:`NYS DOS ID`,value:`3913719`},{label:`D-U-N-S Number`,value:`117517116 (Since May 2020)`}],code:`{
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
}`}},n=`cargowise`;function r(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function i(){let a=t[n],o=a.specs.map(e=>`
    <div class="spec-item">
      <span class="spec-label">${e.label}</span>
      <span class="spec-value">${e.value}</span>
    </div>
  `).join(``);e.innerHTML=`
    <!-- Top Nav Header -->
    <header class="site-header">
      <div class="container nav-wrap">
        <a href="#" class="brand-badge">
          <div class="brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M4 19h16M4 15l4-8 4 8 4-8 4 8M9 15h6"/>
            </svg>
          </div>
          <div class="brand-text">
            <h1>Universal Bridge</h1>
            <span>Consulting, LLC &bull; Est. 2010</span>
          </div>
        </a>

        <div class="header-status">
          <span class="status-dot"></span>
          <span>16-YR ACTIVE ENTERPRISE</span>
        </div>

        <ul class="nav-links">
          <li><a href="#cockpit">Architecture</a></li>
          <li><a href="#practices">Practices</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#dossier">Dossier</a></li>
          <li><a href="mailto:ceo@universalbridgeconsulting.com" class="cta-btn" style="padding:0.45rem 1rem;font-size:0.82rem;">Engage Syndicate</a></li>
        </ul>
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
            <span class="gradient-text">Bridging Enterprise Scale.</span>
          </h2>
          
          <p class="hero-subtitle">
            Universal Bridge Consulting delivers high-throughput supply chain middleware, automated HUD 50059 and Yardi compliance validation, and mission-critical data architecture. Founded February 17, 2010.
          </p>

          <!-- KPI Strip -->
          <div class="kpi-grid">
            <div class="kpi-card">
              <div class="kpi-number">16.5<span class="unit">Yrs</span></div>
              <div class="kpi-label">Continuous Corporate Age</div>
              <div class="kpi-sub">Est. Feb 17, 2010 &bull; NYS DOS ID 3913719</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-number">100<span class="unit">%</span></div>
              <div class="kpi-label">Pipeline SLA Execution</div>
              <div class="kpi-sub">WiseTech CargoWise One &bull; Walker &bull; Kenvue</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-number">COS<span class="unit">NCHM</span></div>
              <div class="kpi-label">Certified Occupancy Specialist</div>
              <div class="kpi-sub">Active thru June 2027 &bull; Yardi Systems Audit</div>
            </div>
            <div class="kpi-card">
              <div class="kpi-number">$0<span class="unit">Debt</span></div>
              <div class="kpi-label">Pristine Balance Sheet</div>
              <div class="kpi-sub">D-U-N-S # 117517116 &bull; Zero Liabilities</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Walker Automation Split-Preview Cockpit -->
      <section class="preview-cockpit-section" id="cockpit">
        <div class="container">
          <div class="cockpit-card">
            <div class="cockpit-header">
              <div class="cockpit-tabs">
                <button class="tab-btn ${n===`cargowise`?`active`:``}" data-tab="cargowise">
                  <span>⚡</span> CargoWise One Integration
                </button>
                <button class="tab-btn ${n===`yardi`?`active`:``}" data-tab="yardi">
                  <span>⚖️</span> HUD & Yardi Schema
                </button>
                <button class="tab-btn ${n===`fleet`?`active`:``}" data-tab="fleet">
                  <span>🛰️</span> Fleet Telematics
                </button>
                <button class="tab-btn ${n===`dossier`?`active`:``}" data-tab="dossier">
                  <span>🏛️</span> Corporate Dossier
                </button>
              </div>

              <div class="cockpit-meta">
                <span class="badge-live">PREVIEW ACTIVE</span>
                <span>LATENCY: 0.18ms</span>
              </div>
            </div>

            <div class="split-preview">
              <!-- Left Specification Pane -->
              <div class="preview-pane left-pane">
                <h3>${a.icon} ${a.title}</h3>
                <p class="pane-desc">${a.desc}</p>

                <div class="spec-list">
                  ${o}
                </div>

                <div style="margin-top:1rem;">
                  <a href="mailto:ceo@universalbridgeconsulting.com?subject=Inquiry: ${encodeURIComponent(a.title)}" class="cta-btn" style="padding:0.6rem 1.25rem;font-size:0.85rem;">
                    Request Architectural Review &rarr;
                  </a>
                </div>
              </div>

              <!-- Right Code / Schema Pane -->
              <div class="code-pane">
                <pre><code>${r(a.code)}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Practice Areas -->
      <section class="container" id="practices" style="padding: 3rem 1.75rem 2rem;">
        <div class="section-heading">
          <h2>Core Practice Areas</h2>
          <p>Institutional technical services backed by 16 years of hands-on systems architecture.</p>
        </div>

        <div class="practice-grid">
          <div class="practice-card">
            <span class="card-tag tag-blue">Supply Chain Architecture</span>
            <h3>WiseTech CargoWise One Automation</h3>
            <p>End-to-end data pipeline construction across Certified CargoWise tracks (CCO, CCS, CCP). Specializing in automated multi-leg air/ocean tracking, rail intermodal dwell calculation, and ThinkAutomation C# middleware.</p>
            <ul class="feature-checks">
              <li>Direct read-replica schema discovery & join optimization</li>
              <li>Sub-second milestone updates and exceptions dispatch</li>
              <li>Production battle-tested on Walker SCM & Kenvue reports</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="card-tag tag-emerald">Real Estate Compliance</span>
            <h3>Affordable Housing & HUD Compliance</h3>
            <p>Certified Occupancy Specialist (COS) audit protection and Yardi Voyager database schema diagnostics. We identify certification errors and subsidy recapture risks before state or HUD audits trigger.</p>
            <ul class="feature-checks">
              <li>Active NCHM Certified Occupancy Specialist credential</li>
              <li>HUD 50059, TRACS voucher, and LIHTC reconciliation</li>
              <li>Ex-Yardi Voyager database schema specialists</li>
            </ul>
          </div>

          <div class="practice-card">
            <span class="card-tag tag-purple">Telemetry & Edge</span>
            <h3>Heavy Fleet Telematics & Middleware</h3>
            <p>Commercial vehicle telemetry integration utilizing SAE J1939 CAN protocols, real-time edge diagnostic monitors, and hands-free audible alert systems for mission-critical logistics.</p>
            <ul class="feature-checks">
              <li>Non-interrupting audio alert synthesis & voice companion</li>
              <li>J1939 engine parameter parsing & fault code logging</li>
              <li>Direct BLE and Wi-Fi sensor telemetry ingestion</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Syndicate Leadership -->
      <section class="container" id="leadership" style="padding: 2rem 1.75rem 4rem;">
        <div class="section-heading">
          <h2>Syndicate Leadership</h2>
          <p>Senior multidisciplinary technical execution with deep corporate credentials.</p>
        </div>

        <div class="leadership-grid">
          <div class="leader-card">
            <div>
              <div class="leader-role">Managing Director & Principal Architect</div>
              <div class="leader-name">William Hanusiewicz</div>
              <p class="leader-bio">
                Founder of Universal Bridge Consulting, LLC (2010). 16+ years architecting enterprise supply chain automations, ThinkAutomation C# pipelines, and CargoWise One data pipelines for Fortune 500 logistics leaders. Active NCHM Certified Occupancy Specialist (COS).
              </p>
            </div>
            <div class="leader-tags">
              <span>WiseTech CargoWise</span>
              <span>ThinkAutomation C#</span>
              <span>NCHM COS Accredited</span>
              <span>Enterprise Data</span>
            </div>
          </div>

          <div class="leader-card">
            <div>
              <div class="leader-role">Lead Systems Engineer & Technical Architect</div>
              <div class="leader-name">Salvatore Hanusiewicz</div>
              <p class="leader-bio">
                BS & MS in Mathematics and Computer Science. Former Yardi Systems engineer with comprehensive mastery over Yardi Voyager database schemas, custom SQL reporting views, TRACS compliance algorithms, and large-scale enterprise data workflows.
              </p>
            </div>
            <div class="leader-tags">
              <span>BS & MS Computer Science</span>
              <span>Ex-Yardi Voyager</span>
              <span>SQL Optimization</span>
              <span>Compliance Algorithms</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Corporate Verification Dossier -->
      <section class="container" id="dossier">
        <div class="dossier-box">
          <div class="dossier-header">
            <div>
              <h3>Official Corporate Dossier</h3>
              <p>Public corporate standing data for vendor onboarding, enterprise RFP reviews, and bank underwriters.</p>
            </div>
            <div class="dossier-seal">
              <span>✓</span> NYS ACTIVE GOOD STANDING
            </div>
          </div>

          <div class="dossier-grid">
            <div class="dossier-cell">
              <div class="dossier-label">Legal Name</div>
              <div class="dossier-value">UNIVERSAL BRIDGE CONSULTING, LLC</div>
            </div>
            <div class="dossier-cell">
              <div class="dossier-label">Formation Date</div>
              <div class="dossier-value">February 17, 2010 (16+ Years)</div>
            </div>
            <div class="dossier-cell">
              <div class="dossier-label">NYS DOS ID</div>
              <div class="dossier-value">3913719</div>
            </div>
            <div class="dossier-cell">
              <div class="dossier-label">Dun & Bradstreet D-U-N-S</div>
              <div class="dossier-value">117517116 (Active 2020)</div>
            </div>
            <div class="dossier-cell">
              <div class="dossier-label">NAICS Industry Codes</div>
              <div class="dossier-value">541512 / 541611</div>
            </div>
            <div class="dossier-cell">
              <div class="dossier-label">Commercial Office</div>
              <div class="dossier-value">Garden City, Nassau County, NY</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-content">
          <div>
            <h4 style="font-size:1.2rem;font-weight:800;color:#fff;margin-bottom:0.4rem;">Universal Bridge Consulting, LLC</h4>
            <p style="font-size:0.85rem;color:var(--text-muted);max-width:400px;">
              Enterprise Data Architecture &bull; HUD & Yardi Compliance &bull; Founded February 17, 2010.
            </p>
          </div>

          <div>
            <a href="mailto:ceo@universalbridgeconsulting.com" class="cta-btn">
              <span>Contact Managing Director</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; 2010–2026 Universal Bridge Consulting, LLC. All rights reserved.</span>
          <span>Routing: <code style="color:var(--accent-blue);">ceo@universalbridgeconsulting.com</code></span>
        </div>
      </div>
    </footer>
  `,document.querySelectorAll(`.tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let r=e.getAttribute(`data-tab`);r&&t[r]&&(n=r,i())})})}i();