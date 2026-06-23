/* global React, GrafyntLogo, SectionTag, HeroChips */
const { useState: useStateH, useEffect: useEffectH } = React;

function HomePage({ setPage }) {
  return (
    <div>
      <HomeHero setPage={setPage} />
      <ClientTicker />
      <HomeStatement />
      <MarqueeStrip />
      <HomeServicesPreview setPage={setPage} />
      <HomeProcess />
      <HomeTestimonials />
      <HomeFinalCta setPage={setPage} />
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────
function HomeHero({ setPage }) {
  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 80,
      paddingBottom: 40,
      overflow: 'hidden'
    }}>
      {/* Breathing background */}
      <div className="hero-aurora" />
      <div className="hero-particles" />

      {/* Headline + CTA */}
      <div style={{
        position: 'relative', zIndex: 6,
        textAlign: 'center', padding: '0 24px',
        animation: 'fadeUp 0.8s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
          <SectionTag>AI Agency · Open for Projects · 1 Live System Deployed</SectionTag>
        </div>

        <h1 style={{ marginBottom: 24 }}>
          <span style={{
            display: 'block',
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 200,
            fontSize: 'clamp(36px, 5.6vw, 78px)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: 'var(--fg)'
          }}>We build</span>
          <span style={{
            display: 'block',
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(46px, 7.2vw, 100px)',
            lineHeight: 1.0,
            color: 'var(--fg)',
            marginTop: 4
          }}>intelligent systems<span style={{ color: 'var(--red)' }}>.</span></span>
        </h1>

        <p style={{
          maxWidth: 600, margin: '0 auto 32px',
          fontSize: 'clamp(17px, 1.7vw, 22px)',
          color: 'var(--fg-mute)',
          lineHeight: 1.55,
          fontWeight: 400
        }}>
          <span style={{ color: 'var(--fg)', fontWeight: 500 }}>Discover. Build. Deploy. Train.</span>{' '}
          AI systems that pay for themselves.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => setPage('contact')}>Get in Touch</button>
          <button className="btn btn-ghost" onClick={() => setPage('services')}>View Services</button>
        </div>
      </div>

      {/* Portrait + chips */}
      <div className="hero-portrait-wrap" style={{ marginTop: 56 }}>
        <div className="hero-portrait-slot">
          <picture>
            <source srcSet="assets/robot.webp" type="image/webp" />
            <img
              src="assets/robot.png"
              alt="Grafynt AI, a humanoid robot representing intelligent systems"
              className="hero-portrait-img"
              width="1800"
              height="1175"
              fetchpriority="high"
              decoding="async"
              draggable="false"
            />
          </picture>
        </div>

        {/* Floating chips */}
        <HeroChips />

        {/* Bottom-center caption */}
        <div style={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          zIndex: 5, display: 'flex', alignItems: 'center', gap: 10,
          padding: '8px 16px',
          background: 'rgba(15,17,27,0.66)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: 999,
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%', background: 'var(--red)',
            animation: 'redPulse 2.2s infinite'
          }}></span>
          <span className="g-mono" style={{
            fontSize: 10, letterSpacing: 2.4, color: 'var(--fg-mute)',
            textTransform: 'uppercase'
          }}>Live · Building With AI</span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue">
        <span className="g-mono">Scroll</span>
        <svg width="16" height="22" viewBox="0 0 16 22" fill="none">
          <path d="M8 1 L8 19 M2 13 L8 19 L14 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
function ClientTicker() {
  const items = [
    'AI AUTOMATIONS', 'AGENTIC SYSTEMS', 'AI WEBSITES',
    'WHATSAPP BOTS', 'CHATBOTS', 'LANDING PAGES',
    'WORKFLOW DESIGN', 'AI ASSISTANTS', 'TEAM TRAINING'
  ];
  return (
    <div className="ticker" style={{ marginTop: 0 }}>
      <div className="ticker-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="ticker-item">{t}</span>
        ))}
      </div>
    </div>
  );
}

