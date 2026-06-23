/* global React */
const { useState: useStateInv, useMemo: useMemoInv, useEffect: useEffectInv } = React;

const PLAN_MAP = {
  'ai-websites': {
    name: 'AI-Built Websites',
    price: '$1,799',
    tag: '01',
    blurb: 'A high-end web presence, designed and built at AI speed.',
    includes: [
      'Landing or multi-page website',
      'AI-assisted design and copy',
      'SEO and GEO baseline',
      'Deployed in under 10 days',
    ],
  },
  'ai-automation': {
    name: 'AI Automation Systems',
    price: '$3,599',
    tag: '02',
    blurb: 'Custom agentic systems that automate your operations end to end.',
    includes: [
      'Discovery and system design',
      'Multi-step AI workflows',
      'Integration with your stack',
      'Direct founder access',
    ],
  },
  'ai-agent': {
    name: 'AI Operations Agent',
    price: '$5,399',
    tag: '03',
    blurb: 'A 24/7 AI agent handling chats, bookings, and FAQs across your channels.',
    includes: [
      'WhatsApp and web chat agent',
      'Bookings, orders and FAQs',
      'Trained on your business',
      'Monitoring and analytics',
    ],
  },
};

function InvoicePage({ setPage }) {
  const planId = useMemoInv(() => {
    try { return new URLSearchParams(window.location.search).get('plan') || 'ai-websites'; }
    catch (e) { return 'ai-websites'; }
  }, []);

  const plan = PLAN_MAP[planId] || PLAN_MAP['ai-websites'];

  const [form, setForm] = useStateInv({ name: '', email: '', social: '' });
  const [touched, setTouched] = useStateInv(false);
  const [sent, setSent] = useStateInv(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const valid = form.name.trim() && /\S+@\S+\.\S+/.test(form.email.trim());

  const handleSubmit = () => {
    setTouched(true);
    if (!valid) return;

    // Notify Grafynt via mailto (opens mail client pre-filled)
    const subject = encodeURIComponent('Invoice Request — ' + plan.name + ' — ' + form.name);
    const body = encodeURIComponent(
      'New invoice request\n\nPackage: ' + plan.name + ' (' + plan.price + ')\n\nClient name: ' + form.name + '\nClient email: ' + form.email + '\nSocial: ' + (form.social || 'not provided') + '\n\nPlease send the invoice to ' + form.email + '.'
    );
    // Open silently in background tab so user stays on confirmation
    const a = document.createElement('a');
    a.href = 'mailto:grafynt@gmail.com?subject=' + subject + '&body=' + body;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (sent) {
    return <ConfirmationScreen form={form} plan={plan} setPage={setPage} />;
  }

  return (
    <section style={{ padding: '72px 0 120px', minHeight: '80vh' }}>
      <div className="shell" style={{ maxWidth: 960 }}>

        {/* Back link */}
        <button
          onClick={() => setPage('pricing')}
          style={{
            background: 'none', border: 'none', color: 'var(--fg-dim)',
            fontSize: 13, fontFamily: "'Geist Mono', monospace", letterSpacing: 1.5,
            textTransform: 'uppercase', cursor: 'pointer', padding: 0,
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 16, lineHeight: 1 }}>&#8592;</span> Pricing
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="gf-inv-layout">

          {/* LEFT — Selected plan summary */}
          <div>
            <div className="g-mono" style={{
              fontSize: 10, letterSpacing: 2.5, color: 'var(--red)',
              textTransform: 'uppercase', marginBottom: 18
            }}>Selected package</div>

            <div className="card" style={{ padding: 32, position: 'relative', overflow: 'hidden' }}>
              {/* Subtle corner accent */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: 80, height: 80,
                background: 'radial-gradient(circle at top right, rgba(255,10,10,0.08), transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div className="g-mono" style={{ fontSize: 9, letterSpacing: 2, color: 'var(--fg-faint)', textTransform: 'uppercase', marginBottom: 14 }}>{plan.tag}</div>
              <h2 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 300,
                fontSize: 28, lineHeight: 1.1, letterSpacing: '-0.02em',
                color: 'var(--fg)', margin: '0 0 6px',
              }}>{plan.name}</h2>
              <div style={{
                fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                fontSize: 38, color: 'var(--fg)', marginBottom: 18,
              }}>{plan.price}</div>
              <p style={{ fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.65, marginBottom: 24 }}>{plan.blurb}</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.includes.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <span style={{ color: 'var(--red)', fontSize: 13, marginTop: 1, flexShrink: 0 }}>&#10003;</span>
                    <span style={{ fontSize: 14, color: 'var(--fg-dim)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What happens next */}
            <div style={{ marginTop: 20, padding: '20px 24px', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--bg-2)' }}>
              <div className="g-mono" style={{ fontSize: 9.5, letterSpacing: 2, color: 'var(--fg-faint)', textTransform: 'uppercase', marginBottom: 12 }}>What happens next</div>
              {[
                'You submit your details below',
                'We prepare your invoice within 24 hours',
                'It lands in your inbox, ready to sign',
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: i < 2 ? 12 : 0 }}>
                  <span style={{
                    width: 22, height: 22, borderRadius: '50%',
                    border: '1px solid var(--border-2)',
                    fontSize: 10, color: 'var(--fg-dim)', fontFamily: "'Geist Mono', monospace",
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{i + 1}</span>
                  <span style={{ fontSize: 13.5, color: 'var(--fg-dim)', lineHeight: 1.5, paddingTop: 2 }}>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Intake form */}
          <div>
            <div className="g-mono" style={{
              fontSize: 10, letterSpacing: 2.5, color: 'var(--fg-faint)',
              textTransform: 'uppercase', marginBottom: 18
            }}>Your details</div>

            <div className="card" style={{ padding: 32 }}>
              <h1 style={{
                fontFamily: "'Outfit', sans-serif", fontWeight: 200,
                fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.08,
                letterSpacing: '-0.02em', color: 'var(--fg)', margin: '0 0 8px',
              }}>
                Get your{' '}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>invoice</span>
                <span style={{ color: 'var(--red)' }}>.</span>
              </h1>
              <p style={{ fontSize: 14, color: 'var(--fg-mute)', lineHeight: 1.6, marginBottom: 28 }}>
                Fill in your details and we will send you a tailored invoice within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 8 }}>
                    Full Name <span style={{ color: 'var(--red)' }}>*</span>
                  </label>
                  <input
                    className="input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => set('name', e.target.value)}
                    style={touched && !form.name.trim() ? { borderColor: 'var(--red)' } : {}}
                  />
                  {touched && !form.name.trim() && (
                    <span style={{ fontSize: 11, color: 'var(--red)', marginTop: 5, display: 'block' }}>Name is required</span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 8 }}>
                    Email <span style={{ color: 'var(--red)' }}>*</span>
                  </label>
                  <input
                    className="input"
                    type="email"
                    placeholder="you@yourcompany.com"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    style={touched && !/\S+@\S+\.\S+/.test(form.email.trim()) ? { borderColor: 'var(--red)' } : {}}
                  />
                  {touched && !/\S+@\S+\.\S+/.test(form.email.trim()) && (
                    <span style={{ fontSize: 11, color: 'var(--red)', marginTop: 5, display: 'block' }}>A valid email is required</span>
                  )}
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 11, fontFamily: "'Geist Mono', monospace", letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--fg-dim)', marginBottom: 8 }}>
                    Instagram / WhatsApp / Social
                  </label>
                  <input
                    className="input"
                    placeholder="@yourhandle or +62..."
                    value={form.social}
                    onChange={e => set('social', e.target.value)}
                  />
                </div>

                <button
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 8, fontSize: 15, padding: '16px 24px' }}
                >
                  Request My Invoice &#8594;
                </button>

                <p style={{ fontSize: 12, color: 'var(--fg-faint)', textAlign: 'center', lineHeight: 1.6 }}>
                  We will send your invoice to your email within 24 hours.
                  No spam, no commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{"@media (max-width: 720px) { .gf-inv-layout { grid-template-columns: 1fr !important; } }"}</style>
    </section>
  );
}

