/* global React */
const { useState, useEffect, useRef } = React;

// ─── Logo ────────────────────────────────────────────────────
function GrafyntLogo({ size = 22 }) {
  // Real brand logo (white "GRAFYNT." wordmark with red dot).
  // Cropped to content; aspect ratio ~4.92:1.
  return (
    <picture>
      <source srcSet="assets/logo.webp" type="image/webp" />
      <img
        src="assets/logo.png"
        alt="Grafynt"
        style={{ height: size, width: 'auto', display: 'block' }}
        draggable="false"
      />
    </picture>
  );
}

// ─── Section Tag (kicker line) ──────────────────────────────
function SectionTag({ children }) {
  return <div className="section-tag">{children}</div>;
}

// ─── Animated capability chips around hero portrait ─────────
const HERO_CHIPS = [
  { text: 'AI Automations',   top: '12%', left: '4%',  anim: 'float-a 7s ease-in-out infinite' },
  { text: 'Agentic Systems',  top: '28%', left: '18%', anim: 'float-b 8s ease-in-out infinite' },
  { text: 'WhatsApp Bots',    top: '58%', left: '6%',  anim: 'float-c 9s ease-in-out infinite' },
  { text: 'Landing Pages',   top: '74%', left: '22%', anim: 'float-a 7.5s ease-in-out infinite' },
  { text: 'AI Websites',      top: '18%', right: '8%', anim: 'float-c 8.5s ease-in-out infinite' },
  { text: 'Workflow Design',  top: '40%', right: '4%', anim: 'float-b 7s ease-in-out infinite' },
  { text: 'Chatbots',         top: '64%', right: '14%',anim: 'float-a 8s ease-in-out infinite' },
  { text: 'Team Training',   top: '82%', right: '32%',anim: 'float-c 9.5s ease-in-out infinite' },
];

function HeroChips() {
  return (
    <>
      {HERO_CHIPS.map((c, i) => (
        <span
          key={i}
          className="chip"
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            animation: c.anim,
            animationDelay: (i * 0.3) + 's',
          }}
        >{c.text}</span>
      ))}
    </>
  );
}

// ─── Nav ─────────────────────────────────────────────────────
const PAGE_HREF = {
  home: '/', services: '/services.html', pricing: '/pricing.html',
  team: '/team.html', contact: '/contact.html'
};

function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const items = [
    { id: 'home',     label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'pricing',  label: 'Pricing' },
    { id: 'team',     label: 'Team' },
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 900,
      background: 'rgba(10,12,20,0.72)',
      backdropFilter: 'blur(18px)',
      WebkitBackdropFilter: 'blur(18px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 32px',
        height: 68, display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center', gap: 24
      }}>
        {/* left nav */}
        <div style={{ display: 'flex', gap: 28 }} className="gf-hide-md">
          {items.slice(0, 2).map(it => (
            <NavLink key={it.id} id={it.id} active={page === it.id} setPage={setPage}>{it.label}</NavLink>
          ))}
        </div>

        {/* logo center */}
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); setPage('home'); }}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          aria-label="Grafynt, Home"
        >
          <GrafyntLogo size={20} />
        </a>

        {/* right nav */}
        <div style={{ display: 'flex', gap: 28, justifyContent: 'flex-end', alignItems: 'center' }} className="gf-hide-md">
          {items.slice(2).map(it => (
            <NavLink key={it.id} id={it.id} active={page === it.id} setPage={setPage}>{it.label}</NavLink>
          ))}
          <a
            className="btn btn-nav"
            href="/contact.html"
            onClick={(e) => { e.preventDefault(); setPage('contact'); }}
          >Get in Touch</a>
        </div>

        {/* mobile burger (placeholder, simple) */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none', border: 'none', color: 'var(--fg)',
            fontSize: 22, cursor: 'pointer', gridColumn: '3 / 4', justifySelf: 'end'
          }}
          className="gf-mob-btn"
        >☰</button>
      </div>

      {open && (
        <div style={{ padding: '8px 24px 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {[...items, { id: 'contact', label: 'Get in Touch' }].map(it => (
            <a
              key={it.id}
              href={PAGE_HREF[it.id]}
              onClick={(e) => { e.preventDefault(); setPage(it.id); setOpen(false); }}
              style={{
                padding: '12px 0', textAlign: 'left',
                borderBottom: '1px solid var(--border)',
                color: page === it.id ? 'var(--fg)' : 'var(--fg-dim)',
                fontSize: 15, fontFamily: "'Outfit', sans-serif",
                textDecoration: 'none', display: 'block'
              }}
            >{it.label}</a>
          ))}
        </div>
      )}

      <style>{"@media (max-width: 900px) { .gf-mob-btn { display: block !important; } }"}</style>
    </nav>
  );
}