// ─── "Great companies are built..." statement ─────────────
function HomeStatement() {
  return (
    <section className="why-section" style={{ padding: '120px 0' }}>
      <img src="assets/why-bg.png" alt="" aria-hidden="true" className="why-bg-img" />
      <div className="why-frost" />
      <div className="shell">
        <div style={{ marginBottom: 28 }}>
          <SectionTag>Why Grafynt</SectionTag>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start'
        }} className="gf-statement-grid">
          <div className="g-mono" style={{
            fontSize: 11, letterSpacing: 3, color: 'var(--fg-faint)',
            textTransform: 'uppercase'
          }}>
            01 / OUR THESIS
          </div>
          <div>
            <h2 style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 300,
              fontSize: 'clamp(28px, 3.4vw, 52px)',
              lineHeight: 1.18,
              color: 'var(--fg)',
              letterSpacing: '-0.01em'
            }}>
              Great companies run on{' '}
              <span style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                color: 'var(--fg)'
              }}>clear decisions</span>.{' '}
              We pair strategy, operations, and AI to move you{' '}
              <span style={{ color: 'var(--red)' }}>faster, and keep you there</span>.
            </h2>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)'
        }} className="gf-stats-grid">
          {[
            { val: '01',    label: 'Systems Live' },
            { val: '<10d',  label: 'Site Delivery' },
            { val: '100%',  label: 'AI-Native Build' },
            { val: '24/7',  label: 'Agent Uptime' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '32px 24px',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none'
            }}>
              <div className="g-serif" style={{
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                fontStyle: 'italic',
                color: 'var(--fg)',
                marginBottom: 6
              }}>{s.val}</div>
              <div className="g-mono" style={{
                fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                textTransform: 'uppercase'
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{"@media (max-width: 900px) { .gf-statement-grid { grid-template-columns: 1fr !important; gap: 24px !important; } .gf-stats-grid { grid-template-columns: 1fr 1fr !important; } .gf-stats-grid > div:nth-child(2) { border-right: none !important; } .gf-stats-grid > div:nth-child(odd) { border-right: 1px solid var(--border) !important; } .gf-stats-grid > div:nth-child(1), .gf-stats-grid > div:nth-child(2) { border-bottom: 1px solid var(--border); } }"}</style>
    </section>
  );
}

// ─── Red contrast marquee strip ───────────────────────────
function MarqueeStrip() {
  const items = ['AI Agents', 'WhatsApp Systems', 'Custom Dashboards', 'F&B Automation', 'Built in Days'];
  return (
    <div className="marquee-strip" role="presentation">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="marquee-item">{t}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Services preview ─────────────────────────────────────
function HomeServicesPreview({ setPage }) {
  const items = [
    {
      tag: '01',
      title: 'AI Operations Agent',
      blurb: 'An internal AI agent your staff query over WhatsApp, instant answers on SOPs, stock, sales, and daily ops across every outlet.',
      bullets: ['Staff-facing on WhatsApp', 'SOPs · stock · sales', 'Multi-outlet'],
      metric: 'Live deployment · Staff-facing · 24/7 uptime',
      visual: 'image',
    },
    {
      tag: '02',
      title: 'AI Automations Systems',
      blurb: 'Systems that think, decide, and execute. Your team focuses on what matters.',
      bullets: ['Autonomous agents', 'Workflow automation', 'API orchestration'],
      metric: 'Built on your existing stack · API-first',
      visual: 'automation',
    },
    {
      tag: '03',
      title: 'AI-Built Websites',
      blurb: 'Beautiful, fast sites shipped in days. AI speed, human taste.',
      bullets: ['Full design & build', 'AI copywriting', 'SEO-optimized'],
      metric: 'Design to live in under 10 days',
      visual: 'website',
    },
  ];

  return (
    <section style={{ padding: '40px 0 120px' }}>
      <div className="shell">
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 48, gap: 24, flexWrap: 'wrap'
        }}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <SectionTag>What We Do</SectionTag>
            </div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05,
              color: 'var(--fg)', fontWeight: 400
            }}>
              Modernize how your<br />business works<span style={{ color: 'var(--red)' }}>.</span>
            </h2>
          </div>
          <button className="btn btn-ghost" onClick={() => setPage('services')}>
            All Services →
          </button>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24
        }} className="gf-services-grid">
          {items.map((it, i) => (
            <div key={i} className="card svc-card" style={{
              padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column',
              minHeight: 460
            }}>
              {/* Visual region */}
              <div style={{
                position: 'relative', height: 220,
                background: '#0a0c14',
                borderBottom: '1px solid var(--border)',
                overflow: 'hidden'
              }}>
                {it.visual === 'image' && (
                  <picture>
                    <source srcSet="assets/ops-agent.webp" type="image/webp" />
                    <img
                      src="assets/ops-agent.jpg"
                      alt="A barista using an AI assistant on WhatsApp behind the counter"
                      className="svc-img"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center',
                        display: 'block'
                      }}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </picture>
                )}
                {it.visual === 'automation' && (
                  <picture>
                    <source srcSet="assets/automation.webp" type="image/webp" />
                    <img
                      src="assets/automation.jpg"
                      alt="Connected dashboards across phone, tablet, and laptop showing AI automation systems"
                      className="svc-img"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center',
                        display: 'block'
                      }}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </picture>
                )}
                {it.visual === 'website' && (
                  <picture>
                    <source srcSet="assets/web-build.webp" type="image/webp" />
                    <img
                      src="assets/web-build.jpg"
                      alt="A designer using a laptop showing an AI-built website with a bold dark hero"
                      className="svc-img"
                      style={{
                        position: 'absolute', inset: 0,
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'center',
                        display: 'block'
                      }}
                      loading="lazy"
                      decoding="async"
                      draggable="false"
                    />
                  </picture>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="g-mono" style={{
                  fontSize: 10, letterSpacing: 2, color: 'var(--red)',
                  marginBottom: 12
                }}>{it.tag}  ·  SERVICE</div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 20, fontWeight: 500, color: 'var(--fg)',
                  marginBottom: 12, letterSpacing: '-0.01em'
                }}>{it.title}</h3>
                <p style={{
                  fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.7,
                  marginBottom: 20
                }}>{it.blurb}</p>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {it.bullets.map(b => (
                      <span key={b} className="g-mono" style={{
                        fontSize: 10, letterSpacing: 1.4,
                        padding: '4px 10px', borderRadius: 999,
                        border: '1px solid var(--border-2)', color: 'var(--fg-dim)'
                      }}>{b}</span>
                    ))}
                  </div>
                  {it.metric && <div className="svc-metric">{it.metric}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{"@media (max-width: 980px) { .gf-services-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 640px) { .gf-services-grid { grid-template-columns: 1fr !important; } }"}</style>
    </section>
  );
}

