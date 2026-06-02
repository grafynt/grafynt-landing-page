/* global React, SectionTag, CtaStrip */
const SERVICES = [
  {
    id: 'operations',
    tag: '01',
    title: 'AI Operations Agent',
    blurb: 'A 24/7 AI agent that handles customer chats, bookings, orders, and FAQs across WhatsApp and your channels, trained on your business, with a human handoff anytime.',
    features: [
      '24/7 AI chat agent on WhatsApp & web',
      'Handles bookings, orders & FAQs',
      'Trained on your products & policies',
      'Seamless handoff to a human anytime',
      'Monitoring, analytics & reporting',
      'Team training included',
    ],
    outcomes: [
      { stat: '80%',  label: 'Inquiries auto-resolved' },
      { stat: '24/7', label: 'Always-on coverage' },
      { stat: '<1m',  label: 'Average response time' },
    ]
  },
  {
    id: 'automations',
    tag: '02',
    title: 'AI Automation Systems',
    blurb: 'Custom agentic systems that automate your operations end-to-end. Multi-step AI workflows that think, decide, and execute, so your team focuses on what matters.',
    features: [
      'Discovery + system design',
      'Multi-step autonomous AI workflows',
      'Integration with your existing stack',
      'API & system orchestration',
      'Eval, monitoring & documentation',
      'Direct founder access',
    ],
    outcomes: [
      { stat: '10x',  label: 'Faster operations' },
      { stat: '90%',  label: 'Manual work removed' },
      { stat: '24/7', label: 'Always-on systems' },
    ]
  },
  {
    id: 'websites',
    tag: '03',
    title: 'AI-Built Websites',
    blurb: 'Beautiful, fast sites designed and built at the speed of AI, with the taste of a human creative director. Engineered to rank on Google and get quoted by AI search.',
    features: [
      'Full design & build in under 10 days',
      'AI-powered content & copywriting',
      'SEO & GEO-optimized from day one',
      'Responsive, performance-first code',
      'Landing pages, sites & dashboards',
      '2 rounds of revisions',
    ],
    outcomes: [
      { stat: '< 10d', label: 'Average delivery' },
      { stat: '98+',   label: 'Lighthouse score' },
      { stat: '100%',  label: 'On-brand, on-spec' },
    ]
  },
];

