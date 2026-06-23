/* global React, SectionTag, CtaStrip */
const TIERS = [
  {
    id: 'ai-websites',
    name: 'AI-Built Websites',
    price: '$1,799',
    blurb: 'A high-end web presence, designed and built at AI speed.',
    features: [
      'Landing or multi-page website',
      'AI-assisted design & copy',
      'Responsive + SEO & GEO baseline',
      'Deployed in under 10 days',
      '2 rounds of revisions',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    id: 'ai-agent',
    name: 'AI Operations Agent',
    price: '$5,399',
    blurb: 'A 24/7 AI agent handling chats, bookings, and FAQs across your channels.',
    features: [
      'WhatsApp & web chat agent',
      'Bookings, orders & FAQs',
      'Trained on your business',
      'Handoff to a human anytime',
      'Monitoring & analytics',
      'Team training included',
    ],
    cta: 'Get Started',
    featured: true,
  },
  {
    id: 'ai-automation',
    name: 'AI Automation Systems',
    price: '$3,599',
    blurb: 'Custom agentic systems that automate your operations end-to-end.',
    features: [
      'Discovery + system design',
      'Multi-step AI workflows',
      'Integration with your stack',
      'API & system orchestration',
      'Eval, monitoring & docs',
      'Direct founder access',
    ],
    cta: 'Book a Call',
    featured: false,
  },
];

const FAQ = [
  {
    q: 'How fast can you actually deliver?',
    a: 'Most websites ship in under 10 days. Automations and agentic systems usually scope to 2 to 4 weeks depending on integrations. We give a concrete date in the discovery call, and we hit it.'
  },
  {
    q: 'Do you work with non-technical founders?',
    a: 'Yes, most of our clients are. We handle the technical decisions, explain the trade-offs in plain language, and train your team to run the system after launch.'
  },
  {
    q: 'What happens after launch?',
    a: 'Every project includes monitoring setup, documentation, and a training session. We also offer optional retainers for ongoing optimization and new feature work.'
  },
  {
    q: 'Can I combine packages?',
    a: 'Absolutely. The most common combo is a website plus an AI assistant for the site. We scope and price that as a custom package after the discovery call.'
  },
  {
    q: 'Do you take equity / revenue share?',
    a: 'For the right strategic fit, yes. Get in touch and tell us about the project. We evaluate case by case.'
  },
];

function PricingPage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="shell">
          <div style={{ marginBottom: 20 }}>
            <SectionTag>Pricing</SectionTag>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'end'
          }} className="gf-pricing-hero">
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 200,
              fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 1.02,
              color: 'var(--fg)', letterSpacing: '-0.02em'
            }}>
              Built for every{' '}
              <span style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400
              }}>stage of growth</span><span style={{ color: 'var(--red)' }}>.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'var(--fg-mute)', lineHeight: 1.7 }}>
              From early-clarity to full-scale execution, our services are designed
              to support your business as it evolves. Transparent pricing, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="shell">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16,
            alignItems: 'stretch'
          }} className="gf-tier-grid">
            {TIERS.map((t, i) => (
              <PricingCard key={i} tier={t} setPage={setPage} />
            ))}
          </div>
          <p style={{
            textAlign: 'center', marginTop: 32,
            fontSize: 13, color: 'var(--fg-dim)'
          }}>
            Need something custom? <button
              onClick={() => setPage('contact')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--fg)', borderBottom: '1px solid var(--red)',
                paddingBottom: 1, fontFamily: 'inherit', fontSize: 13
              }}
            >Get in touch</button> and we'll scope a package for you.
          </p>
        </div>

        <style>{"@media (max-width: 900px) { .gf-pricing-hero { grid-template-columns: 1fr !important; gap: 24px !important; } .gf-tier-grid { grid-template-columns: 1fr !important; } }"}</style>
      </section>

      {/* What's NOT included / comparison */}
      <ComparisonTable />

      {/* FAQ */}
      <section className="faq-section" style={{ padding: '100px 0' }}>
        <img src="assets/faq-bg.png" alt="" aria-hidden="true" className="faq-bg-img" />
        <div className="faq-frost" />
        <div className="shell">
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 56, alignItems: 'start'
          }} className="gf-faq-grid">
            <div>
              <div style={{ marginBottom: 20 }}>
                <SectionTag>FAQ</SectionTag>
              </div>
              <h2 style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1.1,
                color: 'var(--fg)', fontWeight: 400, marginBottom: 16
              }}>
                Common questions<span style={{ color: 'var(--red)' }}>.</span>
              </h2>
              <p style={{ fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.7 }}>
                Still curious? Reach out. We're happy to walk through your project on a call.
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border)' }}>
              {FAQ.map((f, i) => <FaqItem key={i} item={f} />)}
            </div>
          </div>
        </div>

        <style>{"@media (max-width: 900px) { .gf-faq-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }"}</style>
      </section>

      <CtaStrip setPage={setPage} line="Pick a starting point" />
    </div>
  );
}

