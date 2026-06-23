/* global React, ReactDOM */
const { useState, useEffect } = React;

// ─── URL <-> page mapping ────────────────────────────────
const PAGE_TO_URL = {
  home:     '/',
  services: '/services.html',
  pricing:  '/pricing.html',
  team:     '/team.html',
  contact:  '/contact.html',
  invoice:  '/invoice.html',
};
const URL_TO_PAGE = {
  '/':              'home',
  '/index.html':    'home',
  '/services.html': 'services',
  '/pricing.html':  'pricing',
  '/team.html':     'team',
  '/contact.html':  'contact',
  '/invoice.html':  'invoice',
};

function detectInitialPage() {
  const dp = document.body.dataset.page;
  if (dp && PAGE_TO_URL[dp]) return dp;
  const path = location.pathname.replace(/\/+$/, '') || '/';
  return URL_TO_PAGE[path] || 'home';
}

window.grafyntNavigate = null;

// ─── ERROR BOUNDARY ─────────────────────────────────────
class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { err: null }; }
  static getDerivedStateFromError(e) { return { err: e }; }
  componentDidCatch(e, info) {
    if (window._grafyntShowError) {
      window._grafyntShowError(e.stack + '\n\nComponent stack:\n' + info.componentStack);
    }
  }
  render() { return this.state.err ? null : this.props.children; }
}

// ─── CONTACT PAGE ────────────────────────────────────────
function ContactPage({ setPage }) {
  const SectionTag = window.SectionTag;
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', company: '', budget: '', message: '' });
  };

  return (
    <section style={{ padding: '80px 0 120px' }}>
      <div className="shell">
        <div style={{ marginBottom: 20 }}>
          {SectionTag && <SectionTag>Get in Touch</SectionTag>}
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 64
        }} className="gf-contact-grid">
          <div>
            <h1 style={{
              fontFamily: "'Outfit', sans-serif", fontWeight: 200,
              fontSize: 'clamp(36px, 5.4vw, 80px)', lineHeight: 1.02,
              color: 'var(--fg)', letterSpacing: '-0.02em', marginBottom: 20
            }}>
              Let's build{' '}
              <span style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400
              }}>together</span><span style={{ color: 'var(--red)' }}>.</span>
            </h1>
            <p style={{
              fontSize: 16, color: 'var(--fg-mute)', lineHeight: 1.7,
              marginBottom: 40, maxWidth: 460
            }}>
              Have a project in mind? Tell us about it. We'll respond within 24 hours
              with a clear plan and timeline.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 460 }}>
              {[
                { l: 'Email',         v: 'grafynt@gmail.com',   href: 'mailto:grafynt@gmail.com' },
                { l: 'WhatsApp',      v: '+62 813-1919-0388',   href: 'https://wa.me/6281319190388' },
                { l: 'Response Time', v: 'Within 24 hours' },
                { l: 'Based In',      v: 'Indonesia · Serving Global' },
              ].map((c, i) => (
                <div key={i} style={{
                  padding: '18px 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16
                }}>
                  <span className="g-mono" style={{
                    fontSize: 10, color: 'var(--fg-faint)', letterSpacing: 2,
                    textTransform: 'uppercase'
                  }}>{c.l}</span>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontSize: 14, color: 'var(--fg)', fontWeight: 400,
                        textDecoration: 'none', borderBottom: '1px solid var(--red)', paddingBottom: 2
                      }}
                    >{c.v}</a>
                  ) : (
                    <span style={{ fontSize: 14, color: 'var(--fg)', fontWeight: 400 }}>{c.v}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            padding: 36, background: 'var(--surface)',
            border: '1px solid var(--border)', borderRadius: 18,
            minHeight: 480
          }}>
            {sent ? (
              <div style={{
                height: '100%', minHeight: 400,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                animation: 'fadeIn 0.4s ease'
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(255,10,10,0.12)',
                  border: '1px solid rgba(255,10,10,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--red)', fontSize: 24, marginBottom: 20
                }}>✓</div>
                <h3 style={{
                  fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                  fontSize: 32, color: 'var(--fg)', marginBottom: 8, fontWeight: 400
                }}>Message sent<span style={{ color: 'var(--red)' }}>.</span></h3>
                <p style={{ fontSize: 14, color: 'var(--fg-mute)' }}>
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="g-mono" style={{
                  fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                  textTransform: 'uppercase', marginBottom: 4
                }}>Project Inquiry</div>

                {[
                  { k: 'name',    p: 'Your Name *' },
                  { k: 'email',   p: 'Email Address *' },
                  { k: 'company', p: 'Company / Brand' },
                ].map(f => (
                  <input
                    key={f.k}
                    className="input"
                    placeholder={f.p}
                    value={form[f.k]}
                    onChange={e => setForm(p => ({ ...p, [f.k]: e.target.value }))}
                  />
                ))}

                <div className="g-mono" style={{
                  fontSize: 10, letterSpacing: 2, color: 'var(--fg-faint)',
                  textTransform: 'uppercase', marginTop: 8
                }}>Budget Range</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['$1.5K', '$3K', '$5K+', 'Custom'].map(b => (
                    <button
                      key={b}
                      onClick={() => setForm(p => ({ ...p, budget: b }))}
                      style={{
                        padding: '8px 16px', borderRadius: 999,
                        fontSize: 12,
                        border: '1px solid ' + (form.budget === b ? 'var(--red)' : 'var(--border-2)'),
                        background: form.budget === b ? 'rgba(255,10,10,0.10)' : 'transparent',
                        color: form.budget === b ? 'var(--fg)' : 'var(--fg-dim)',
                        cursor: 'pointer',
                        fontFamily: "'Outfit', sans-serif",
                        transition: 'all 0.2s'
                      }}
                    >{b}</button>
                  ))}
                </div>

                <textarea
                  className="input"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                  style={{ resize: 'vertical', marginTop: 8 }}
                />

                <button
                  onClick={submit}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}
                >Send Inquiry</button>
              </div>
            )}
          </div>
        </div>

        <style>{"@media (max-width: 900px) { .gf-contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }"}</style>
      </div>
    </section>
  );
}