function ConfirmationScreen({ form, plan, setPage }) {
  return (
    <section style={{ padding: '80px 0 120px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="shell" style={{ maxWidth: 600, textAlign: 'center' }}>
        {/* Check mark */}
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          border: '1.5px solid var(--border-2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 32px', fontSize: 26, color: 'var(--red)',
        }}>&#10003;</div>

        <div className="g-mono" style={{
          fontSize: 10, letterSpacing: 2.5, color: 'var(--red)',
          textTransform: 'uppercase', marginBottom: 16
        }}>Request received</div>

        <h1 style={{
          fontFamily: "'Outfit', sans-serif", fontWeight: 200,
          fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: 1.05,
          letterSpacing: '-0.02em', color: 'var(--fg)', margin: '0 0 16px',
        }}>
          Your invoice is{' '}
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>on its way</span>
          <span style={{ color: 'var(--red)' }}>.</span>
        </h1>

        <p style={{ fontSize: 16, color: 'var(--fg-mute)', lineHeight: 1.7, marginBottom: 12 }}>
          We received your request for <strong style={{ color: 'var(--fg)' }}>{plan.name}</strong> ({plan.price}).
        </p>
        <p style={{ fontSize: 15, color: 'var(--fg-dim)', lineHeight: 1.7, marginBottom: 40 }}>
          Your invoice will be sent to{' '}
          <span style={{ color: 'var(--fg)', borderBottom: '1px solid var(--border-2)', paddingBottom: 1 }}>{form.email}</span>{' '}
          within 24 hours.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={'https://wa.me/6281319190388?text=' + encodeURIComponent('Hi Grafynt! I just requested an invoice for ' + plan.name + '. My name is ' + form.name + '.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Follow up on WhatsApp
          </a>
          <button className="btn btn-ghost" onClick={() => setPage('home')}>Back to home</button>
        </div>
      </div>
    </section>
  );
}

window.InvoicePage = InvoicePage;