function PricingCard({ tier, setPage }) {
  return (
    <div style={{
      position: 'relative',
      padding: 32,
      borderRadius: 18,
      background: tier.featured
        ? 'linear-gradient(180deg, rgba(255,10,10,0.06) 0%, var(--surface) 60%)'
        : 'var(--surface)',
      border: '1px solid ' + (tier.featured ? 'rgba(255,10,10,0.3)' : 'var(--border)'),
      display: 'flex', flexDirection: 'column', gap: 20,
      transition: 'all 0.3s',
      minHeight: 480,
    }}>
      {tier.featured && (
        <div style={{
          position: 'absolute', top: -1, right: 24,
          padding: '5px 14px',
          background: 'var(--red)', color: 'var(--white)',
          fontFamily: "'Geist Mono', monospace",
          fontSize: 10, letterSpacing: 2, textTransform: 'uppercase',
          borderRadius: '0 0 6px 6px'
        }}>Most Popular</div>
      )}

      {/* icon stub */}
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: tier.featured ? 'rgba(255,10,10,0.12)' : 'rgba(79,87,196,0.16)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid ' + (tier.featured ? 'rgba(255,10,10,0.3)' : 'rgba(79,87,196,0.3)')
      }}>
        <div style={{
          width: 14, height: 14, borderRadius: 4,
          background: tier.featured ? 'var(--red)' : 'var(--navy-glow)'
        }}></div>
      </div>

      <div>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 22, fontWeight: 500, color: 'var(--fg)',
          marginBottom: 6
        }}>{tier.name}</h3>
        <p style={{ fontSize: 13.5, color: 'var(--fg-mute)', lineHeight: 1.6 }}>{tier.blurb}</p>
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
        <span style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 52, color: 'var(--fg)', lineHeight: 1
        }}>{tier.price}</span>
        <span className="g-mono" style={{
          fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
          textTransform: 'uppercase'
        }}>Project</span>
      </div>

      <div style={{ height: 1, background: 'var(--border)' }} />

      <div style={{ flex: 1 }}>
        <div className="g-mono" style={{
          fontSize: 9, letterSpacing: 2, color: 'var(--fg-faint)',
          textTransform: 'uppercase', marginBottom: 14
        }}>What's included</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {tier.features.map(f => (
            <div key={f} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              fontSize: 13.5, color: 'var(--fg-mute)', lineHeight: 1.5
            }}>
              <span style={{
                marginTop: 6,
                width: 5, height: 5, borderRadius: '50%',
                background: tier.featured ? 'var(--red)' : 'var(--navy-glow)',
                flexShrink: 0
              }}></span>
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <a
        href={'invoice.html?plan=' + tier.id}
        className={tier.featured ? 'btn btn-primary' : 'btn btn-ghost'}
        style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}
      >{tier.cta}</a>
    </div>
  );
}

function FaqItem({ item }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '22px 0',
          background: 'transparent', border: 'none', cursor: 'pointer',
          textAlign: 'left',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 16, color: 'var(--fg)',
          fontFamily: "'Outfit', sans-serif",
          fontSize: 17, fontWeight: 400, letterSpacing: '-0.005em'
        }}
      >
        <span>{item.q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: '50%',
          border: '1px solid var(--border-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          color: 'var(--fg-mute)', fontSize: 16,
          transition: 'all 0.2s',
          transform: open ? 'rotate(45deg)' : 'rotate(0)'
        }}>+</span>
      </button>
      {open && (
        <div style={{
          paddingBottom: 22, paddingRight: 44,
          fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.7,
          animation: 'fadeIn 0.3s ease'
        }}>{item.a}</div>
      )}
    </div>
  );
}

// ─── Comparison table (rows = features, cols = tiers) ────
function ComparisonTable() {
  const rows = [
    ['Discovery + strategy call',        true,  true,  true],
    ['Website design & build',           true,  false, false],
    ['SEO & GEO optimization',           true,  false, false],
    ['24/7 AI chat agent',               false, true,  true],
    ['Bookings, orders & FAQs',          false, true,  false],
    ['Multi-step AI workflows',          false, true,  true],
    ['Integration with your stack',      false, true,  true],
    ['API & system orchestration',       false, false, true],
    ['Eval, monitoring & docs',          false, true,  true],
    ['Team training session',            false, true,  true],
    ['Direct founder access',            false, true,  true],
  ];
  const cols = ['AI-Built Websites', 'AI Operations Agent', 'AI Automation Systems'];
  return (
    <section style={{ padding: '60px 0 40px', background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="shell">
        <div style={{ marginBottom: 20 }}>
          <SectionTag>Compare Packages</SectionTag>
        </div>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(28px, 3.4vw, 40px)', lineHeight: 1.1,
          color: 'var(--fg)', fontWeight: 400, marginBottom: 32
        }}>
          What's in each<span style={{ color: 'var(--red)' }}>.</span>
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse', minWidth: 600
          }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-2)' }}>
                <th style={{
                  padding: '14px 0', textAlign: 'left',
                  fontFamily: "'Geist Mono', monospace",
                  fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                  textTransform: 'uppercase', fontWeight: 400
                }}>Feature</th>
                {cols.map((c, i) => (
                  <th key={c} style={{
                    padding: '14px 16px', textAlign: 'center',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 13, color: 'var(--fg)',
                    fontWeight: i === 1 ? 600 : 400,
                    background: i === 1 ? 'rgba(255,10,10,0.04)' : 'transparent',
                    width: '20%'
                  }}>{c}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{
                    padding: '14px 0', fontSize: 14, color: 'var(--fg-mute)'
                  }}>{r[0]}</td>
                  {r.slice(1).map((v, ci) => (
                    <td key={ci} style={{
                      padding: '14px 16px', textAlign: 'center',
                      background: ci === 1 ? 'rgba(255,10,10,0.04)' : 'transparent',
                    }}>
                      {v === true ? (
                        <span style={{
                          display: 'inline-block',
                          width: 7, height: 7, borderRadius: '50%',
                          background: ci === 1 ? 'var(--red)' : 'var(--navy-glow)'
                        }}></span>
                      ) : (
                        <span style={{
                          display: 'inline-block',
                          width: 7, height: 7, borderRadius: '50%',
                          border: '1px solid var(--border-3)',
                          background: 'transparent'
                        }}></span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

window.PricingPage = PricingPage;
