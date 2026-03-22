import { Link } from 'react-router-dom'
import { ENGINES } from '../data/engines'

export default function HomePage() {
  return (
    <div>

      {/* ── HERO ── */}
      <section style={{ padding: '80px 0 80px', background: '#fff', borderBottom: '1px solid #E8E0D5' }}>
        <div className="container">
          <div style={{ maxWidth: 760 }}>
            <div style={{ marginBottom: 32 }}>
              <img src="/orbita_logo.png" alt="Orbita" style={{ height: 64, objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#F7F4F0', border: '1px solid #E8E0D5', borderRadius: 20, padding: '6px 14px', marginBottom: 28 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#2A7A5A' }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: '#2A7A5A' }}>Orbita Care is live</span>
              <span style={{ fontSize: 12, color: '#9A918A' }}>· Field, Case, Build, Pet coming soon</span>
            </div>
            <h1 className="h1" style={{ marginBottom: 24 }}>
              Run your business.<br />Grow your revenue.
            </h1>
            <p className="body-lg" style={{ maxWidth: 560, marginBottom: 40 }}>
              Orbita is a modular operating system for service businesses. One platform. Five engines. Every business type covered — from aesthetics to construction, grooming to tax preparation.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/care">
                <button className="btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
                  See Orbita Care →
                </button>
              </Link>
              <Link to="/pricing">
                <button className="btn-outline" style={{ padding: '13px 28px', fontSize: 15 }}>
                  View pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE LAYERS ── */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="label" style={{ marginBottom: 12 }}>HOW ORBITA WORKS</div>
            <h2 className="h2">Not software. A system.</h2>
            <p className="body" style={{ marginTop: 12, maxWidth: 480, margin: '12px auto 0' }}>
              Every Orbita engine runs on the same three-layer architecture. Operations runs the day. Growth drives revenue. Marketplace connects the rest.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                num: '1', color: '#1A3A6E', bg: '#EBF2F8',
                title: 'Operations', subtitle: '"Run your business"',
                body: 'Clients, appointments, visits, consent forms, checkout, receipts, and client portal. Everything your team needs to get through the day — organized, fast, and bilingual.',
                items: ['Client profiles & history', 'Appointments & calendar', 'Digital consent forms', 'Checkout & receipt generation'],
              },
              {
                num: '2', color: '#6A2A8A', bg: '#F5EBF8',
                title: 'Growth', subtitle: '"Grow your business"',
                body: 'Lead pipeline, reactivation center, VIP hub, referral tracking, ROI per campaign, and financial intelligence. The layer that turns clients into revenue.',
                items: ['Lead pipeline (8 channels)', 'Reactivation center', 'VIP & loyalty tiers', 'Financial health score'],
              },
              {
                num: '3', color: '#B87840', bg: '#FDF3E3',
                title: 'Marketplace', subtitle: '"Everything else you need"',
                body: 'Financing through Bonanza. Insurance through Zivo. Marketing through HC Media. Optional services available when the business is ready. Always separate from the subscription.',
                items: ['Bonanza Quick Loans', 'Zivo Insurance', 'HC Media marketing', 'Optional — separate agreements'],
              },
            ].map(layer => (
              <div key={layer.num} style={{ border: `1px solid ${layer.color}22`, borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ background: layer.bg, padding: '24px 24px 20px', borderBottom: `2px solid ${layer.color}` }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: layer.color, letterSpacing: '0.1em', marginBottom: 8 }}>LAYER {layer.num}</div>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 400, color: '#1A1A1A', marginBottom: 2 }}>{layer.title}</div>
                  <div style={{ fontSize: 13, color: '#6B6560', fontStyle: 'italic' }}>{layer.subtitle}</div>
                </div>
                <div style={{ padding: '22px 24px', background: '#fff' }}>
                  <p style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.7, marginBottom: 18 }}>{layer.body}</p>
                  {layer.items.map(item => (
                    <div key={item} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 13, color: '#4A4A4A', alignItems: 'flex-start' }}>
                      <span style={{ color: layer.color, flexShrink: 0, marginTop: 1 }}>✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENGINES ── */}
      <section style={{ background: '#F7F4F0', borderTop: '1px solid #E8E0D5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="label" style={{ marginBottom: 12 }}>THE ENGINES</div>
            <h2 className="h2">One platform. Five engines.</h2>
            <p className="body" style={{ marginTop: 12, maxWidth: 500, margin: '12px auto 0' }}>
              Each engine is a vertical-specific configuration of the same Orbita platform. Same architecture. Same team. Same pricing. Different business type.
            </p>
          </div>

          {/* Care — featured */}
          {(() => {
            const care = ENGINES.find(e => e.key === 'care')
            return (
              <div style={{ background: '#fff', border: `2px solid ${care.color}`, borderRadius: 16, padding: '32px 36px', marginBottom: 20, display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: care.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: care.color }}>{care.icon}</div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: '#1A1A1A' }}>{care.name}</div>
                      <div style={{ fontSize: 13, color: '#6B6560' }}>{care.tagline}</div>
                    </div>
                    <span className="badge badge-live" style={{ marginLeft: 8 }}>Live Now</span>
                  </div>
                  <p style={{ fontSize: 14, color: '#4A4A4A', lineHeight: 1.7, marginBottom: 16, maxWidth: 540 }}>{care.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {care.industries.map(ind => (
                      <span key={ind} style={{ background: care.color_light, color: care.color_dark, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20 }}>{ind}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
                  <Link to="/care">
                    <button className="btn-engine" style={{ background: care.color, color: '#fff', width: '100%' }}>
                      Explore Care →
                    </button>
                  </Link>
                  <a href={care.app_url} target="_blank" rel="noreferrer">
                    <button className="btn-outline" style={{ width: '100%', fontSize: 13 }}>
                      Enter platform
                    </button>
                  </a>
                </div>
              </div>
            )
          })()}

          {/* Coming soon engines — 2 column grid */}
          <div className="grid-2">
            {ENGINES.filter(e => e.key !== 'care').map(engine => (
              <Link key={engine.key} to={engine.path}
                style={{ display: 'block', background: '#fff', border: '1px solid #E8E0D5', borderRadius: 14, padding: '24px 26px', color: '#1A1A1A', transition: 'border-color 0.15s, box-shadow 0.15s' }}
                onMouseEnter={el => { el.currentTarget.style.borderColor = engine.color; el.currentTarget.style.boxShadow = `0 4px 16px ${engine.color}18` }}
                onMouseLeave={el => { el.currentTarget.style.borderColor = '#E8E0D5'; el.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: engine.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, color: engine.color }}>{engine.icon}</div>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 700 }}>{engine.name}</div>
                      <div style={{ fontSize: 12, color: '#9A918A' }}>{engine.tagline}</div>
                    </div>
                  </div>
                  <span className={`badge badge-${engine.status === 'beta' ? 'beta' : 'soon'}`}>{engine.status_label}</span>
                </div>
                <p style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.6, marginBottom: 14 }}>
                  {engine.description.slice(0, 140)}...
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  {engine.industries.slice(0, 4).map(ind => (
                    <span key={ind} style={{ background: '#F7F4F0', fontSize: 11, fontWeight: 500, padding: '3px 8px', borderRadius: 20, color: '#6B6560' }}>{ind}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HC ECOSYSTEM ── */}
      <section>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <div className="label" style={{ marginBottom: 16 }}>THE HC ECOSYSTEM</div>
              <h2 className="h2" style={{ marginBottom: 20 }}>Software is the entry point. The relationship is the product.</h2>
              <p style={{ fontSize: 15, color: '#6B6560', lineHeight: 1.8, marginBottom: 24 }}>
                Orbita is built and managed by HC Business & Media — part of the Hispanos Comunidad ecosystem in Greenville, SC. Inside the platform, businesses get access to the full HC network of services when they are ready.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  { name: 'Bonanza Quick Loans', desc: 'Personal, title, and business loans. No SSN required.', color: '#1A3A6E', bg: '#EBF2F8' },
                  { name: 'Zivo Insurance', desc: 'Required and recommended coverage for your industry.', color: '#2A7A5A', bg: '#EBF6F0' },
                  { name: 'HC Media', desc: 'Marketing, content, Meta Ads, and brand strategy.', color: '#6A2A8A', bg: '#F5EBF8' },
                ].map(item => (
                  <div key={item.name} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: item.color, flexShrink: 0 }}>◆</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>{item.name}</div>
                      <div style={{ fontSize: 13, color: '#6B6560' }}>{item.desc}</div>
                      <div style={{ fontSize: 11, color: '#B0A898', marginTop: 3 }}>Optional — separate agreement required</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#F7F4F0', borderRadius: 16, padding: 36 }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 400, marginBottom: 20, lineHeight: 1.4 }}>
                "You don't need 5 tools anymore. This replaces everything and helps you make more money."
              </div>
              <div style={{ display: 'flex', gap: 24, borderTop: '1px solid #E8E0D5', paddingTop: 20, marginTop: 20 }}>
                {[['$499/mo', 'Full system'], ['5 engines', 'One platform'], ['2 languages', 'ES + EN']].map(([val, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'Georgia, serif', fontSize: 28, fontWeight: 400, color: '#1A1A1A' }}>{val}</div>
                    <div style={{ fontSize: 12, color: '#9A918A' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: '#0F0F0F', borderTop: '1px solid #1F1F1F' }}>
        <div className="container" style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div className="label" style={{ marginBottom: 16, color: '#4A4A4A' }}>GET STARTED</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 40, fontWeight: 400, color: '#fff', marginBottom: 16 }}>
            Ready to run your business without chaos?
          </h2>
          <p style={{ fontSize: 16, color: '#6B6560', marginBottom: 36, maxWidth: 440, margin: '0 auto 36px' }}>
            Start with the engine built for your industry. The full platform is $499/month.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/care">
              <button className="btn-primary" style={{ padding: '14px 32px', fontSize: 15 }}>
                Explore Orbita Care →
              </button>
            </Link>
            <Link to="/pricing">
              <button className="btn-outline" style={{ padding: '13px 28px', fontSize: 15, color: '#6B6560', borderColor: '#333' }}>
                See pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