function ServicesPage({ setPage }) {
  const [active, setActive] = React.useState('operations');
  const svc = SERVICES.find(s => s.id === active);

  return (
    <div>
      <div className="build-section">
        <img src="assets/build-bg.png" alt="" aria-hidden="true" className="build-bg-img" />
        <div className="build-frost" />
      {/* Hero */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="shell">
          <div style={{ marginBottom: 20 }}>
            <SectionTag>Services</SectionTag>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 56, alignItems: 'end'
          }} className="gf-svc-hero-grid">
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 200,
              fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 1.02,
              color: 'var(--fg)', letterSpacing: '-0.02em'
            }}>
              <span style={{ color: 'var(--fg-mute)' }}>What</span>{' '}
              <span style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400
              }}>we build</span><span style={{ color: 'var(--red)' }}>.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'var(--fg-mute)', lineHeight: 1.6 }}>
              Three services. Real systems that earn their keep.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ padding: '20px 0 100px' }}>
        <div className="shell">
          <div style={{
            display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap'
          }}>
            {SERVICES.map(s => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                style={{
                  padding: '10px 18px',
                  background: active === s.id ? 'var(--surface-2)' : 'transparent',
                  border: '1px solid ' + (active === s.id ? 'var(--border-3)' : 'var(--border)'),
                  borderRadius: 999,
                  color: active === s.id ? 'var(--fg)' : 'var(--fg-dim)',
                  cursor: 'pointer',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 13, fontWeight: active === s.id ? 500 : 400,
                  letterSpacing: 0.3,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  transition: 'all 0.2s'
                }}
              >
                <span className="g-mono" style={{
                  fontSize: 10, color: 'var(--red)', letterSpacing: 1.4
                }}>{s.tag}</span>
                {s.title}
              </button>
            ))}
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48,
            animation: 'fadeIn 0.35s ease'
          }} className="gf-svc-grid" key={svc.id}>
            <div>
              <div className="g-mono" style={{
                fontSize: 11, letterSpacing: 3, color: 'var(--red)',
                marginBottom: 20
              }}>{svc.tag}  ·  {svc.title.toUpperCase()}</div>
              <h2 style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                fontSize: 'clamp(28px, 3.4vw, 44px)', lineHeight: 1.1,
                color: 'var(--fg)', fontWeight: 400, marginBottom: 24
              }}>
                {svc.title.split(' & ')[0]}<span style={{ color: 'var(--red)' }}>.</span>
              </h2>
              <p style={{ fontSize: 16, color: 'var(--fg-mute)', lineHeight: 1.8, marginBottom: 36 }}>
                {svc.blurb}
              </p>

              {/* outcomes */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                marginBottom: 32, borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)'
              }}>
                {svc.outcomes.map((o, i) => (
                  <div key={i} style={{
                    padding: '22px 14px',
                    borderRight: i < 2 ? '1px solid var(--border)' : 'none'
                  }}>
                    <div className="g-serif" style={{
                      fontSize: 30, fontStyle: 'italic', color: 'var(--fg)',
                      marginBottom: 4
                    }}>{o.stat}</div>
                    <div className="g-mono" style={{
                      fontSize: 9, letterSpacing: 1.6, color: 'var(--fg-faint)',
                      textTransform: 'uppercase'
                    }}>{o.label}</div>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary" onClick={() => setPage('contact')}>
                Get in Touch →
              </button>
            </div>

            <div>
              <div className="g-mono" style={{
                fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                textTransform: 'uppercase', marginBottom: 16
              }}>What's included</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {svc.features.map((f, i) => (
                  <div key={i} style={{
                    padding: '18px 0',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex', alignItems: 'center', gap: 16,
                    animation: `slideIn 0.4s ease ${i * 0.04}s both`
                  }}>
                    <span className="g-mono" style={{
                      fontSize: 11, color: 'var(--fg-faint)',
                      letterSpacing: 1.4, minWidth: 24
                    }}>0{i + 1}</span>
                    <span style={{ flex: 1, fontSize: 14, color: 'var(--fg)' }}>{f}</span>
                    <span className="red-dot" style={{ width: 5, height: 5 }}></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .gf-svc-hero-grid, .gf-svc-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          }
        `}</style>
      </section>
      </div>

      {/* SEO + GEO playbook */}
      <FoundFirst />

      <CtaStrip setPage={setPage} line="Let's build the system you need" />
    </div>
  );
}

// ─── SEO + GEO playbook (replaces capability matrix) ─────
function FoundFirst() {
  const tactics = [
    {
      n: '01',
      kind: 'SEO',
      t: 'Technical Foundations',
      d: 'Schema markup, sitemap, fast Core Web Vitals, and a crawlable structure Google actually loves.',
      tags: ['Schema.org', 'Core Vitals', 'Sitemap']
    },
    {
      n: '02',
      kind: 'SEO',
      t: 'Keyword & Intent Mapping',
      d: 'We map what your buyers search, build pages around real intent, and earn rankings that convert.',
      tags: ['Intent Map', 'Topical Authority', 'Content Plan']
    },
    {
      n: '03',
      kind: 'GEO',
      t: 'AI Search Optimization',
      d: 'Structured, citation-worthy content that ChatGPT, Perplexity, and Google AI Overviews can quote.',
      tags: ['LLM-Readable', 'Citations', 'AI Overviews']
    },
    {
      n: '04',
      kind: 'GEO',
      t: 'Authority & Trust Signals',
      d: 'Knowledge graph alignment, brand mentions, and answer-grade copy that AI engines surface first.',
      tags: ['Entity SEO', 'Brand Mentions', 'Reviews']
    },
  ];
  return (
    <section style={{ padding: '90px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="shell">
        <div style={{ marginBottom: 20 }}>
          <SectionTag>Get Found First</SectionTag>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 48, alignItems: 'end',
          marginBottom: 48
        }} className="gf-found-hero">
          <h2 style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
            fontSize: 'clamp(30px, 4vw, 52px)', lineHeight: 1.05,
            color: 'var(--fg)', fontWeight: 400
          }}>
            Rank #1 on Google.<br />
            Get quoted by AI<span style={{ color: 'var(--red)' }}>.</span>
          </h2>
          <p style={{ fontSize: 15, color: 'var(--fg-mute)', lineHeight: 1.65 }}>
            Every site we build is engineered for two audiences:
            classic search engines and the new generation of AI answer engines.
          </p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1,
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 14, overflow: 'hidden'
        }} className="gf-found-grid">
          {tactics.map((tac, i) => (
            <div key={i} style={{
              background: 'var(--bg)', padding: '28px 24px',
              display: 'flex', flexDirection: 'column', gap: 14,
              minHeight: 280
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="g-mono" style={{
                  fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)'
                }}>{tac.n}</span>
                <span className="g-mono" style={{
                  fontSize: 9, letterSpacing: 2,
                  padding: '3px 8px', borderRadius: 999,
                  border: '1px solid ' + (tac.kind === 'GEO' ? 'rgba(255,10,10,0.4)' : 'rgba(79,87,196,0.4)'),
                  color: tac.kind === 'GEO' ? 'var(--red)' : 'var(--navy-glow)',
                  background: tac.kind === 'GEO' ? 'rgba(255,10,10,0.06)' : 'rgba(79,87,196,0.06)'
                }}>{tac.kind}</span>
              </div>
              <h3 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 18, color: 'var(--fg)', fontWeight: 500,
                letterSpacing: '-0.01em'
              }}>{tac.t}</h3>
              <p style={{
                fontSize: 13.5, color: 'var(--fg-mute)', lineHeight: 1.65,
                flex: 1
              }}>{tac.d}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                {tac.tags.map(tg => (
                  <span key={tg} className="g-mono" style={{
                    fontSize: 9, letterSpacing: 1.2,
                    padding: '3px 8px', borderRadius: 999,
                    border: '1px solid var(--border-2)',
                    color: 'var(--fg-dim)'
                  }}>{tg}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metric strip */}
        <div style={{
          marginTop: 24,
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          border: '1px solid var(--border)', borderRadius: 14,
          background: 'var(--bg)',
          overflow: 'hidden'
        }} className="gf-found-stats">
          {[
            { v: '100/100', l: 'Lighthouse SEO score' },
            { v: 'Top 3',   l: 'Avg. ranking in 90 days' },
            { v: 'AI-Cited', l: 'On ChatGPT & Perplexity' },
          ].map((s, i) => (
            <div key={i} style={{
              padding: '20px 24px',
              borderRight: i < 2 ? '1px solid var(--border)' : 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16
            }}>
              <span className="g-serif" style={{
                fontSize: 24, fontStyle: 'italic', color: 'var(--fg)'
              }}>{s.v}</span>
              <span className="g-mono" style={{
                fontSize: 10, letterSpacing: 1.6, color: 'var(--fg-faint)',
                textTransform: 'uppercase', textAlign: 'right'
              }}>{s.l}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .gf-found-hero { grid-template-columns: 1fr !important; gap: 16px !important; }
          .gf-found-grid { grid-template-columns: 1fr 1fr !important; }
          .gf-found-stats { grid-template-columns: 1fr !important; }
          .gf-found-stats > div { border-right: none !important; border-bottom: 1px solid var(--border); }
          .gf-found-stats > div:last-child { border-bottom: none; }
        }
        @media (max-width: 540px) {
          .gf-found-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

window.ServicesPage = ServicesPage;