// SVG-ish placeholder visuals (abstract, not branded)
function AutomationVisual() {
  return (
    <svg viewBox="0 0 400 240" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="aGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f57c4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4f57c4" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {/* nodes */}
      {[
        [80, 80], [200, 60], [320, 80],
        [120, 160], [280, 160], [200, 200]
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="22" fill="none" stroke="rgba(79,87,196,0.4)" strokeWidth="1" />
          <circle cx={x} cy={y} r="6" fill="url(#aGrad)" />
        </g>
      ))}
      {/* lines */}
      <g stroke="rgba(79,87,196,0.25)" strokeWidth="1" fill="none">
        <line x1="80" y1="80" x2="200" y2="60" />
        <line x1="200" y1="60" x2="320" y2="80" />
        <line x1="80" y1="80" x2="120" y2="160" />
        <line x1="320" y1="80" x2="280" y2="160" />
        <line x1="120" y1="160" x2="200" y2="200" />
        <line x1="280" y1="160" x2="200" y2="200" />
        <line x1="200" y1="60" x2="200" y2="200" strokeDasharray="3,4" />
      </g>
      <circle cx="200" cy="200" r="4" fill="#ff0a0a">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

function WebsiteVisual() {
  return (
    <svg viewBox="0 0 400 240" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      {/* Browser frame */}
      <rect x="60" y="40" width="280" height="170" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.14)" strokeWidth="1"/>
      <line x1="60" y1="62" x2="340" y2="62" stroke="rgba(255,255,255,0.10)" strokeWidth="1"/>
      <circle cx="75" cy="52" r="3" fill="#ff0a0a" opacity="0.6"/>
      <circle cx="86" cy="52" r="3" fill="rgba(255,255,255,0.18)"/>
      <circle cx="97" cy="52" r="3" fill="rgba(255,255,255,0.18)"/>

      {/* Content blocks */}
      <rect x="80" y="78" width="120" height="10" rx="2" fill="rgba(255,255,255,0.22)"/>
      <rect x="80" y="94" width="80" height="6" rx="2" fill="rgba(255,255,255,0.10)"/>
      <rect x="80" y="105" width="100" height="6" rx="2" fill="rgba(255,255,255,0.10)"/>

      <rect x="80" y="130" width="60" height="22" rx="11" fill="#ff0a0a" opacity="0.8"/>
      <rect x="148" y="130" width="60" height="22" rx="11" fill="none" stroke="rgba(255,255,255,0.24)" strokeWidth="1"/>

      <rect x="220" y="78" width="100" height="100" rx="4" fill="rgba(79,87,196,0.20)" stroke="rgba(79,87,196,0.30)" strokeWidth="1"/>
      <circle cx="270" cy="128" r="14" fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="1"/>

      <rect x="80" y="165" width="240" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="80" y="178" width="180" height="6" rx="2" fill="rgba(255,255,255,0.06)"/>
    </svg>
  );
}