function NavLink({ id, active, setPage, children }) {
  return (
    <a
      href={PAGE_HREF[id]}
      onClick={(e) => { e.preventDefault(); setPage(id); }}
      style={{
        cursor: 'pointer',
        fontFamily: "'Outfit', sans-serif",
        fontSize: 13, fontWeight: active ? 500 : 400,
        color: active ? 'var(--fg)' : 'var(--fg-dim)',
        letterSpacing: 0.3,
        padding: '6px 0',
        position: 'relative',
        textDecoration: 'none',
        transition: 'color 0.2s'
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
      onMouseLeave={e => e.currentTarget.style.color = active ? 'var(--fg)' : 'var(--fg-dim)'}
    >
      {children}
      {active && <span style={{
        position: 'absolute', bottom: -2, left: '50%', transform: 'translateX(-50%)',
        width: 4, height: 4, borderRadius: '50%', background: 'var(--red)'
      }} />}
    </a>
  );
}

// ─── CTA Strip (reused at bottom of pages) ──────────────────
function CtaStrip({ setPage, line = 'Ready to build something intelligent' }) {
  return (
    <section style={{ padding: '120px 0 80px' }}>
      <div className="shell" style={{ textAlign: 'center' }}>
        <h2 style={{
          fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
          fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 400,
          lineHeight: 1.05, color: 'var(--fg)', marginBottom: 32
        }}>
          {line}<span style={{ color: 'var(--red)' }}>.</span>
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => setPage('contact')}>Get in Touch</button>
          <button className="btn btn-ghost" onClick={() => setPage('services')}>View Services</button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer style={{
      paddingTop: 60, marginTop: 40,
      borderTop: '1px solid var(--border)',
      background: 'var(--bg)',
      overflow: 'hidden'
    }}>
      <div className="shell" style={{ paddingBottom: 48 }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 48,
          marginBottom: 56
        }} className="gf-footer-grid">
          <div>
            <div style={{ marginBottom: 18 }}>
              <GrafyntLogo size={22} />
            </div>
            <p style={{ color: 'var(--fg-dim)', fontSize: 14, lineHeight: 1.7, maxWidth: 320 }}>
              We help companies discover, build, and deploy AI systems that move the needle.
              Lean team. Global delivery.
            </p>
          </div>

          <FooterCol title="Pages" items={[
            ['Home', 'home'], ['Services', 'services'], ['Pricing', 'pricing'], ['Team', 'team']
          ]} setPage={setPage} />

          <FooterCol title="Services" items={[
            ['AI Automations', 'services'], ['AI Websites', 'services'],
            ['Agentic Systems', 'services'], ['Chatbots', 'services']
          ]} setPage={setPage} />

          <div>
            <div className="g-mono" style={{
              fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
              textTransform: 'uppercase', marginBottom: 16
            }}>Contact</div>
            <a href="mailto:grafynt@gmail.com" style={{
              color: 'var(--fg)', fontSize: 15, textDecoration: 'none',
              borderBottom: '1px solid var(--red)', paddingBottom: 2
            }}>grafynt@gmail.com</a>
            <div style={{ marginTop: 14 }}>
              <a href="https://wa.me/6281319190388" target="_blank" rel="noopener noreferrer" style={{
                color: 'var(--fg)', fontSize: 15, textDecoration: 'none',
                borderBottom: '1px solid var(--red)', paddingBottom: 2
              }}>+62 813-1919-0388</a>
            </div>
            <div style={{ color: 'var(--fg-dim)', fontSize: 13, marginTop: 14, lineHeight: 1.7 }}>
              Indonesia<br />Serving globally
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: 12
        }}>
          <div className="g-mono" style={{ fontSize: 10, color: 'var(--fg-faint)', letterSpacing: 2 }}>
            © 2026 GRAFYNT<span style={{ color: 'var(--red)' }}>.</span> ALL RIGHTS RESERVED.
          </div>
          <div className="g-mono" style={{ fontSize: 10, color: 'var(--fg-faint)', letterSpacing: 2 }}>
            BUILT WITH AI <span className="red-dot" style={{ width: 4, height: 4, marginLeft: 6 }}></span>
          </div>
        </div>
      </div>

      {/* Giant wordmark band */}
      <div style={{
        position: 'relative',
        padding: '40px 0 30px',
        textAlign: 'center',
        background: 'linear-gradient(to bottom, transparent, rgba(20,24,82,0.18))'
      }}>
        <div className="wordmark-giant">
          GRAFYNT<span style={{
            display: 'inline-block', width: '0.18em', height: '0.18em',
            borderRadius: '50%', background: 'var(--red)',
            verticalAlign: 'baseline', marginLeft: '0.04em',
            transform: 'translateY(-0.06em)'
          }}></span>
        </div>
      </div>

      <style>{"@media (max-width: 900px) { .gf-footer-grid { grid-template-columns: 1fr 1fr !important; } } @media (max-width: 540px) { .gf-footer-grid { grid-template-columns: 1fr !important; } }"}</style>
    </footer>
  );
}

function FooterCol({ title, items, setPage }) {
  return (
    <div>
      <div className="g-mono" style={{
        fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
        textTransform: 'uppercase', marginBottom: 16
      }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([label, target]) => (
          <a
            key={label}
            href={PAGE_HREF[target] || '#'}
            onClick={(e) => { e.preventDefault(); setPage(target); }}
            style={{
              textAlign: 'left',
              color: 'var(--fg-mute)', fontSize: 14, cursor: 'pointer',
              fontFamily: "'Outfit', sans-serif", padding: 0,
              textDecoration: 'none', display: 'block'
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--fg)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--fg-mute)'}
          >{label}</a>
        ))}
      </div>
    </div>
  );
}

// ─── expose to other scripts ────────────────────────────────
Object.assign(window, {
  GrafyntLogo, SectionTag, HeroChips, Nav, Footer, CtaStrip
});
