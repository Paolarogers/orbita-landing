import { Link } from 'react-router-dom'
import { ENGINES } from '../data/engines'

// Reusable coming-soon placeholder used for Field, Case, Build
function ComingSoonEngine({ engine }) {
  const otherEngines = ENGINES.filter(e => e.key !== engine.key)
  return (
    <div>
      {/* Hero */}
      <section style={{ background: engine.color_light, borderBottom: `1px solid ${engine.color}22` }}>
        <div className="container" style={{ padding: '80px 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: `1px solid ${engine.color}33`, borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: engine.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: engine.color }}>{engine.icon}</div>
            <span style={{ fontSize: 12, fontWeight: 700, color: engine.color }}>{engine.name}</span>
            <span className="badge badge-soon" style={{ marginLeft: 4 }}>{engine.status_label}</span>
          </div>
          <h1 className="h1" style={{ marginBottom: 20, maxWidth: 640 }}>
            {engine.tagline}
          </h1>
          <p className="body-lg" style={{ maxWidth: 540, marginBottom: 40 }}>
            {engine.description}
          </p>

          {/* Waitlist form */}
          <div style={{ background: '#fff', border: '1px solid #E8E0D5', borderRadius: 12, padding: 28, maxWidth: 420 }}>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Join the waitlist</div>
            <div style={{ fontSize: 13, color: '#6B6560', marginBottom: 18 }}>Be the first to know when {engine.name} launches.</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input type="email" placeholder="your@email.com"
                style={{ flex: 1, padding: '10px 14px', border: '1px solid #E8E0D5', borderRadius: 8, fontSize: 13, fontFamily: 'inherit', outline: 'none' }} />
              <button className="btn-primary" style={{ padding: '10px 18px', fontSize: 13, background: engine.color }}>
                Notify me
              </button>
            </div>
            <div style={{ fontSize: 11, color: '#B0A898', marginTop: 10 }}>
              No spam. One email when we launch.
            </div>
          </div>
        </div>
      </section>

      {/* What it will include */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 12 }}>WHAT'S COMING</div>
            <h2 className="h2">Built for how {engine.industries[0]} businesses actually work</h2>
          </div>
          <div className="grid-3">
            {engine.highlights.map(h => (
              <div key={h} style={{ background: '#F7F4F0', borderRadius: 10, padding: 20 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: engine.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: engine.color, marginBottom: 12 }}>✓</div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#1A1A1A', lineHeight: 1.5 }}>{h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ background: '#F7F4F0', borderTop: '1px solid #E8E0D5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="label" style={{ marginBottom: 12 }}>WHO IT'S FOR</div>
            <h2 className="h2">Industries</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {engine.industries.map(ind => (
              <div key={ind} style={{ background: '#fff', border: '1px solid #E8E0D5', borderRadius: 20, padding: '8px 18px', fontSize: 13, fontWeight: 500, color: '#1A1A1A' }}>{ind}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Other engines */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="label" style={{ marginBottom: 12 }}>THE PLATFORM</div>
            <h2 className="h2">Other Orbita engines</h2>
          </div>
          <div className="grid-2" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            {otherEngines.slice(0, 4).map(e => (
              <Link key={e.key} to={e.path} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: 20, background: '#F7F4F0', borderRadius: 12, border: '1px solid #E8E0D5', color: '#1A1A1A', transition: 'border-color 0.15s' }}
                onMouseEnter={el => el.currentTarget.style.borderColor = e.color}
                onMouseLeave={el => el.currentTarget.style.borderColor = '#E8E0D5'}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: e.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: e.color, flexShrink: 0 }}>{e.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{e.name}</div>
                  <div style={{ fontSize: 12, color: '#6B6560' }}>{e.tagline}</div>
                </div>
                <span className={`badge badge-${e.status === 'live' ? 'live' : e.status === 'beta' ? 'beta' : 'soon'}`} style={{ marginLeft: 'auto', flexShrink: 0 }}>{e.status_label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Full Care engine page
function CareEnginePage() {
  const engine = ENGINES.find(e => e.key === 'care')
  const otherEngines = ENGINES.filter(e => e.key !== 'care')

  return (
    <div>
      {/* Hero */}
      <section style={{ background: engine.color_light, borderBottom: `1px solid ${engine.color}22` }}>
        <div className="container" style={{ padding: '80px 24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#fff', border: `1px solid ${engine.color}33`, borderRadius: 20, padding: '6px 14px', marginBottom: 24 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: engine.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: engine.color }}>{engine.icon}</div>
            <span style={{ fontSize: 12, fontWeight: 700, color: engine.color }}>{engine.name}</span>
            <span className="badge badge-live" style={{ marginLeft: 4 }}>Live Now</span>
          </div>
          <h1 className="h1" style={{ marginBottom: 20, maxWidth: 700 }}>
            The operating system for aesthetics & beauty businesses
          </h1>
          <p className="body-lg" style={{ maxWidth: 560, marginBottom: 40 }}>
            One adaptive platform for spas, med spas, lash studios, hair salons, and massage therapists. Your system looks and works exactly like your business — because you configure it that way.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={engine.app_url} target="_blank" rel="noreferrer">
              <button className="btn-primary" style={{ background: engine.color_dark, padding: '13px 28px' }}>
                Enter the platform →
              </button>
            </a>
            <Link to="/pricing">
              <button className="btn-outline">See pricing</button>
            </Link>
          </div>
          <div style={{ marginTop: 24, fontSize: 12, color: '#9A918A' }}>
            Demo: paola@orbitacare.com / orbitacare2026
          </div>
        </div>
      </section>

      {/* Active modules */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E8E0D5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="label" style={{ marginBottom: 12 }}>ADAPTIVE MODULE SYSTEM</div>
            <h2 className="h2">Select your services. The system adapts.</h2>
            <p className="body" style={{ marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
              You are not forced into one industry template. Select the modules your business actually uses — injectables, lashes, massage, retail, memberships — and the platform reconfigures forms, workflows, and compliance rules automatically.
            </p>
          </div>
          <div className="grid-3" style={{ gap: 14 }}>
            {engine.modules.map(m => (
              <div key={m} style={{ background: '#F7F4F0', borderRadius: 10, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: engine.color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 500 }}>{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three layers */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 12 }}>HOW IT WORKS</div>
            <h2 className="h2">Three layers. One system.</h2>
          </div>
          <div className="grid-3">
            {[
              { num: '1', color: '#1A3A6E', bg: '#EBF2F8', title: 'Operations', subtitle: 'Run your business', items: ['Clients & appointments', 'Visits & clinical notes', 'Digital consent forms', 'Checkout & receipts', 'Intake wizard', 'Client portal'] },
              { num: '2', color: '#6A2A8A', bg: '#F5EBF8', title: 'Growth', subtitle: 'Grow your business', items: ['Lead pipeline (8 channels)', 'Reactivation center (30/60/90d)', 'VIP hub & loyalty tiers', 'Referral program', 'ROI per campaign', 'Financial intelligence'] },
              { num: '3', color: '#B87840', bg: '#FDF3E3', title: 'Marketplace', subtitle: 'Everything else you need', items: ['Bonanza Quick Loans', 'Zivo Insurance', 'HC Media marketing', 'Optional services only', 'Clear from subscriptions', 'One click away'] },
            ].map(layer => (
              <div key={layer.num} style={{ border: `1px solid ${layer.color}22`, borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ background: layer.bg, padding: '20px 22px', borderBottom: `2px solid ${layer.color}` }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: layer.color, letterSpacing: '0.08em', marginBottom: 6 }}>LAYER {layer.num}</div>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 400, color: '#1A1A1A', marginBottom: 2 }}>{layer.title}</div>
                  <div style={{ fontSize: 13, color: '#6B6560', fontStyle: 'italic' }}>{layer.subtitle}</div>
                </div>
                <div style={{ padding: '20px 22px', background: '#fff' }}>
                  {layer.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, fontSize: 13, color: '#4A4A4A' }}>
                      <span style={{ color: layer.color, flexShrink: 0, fontSize: 11 }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key features */}
      <section style={{ background: '#F7F4F0', borderTop: '1px solid #E8E0D5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="label" style={{ marginBottom: 12 }}>WHAT MAKES IT DIFFERENT</div>
            <h2 className="h2">Built for how these businesses actually operate</h2>
          </div>
          <div className="grid-2">
            {[
              { title: 'Consent blocking for clinical services', body: 'Injectables and laser services cannot be started until the client signs the digital consent form. The system enforces this — it is not optional.', icon: '◎' },
              { title: 'Three-mode interface', body: 'Operations mode for front desk and providers. Growth mode for business owners. Management mode for financial oversight. Every role sees only what they need.', icon: '◈' },
              { title: 'Bilingual — completely', body: 'Full Spanish and English toggle throughout the entire app. Every label, alert, message, and report. Providers work in Spanish, owners read reports in English.', icon: '▲' },
              { title: 'Reactivation is automatic', body: 'The system identifies clients who haven\'t returned in 30, 60, or 90 days and calculates the revenue potential. One click to contact them.', icon: '↺' },
              { title: 'Financial health score', body: 'A 0–100 score built from net margin, revenue trend, fixed cost ratio, client activity, and goal attainment. Alerts the HC team when it drops below 40.', icon: '◉' },
              { title: 'Marketplace is separate', body: 'Bonanza, Zivo, and HC Media services are never confused with the software subscription. Clear language: "This service is not included in your subscription."', icon: '◆' },
            ].map(feat => (
              <div key={feat.title} style={{ background: '#fff', border: '1px solid #E8E0D5', borderRadius: 12, padding: 24, display: 'flex', gap: 16 }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: engine.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: engine.color, flexShrink: 0 }}>{feat.icon}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, color: '#1A1A1A' }}>{feat.title}</div>
                  <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.6 }}>{feat.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="label" style={{ marginBottom: 12 }}>WHO IT'S FOR</div>
            <h2 className="h2">Works for every aesthetics business</h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', marginBottom: 48 }}>
            {engine.industries.map(ind => (
              <div key={ind} style={{ background: '#F7F4F0', border: '1px solid #E8E0D5', borderRadius: 20, padding: '8px 18px', fontSize: 13, fontWeight: 500 }}>{ind}</div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: '#1A1A1A', borderRadius: 16, padding: '48px 40px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 32, fontWeight: 400, color: '#fff', marginBottom: 12 }}>
              Ready to run your business without chaos?
            </h2>
            <p style={{ fontSize: 16, color: '#9A918A', marginBottom: 28, maxWidth: 420, margin: '0 auto 28px' }}>
              The full system is $499/month. Less than $17 a day. Replaces 5 tools.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={engine.app_url} target="_blank" rel="noreferrer">
                <button className="btn-primary" style={{ padding: '14px 32px', fontSize: 15, background: engine.color }}>
                  Enter Orbita Care →
                </button>
              </a>
              <Link to="/pricing">
                <button className="btn-outline" style={{ color: '#9A918A', borderColor: '#333', padding: '14px 28px', fontSize: 15 }}>
                  See pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other engines */}
      <section style={{ background: '#F7F4F0', borderTop: '1px solid #E8E0D5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div className="label" style={{ marginBottom: 12 }}>THE PLATFORM</div>
            <h2 className="h2">Other Orbita engines</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
            {otherEngines.map(e => (
              <Link key={e.key} to={e.path}
                style={{ display: 'block', padding: 18, background: '#fff', borderRadius: 12, border: '1px solid #E8E0D5', color: '#1A1A1A', transition: 'border-color 0.15s' }}
                onMouseEnter={el => el.currentTarget.style.borderColor = e.color}
                onMouseLeave={el => el.currentTarget.style.borderColor = '#E8E0D5'}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: e.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: e.color, marginBottom: 10 }}>{e.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{e.name}</div>
                <div style={{ fontSize: 11, color: '#9A918A', lineHeight: 1.4 }}>{e.tagline}</div>
                <div style={{ marginTop: 8 }}>
                  <span className={`badge badge-${e.status === 'live' ? 'live' : e.status === 'beta' ? 'beta' : 'soon'}`}>{e.status_label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Main export — routes to correct page based on engine key
export default function EnginePage({ engineKey }) {
  const engine = ENGINES.find(e => e.key === engineKey)
  if (!engine) return <div>Engine not found</div>
  if (engineKey === 'care') return <CareEnginePage />
  return <ComingSoonEngine engine={engine} />
}