// ─── Process strip ────────────────────────────────────────
function HomeProcess() {
  const steps = [
    { n: '01', t: 'Discover',  d: 'We learn your business. No assumptions.', ex: 'Full ops flow mapped in a single session, before a line of code is written.' },
    { n: '02', t: 'Architect', d: 'Design, map, prototype. Validate before we build.', ex: 'Prototyped the agent before any production code.' },
    { n: '03', t: 'Build',     d: 'AI-augmented delivery. Fast, without compromise.', ex: 'Our first live system went from scope to production in under two weeks.' },
    { n: '04', t: 'Train',     d: 'Launch, monitor, train. You own the system.', ex: 'Handed the team full control after launch.' },
  ];
  return (
    <section style={{ padding: '100px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="shell">
        <div style={{ marginBottom: 20 }}>
          <SectionTag>How We Work</SectionTag>
        </div>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.1,
          color: 'var(--fg)', fontWeight: 400, marginBottom: 56,
          maxWidth: 700
        }}>
          A system that drives growth<span style={{ color: 'var(--red)' }}>.</span>
        </h2>

        {/* Connected timeline */}
        <div className="proc-timeline gf-proc-line">
          {[12.5, 37.5, 62.5, 87.5].map((p, i) => (
            <span key={i} className="proc-node" style={{ left: p + '%' }} />
          ))}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0
        }} className="gf-process-grid">
          {steps.map((s, i) => (
            <div key={i} className="proc-cell" style={{
              padding: '30px 28px 32px 0',
              borderRight: i < 3 ? '1px solid var(--border)' : 'none',
              paddingLeft: i === 0 ? 0 : 28,
              position: 'relative'
            }}>
              <span className="proc-num">{s.n}</span>
              <div className="g-mono" style={{
                fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                marginBottom: 16
              }}>STEP {s.n}</div>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 22, fontWeight: 500, color: 'var(--fg)',
                marginBottom: 12
              }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: 'var(--fg-mute)', lineHeight: 1.7, marginBottom: 16 }}>{s.d}</p>
              <p style={{
                fontSize: 12.5, color: 'var(--fg-dim)', lineHeight: 1.6,
                fontStyle: 'italic', fontFamily: "'Instrument Serif', serif",
                paddingLeft: 12, borderLeft: '2px solid var(--red)'
              }}>{s.ex}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{"@media (max-width: 900px) { .gf-proc-line { display: none !important; } .gf-process-grid { grid-template-columns: 1fr 1fr !important; } .gf-process-grid > div { padding-left: 24px !important; padding-right: 24px !important; } .gf-process-grid > div:nth-child(2) { border-right: none !important; } } @media (max-width: 540px) { .gf-process-grid { grid-template-columns: 1fr !important; } .gf-process-grid > div { border-right: none !important; border-bottom: 1px solid var(--border); } }"}</style>
    </section>
  );
}