// ─── APP ROOT ───────────────────────────────────────────
function App() {
  const [page, setPageRaw] = useState(detectInitialPage);

  const navigate = (newPage) => {
    if (!PAGE_TO_URL[newPage]) {
      window.location.assign(newPage);
      return;
    }
    if (newPage === page) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    const url = PAGE_TO_URL[newPage];
    history.pushState({ page: newPage }, '', url);
    setPageRaw(newPage);
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = TITLE_MAP[newPage] || document.title;
  };
  window.grafyntNavigate = navigate;

  useEffect(() => {
    const onPop = () => setPageRaw(detectInitialPage());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const setPage = navigate;

  // Resolve window globals at render time so we don't depend on script execution order
  const Nav = window.Nav;
  const Footer = window.Footer;
  const HomePage = window.HomePage;
  const ServicesPage = window.ServicesPage;
  const TeamPage = window.TeamPage;
  const PricingPage = window.PricingPage;
  const InvoicePage = window.InvoicePage;

  let PageComp;
  switch (page) {
    case 'services': PageComp = ServicesPage ? <ServicesPage setPage={setPage} /> : null; break;
    case 'team':     PageComp = TeamPage     ? <TeamPage     setPage={setPage} /> : null; break;
    case 'pricing':  PageComp = PricingPage  ? <PricingPage  setPage={setPage} /> : null; break;
    case 'contact':  PageComp = <ContactPage setPage={setPage} />; break;
    case 'invoice':  PageComp = InvoicePage  ? <InvoicePage  setPage={setPage} /> : null; break;
    case 'home':
    default:         PageComp = HomePage     ? <HomePage     setPage={setPage} /> : null;
  }

  return (
    <div data-screen-label={page}>
      {Nav && <Nav page={page} setPage={setPage} />}
      <main key={page} style={{ animation: 'fadeIn 0.35s ease' }}>
        {PageComp}
      </main>
      {Footer && <Footer setPage={setPage} />}
    </div>
  );
}

const TITLE_MAP = {
  home:     'Grafynt · AI Agency, AI Automations, Agentic Systems & AI-Built Websites',
  services: 'Services, AI Automations & AI-Built Websites · Grafynt',
  pricing:  'Pricing, AI Agency Packages · Grafynt',
  team:     'Team, Meet Grafynt · AI Agency',
  contact:  'Contact, Get in Touch · Grafynt',
  invoice:  'Invoice · Grafynt',
};

// Wait for all window components to be ready before mounting React.
// Babel Standalone fetches external .jsx files concurrently, so execution
// order is not guaranteed — app.jsx can run before home.jsx sets window.HomePage.
function mountApp() {
  if (!window.Nav || !window.Footer || !window.HomePage ||
      !window.ServicesPage || !window.TeamPage ||
      !window.PricingPage || !window.InvoicePage) {
    setTimeout(mountApp, 20);
    return;
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<ErrorBoundary><App /></ErrorBoundary>);
}
mountApp();
