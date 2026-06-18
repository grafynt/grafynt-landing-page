/* global React, SectionTag, CtaStrip */
const TEAM = [
  {
    name: 'Jonathan',
    role: 'Founder & AI Architect',
    bio: 'Builds the strategy, designs the architecture, ships the product. One builder with AI as the force multiplier — direct access, no middlemen.',
    focus: ['AI Architecture', 'System Design', 'Strategy'],
    accent: 'var(--navy-glow)',
    img: 'assets/jonathan-bw.jpg',
  },
];

const VALUES = [
  { t: 'Ship Fast',    d: 'Speed is a feature. We optimize for rapid iteration and quick time-to-value.' },
  { t: 'Build Real',   d: 'No vaporware. Everything we deliver works in production, not just in demos.' },
  { t: 'Think Global', d: 'International clients, world-class standards, clear communication across time zones.' },
  { t: 'Stay Lean',    d: 'One builder, AI-augmented. No overhead, no dilution. Every project gets full focus.' },
];

function TeamPage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px' }}>
        <div className="shell">
          <div style={{ marginBottom: 20 }}>
            <SectionTag>The Team</SectionTag>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 56, alignItems: 'end'
          }} className="gf-team-hero">
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 200,
              fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 1.02,
              color: 'var(--fg)', letterSpacing: '-0.02em'
            }}>
              One builder.{' '}
              <span style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400
              }}>AI-augmented</span><span style={{ color: 'var(--red)' }}>.</span>
            </h1>
            <p style={{ fontSize: 16, color: 'var(--fg-mute)', lineHeight: 1.7 }}>
              Grafynt is run by one person with AI as the multiplier. No bloated teams,
              no junior handoffs. You work directly with the person who builds your system.
            </p>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="shell">
          <div style={{
            display: 'grid', gridTemplateColumns: 'min(520px, 100%)', gap: 24, justifyContent: 'center'
          }} className="gf-team-grid">
            {TEAM.map((p, i) => (
              <div key={i} className="card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Portrait region (image-slot for drop-in headshot) */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  background: `linear-gradient(135deg, ${i === 0 ? '#14182f' : '#1a1422'} 0%, #0a0c14 100%)`,
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border)'
                }}>
                  {p.img ? (
                    <img
                      src={p.img}
                      alt={p.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
                    />
                  ) : (
                    <image-slot
                      id={`team-${p.name.toLowerCase()}`}
                      shape="rect"
                      placeholder={`Drop ${p.name}'s portrait`}
                      style={{ width: '100%', height: '100%', display: 'block', background: 'transparent' }}
                    ></image-slot>
                  )}
                  {/* corner badge */}
                  <div style={{
                    position: 'absolute', top: 16, left: 16, zIndex: 5,
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '6px 12px 6px 10px',
                    background: 'rgba(10,12,20,0.7)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    borderRadius: 999,
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%', background: p.accent
                    }}></span>
                    <span className="g-mono" style={{
                      fontSize: 9, letterSpacing: 2, color: 'var(--fg-mute)',
                      textTransform: 'uppercase'
                    }}>0{i + 1} / Team</span>
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: 32 }}>
                  <h2 style={{
                    fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                    fontSize: 36, color: 'var(--fg)', fontWeight: 400,
                    marginBottom: 6, letterSpacing: '-0.01em'
                  }}>
                    {p.name}<span style={{ color: 'var(--red)' }}>.</span>
                  </h2>
                  <div className="g-mono" style={{
                    fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                    textTransform: 'uppercase', marginBottom: 18
                  }}>{p.role}</div>
                  <p style={{
                    fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.7,
                    marginBottom: 24
                  }}>{p.bio}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {p.focus.map(f => (
                      <span key={f} className="g-mono" style={{
                        fontSize: 10, letterSpacing: 1.4,
                        padding: '4px 10px', borderRadius: 999,
                        border: '1px solid var(--border-2)',
                        color: 'var(--fg-dim)'
                      }}>{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .gf-team-hero, .gf-team-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          }
        `}</style>
      </section>

      {/* Principles */}
      <section style={{ padding: '80px 0', background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="shell">
          <div style={{ marginBottom: 20 }}>
            <SectionTag>Principles</SectionTag>
          </div>
          <h2 style={{
            fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
            fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.1,
            color: 'var(--fg)', fontWeight: 400, marginBottom: 48, maxWidth: 700
          }}>
            How we operate<span style={{ color: 'var(--red)' }}>.</span>
          </h2>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0,
            borderTop: '1px solid var(--border-2)'
          }} className="gf-values-grid">
            {VALUES.map((v, i) => (
              <div key={i} style={{
                padding: '32px 28px',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute', top: -1, left: 28,
                  width: 28, height: 2, background: 'var(--red)'
                }} />
                <div className="g-mono" style={{
                  fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                  marginBottom: 16, marginTop: 12
                }}>0{i + 1}</div>
                <h3 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 22, fontWeight: 500, color: 'var(--fg)',
                  marginBottom: 12, letterSpacing: '-0.01em'
                }}>{v.t}<span style={{ color: 'var(--red)' }}>.</span></h3>
                <p style={{ fontSize: 13.5, color: 'var(--fg-mute)', lineHeight: 1.7 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .gf-values-grid { grid-template-columns: 1fr 1fr !important; }
            .gf-values-grid > div:nth-child(2) { border-right: none !important; }
            .gf-values-grid > div:nth-child(1),
            .gf-values-grid > div:nth-child(2) { border-bottom: 1px solid var(--border); }
          }
          @media (max-width: 540px) {
            .gf-values-grid { grid-template-columns: 1fr !important; }
            .gf-values-grid > div { border-right: none !important; border-bottom: 1px solid var(--border) !important; }
          }
        `}</style>
      </section>

      <CtaStrip setPage={setPage} line="Work directly with the builder" />
    </div>
  );
}

window.TeamPage = TeamPage;