// ─── Case study (replaces fake testimonials) ──────────────
function HomeTestimonials() {
  const metrics = [
    { val: '16',    label: 'Staff Onboarded' },
    { val: '2',     label: 'Outlets Connected' },
    { val: '24/7',  label: 'Availability' },
    { val: '<2wk',  label: 'To Live' },
  ];
  return (
    <section style={{ padding: '120px 0' }}>
      <div className="shell">
        <div style={{ marginBottom: 20 }}>
          <SectionTag>Case Study</SectionTag>
        </div>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(32px, 4.4vw, 56px)', lineHeight: 1.1,
          color: 'var(--fg)', fontWeight: 400, marginBottom: 48
        }}>
          Proven in the field<span style={{ color: 'var(--red)' }}>.</span>
        </h2>

        <div className="case-card">
          <div style={{
            display: 'grid', gridTemplateColumns: '0.85fr 1.15fr'
          }} className="gf-case-grid">
            {/* Media */}
            <div style={{ position: 'relative', minHeight: 320, overflow: 'hidden' }} className="gf-case-media">
              <picture>
                <source srcSet="assets/ops-agent.webp" type="image/webp" />
                <img
                  src="assets/ops-agent.jpg"
                  alt="Staff using the Grafynt AI operations agent on WhatsApp"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy" decoding="async" draggable="false"
                />
              </picture>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(90deg, transparent 60%, var(--surface) 100%)'
              }} />
            </div>

            {/* Content */}
            <div style={{ padding: '40px 40px 0', display: 'flex', flexDirection: 'column' }} className="gf-case-body">
              <div className="g-mono" style={{
                fontSize: 10, letterSpacing: 2, color: 'var(--red)', marginBottom: 14,
                display: 'flex', alignItems: 'center', gap: 8
              }}>
                <span className="red-dot" style={{ width: 6, height: 6 }}></span>
                LIVE DEPLOYMENT
              </div>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 500,
                fontSize: 'clamp(24px, 2.6vw, 32px)', color: 'var(--fg)',
                letterSpacing: '-0.01em', marginBottom: 6
              }}>Client 01</h3>
              <div className="g-mono" style={{
                fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                textTransform: 'uppercase', marginBottom: 22
              }}>F&B · Coffee Retail · Indonesia</div>
              <p style={{
                fontSize: 15.5, color: 'var(--fg-mute)', lineHeight: 1.75,
                fontWeight: 300, marginBottom: 32, maxWidth: 520
              }}>
                An internal AI operations agent the team queries straight from WhatsApp —
                answering SOP questions, surfacing stock and sales, and keeping two outlets running on the
                same playbook. <span style={{ color: 'var(--fg)' }}>16 staff, one shared brain.</span>
              </p>
              <div className="case-metric-grid" style={{
                marginTop: 'auto', borderTop: '1px solid var(--border)'
              }}>
                {metrics.map((m, i) => (
                  <div key={i} className="case-metric">
                    <div className="g-serif" style={{
                      fontSize: 'clamp(26px, 3vw, 38px)', fontStyle: 'italic',
                      color: 'var(--fg)', marginBottom: 4
                    }}>{m.val}</div>
                    <div className="g-mono" style={{
                      fontSize: 9.5, letterSpacing: 1.6, color: 'var(--fg-faint)',
                      textTransform: 'uppercase'
                    }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{"@media (max-width: 760px) { .gf-case-grid { grid-template-columns: 1fr !important; } .gf-case-media { min-height: 220px !important; } .gf-case-body { padding: 32px 24px 0 !important; } }"}</style>
    </section>
  );
}

// ─── Final CTA banner with image ───────────────────────────
function HomeFinalCta({ setPage }) {
  return (
    <section style={{ padding: '80px 0 0' }}>
      <div className="shell">
        <div style={{
          position: 'relative',
          borderRadius: 24, overflow: 'hidden',
          background: 'linear-gradient(135deg, #14182f 0%, #0a0c14 100%)',
          border: '1px solid var(--border)',
          padding: '80px 48px',
          textAlign: 'center'
        }}>
          {/* glow */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse at 50% 100%, rgba(255,10,10,0.18) 0%, transparent 60%)'
          }} />
          <div style={{ position: 'relative' }}>
            <div className="g-mono" style={{
              fontSize: 10, letterSpacing: 3, color: 'var(--red)',
              marginBottom: 20, textTransform: 'uppercase'
            }}>● Take the first step</div>
            <h2 style={{
              fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
              fontSize: 'clamp(36px, 5.6vw, 72px)', lineHeight: 1.05,
              color: 'var(--fg)', fontWeight: 400, marginBottom: 20
            }}>
              Ready to scale your<br />business with clarity<span style={{ color: 'var(--red)' }}>?</span>
            </h2>
            <p style={{
              fontSize: 16, color: 'var(--fg-mute)', marginBottom: 28,
              maxWidth: 460, margin: '0 auto 28px', lineHeight: 1.6
            }}>
              No retainers. No bloated teams. Just systems that work.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => setPage('contact')}>Get in Touch</button>
              <button className="btn btn-ghost" onClick={() => setPage('pricing')}>See Pricing</button>
            </div>
            <div className="g-mono" style={{
              marginTop: 24, fontSize: 10, letterSpacing: 2,
              color: 'var(--fg-faint)', textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 8
            }}>
              <span className="red-dot" style={{ width: 5, height: 5 }}></span>
              Currently accepting 2 new projects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HomePage = HomePage;
