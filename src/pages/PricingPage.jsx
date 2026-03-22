import { Link } from 'react-router-dom'
import { ENGINES } from '../data/engines'

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: '#fff', borderBottom: '1px solid #E8E0D5', padding: '72px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <div className="label" style={{ marginBottom: 16 }}>PRICING</div>
          <h1 className="h1" style={{ marginBottom: 16 }}>Simple. One price. Full system.</h1>
          <p className="body-lg" style={{ maxWidth: 480, margin: '0 auto 12px' }}>
            Designed for service businesses across multiple industries. One subscription covers everything your business needs to run and grow.
          </p>
          <div style={{ fontSize: 13, color: '#9A918A' }}>No setup fees · No per-user fees · Cancel anytime</div>
        </div>
      </section>

      {/* Pricing cards */}
      <section>
        <div className="container">
          <div className="grid-2" style={{ maxWidth: 800, margin: '0 auto', gap: 20 }}>

            {/* Orbita Complete */}
            <div style={{ border: '2px solid #1A1A1A', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <div style={{ background: '#0F0F0F', padding: '28px 28px 24px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#6B6560', letterSpacing: '0.1em', marginBottom: 10 }}>ORBITA COMPLETE</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                  <span style={{ fontFamily: 'Georgia, serif', fontSize: 52, fontWeight: 400, color: '#fff', letterSpacing: '-0.03em' }}>$499</span>
                  <span style={{ fontSize: 16, color: '#6B6560' }}>/month</span>
                </div>
                <div style={{ fontSize: 13, color: '#9A918A', marginBottom: 6 }}>Less than $17 a day</div>
                <div style={{ fontSize: 12, color: '#4A4A4A', fontStyle: 'italic' }}>The only plan your sales team should open with</div>
              </div>
              <div style={{ padding: 28, background: '#fff' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#9A918A', letterSpacing: '0.08em', marginBottom: 16 }}>EVERYTHING INCLUDED</div>
                {[
                  ['Operations module', 'Clients, appointments, visits, consent, checkout, receipts, client portal'],
                  ['Growth module', 'Leads pipeline, reactivation center, VIP hub, referrals, ROI tracking, automations'],
                  ['Marketplace access', 'Bonanza, Zivo, HC Media — optional services, one click away'],
                  ['Financial intelligence', 'P&L, commissions, health score, provider performance, balance sheet'],
                  ['Module system', 'Select your service types — the system adapts forms, workflows, and compliance'],
                  ['Three-mode UI', 'Operations, Growth, and Management modes per role'],
                  ['Fully bilingual', 'Complete Spanish + English toggle throughout the entire app'],
                  ['AI Assistant (beta)', 'Ask questions about your business in Spanish or English'],
                  ['7-day onboarding', 'Guided setup wizard + activation milestone tracking'],
                  ['Day 7–30 retention', 'Automated check-ins to ensure you get value from day one'],
                ].map(([title, desc]) => (
                  <div key={title} style={{ display: 'flex', gap: 10, marginBottom: 14, alignItems: 'flex-start' }}>
                    <span style={{ color: '#2A7A5A', flexShrink: 0, marginTop: 1 }}>✓</span>
                    <div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#1A1A1A' }}>{title} — </span>
                      <span style={{ fontSize: 13, color: '#6B6560' }}>{desc}</span>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 24 }}>
                  <Link to="/care">
                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: 14 }}>
                      Get started with Orbita →
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Orbita Operations + Services column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Step-down */}
              <div style={{ border: '1px solid #E8E0D5', borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ background: '#F7F4F0', padding: '22px 24px 18px' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#9A918A', letterSpacing: '0.1em', marginBottom: 8 }}>ORBITA OPERATIONS</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontWeight: 400, color: '#1A1A1A', letterSpacing: '-0.02em' }}>$199</span>
                    <span style={{ fontSize: 14, color: '#9A918A' }}>/month</span>
                  </div>
                  <div style={{ fontSize: 12, color: '#B0A898', fontStyle: 'italic' }}>Step-down only — offer when $499 is a hard block</div>
                </div>
                <div style={{ padding: '18px 24px', background: '#fff' }}>
                  {['Operations module only', 'No growth tools or automations', 'Marketplace view only (no triggers)', 'Clear upgrade path shown in-app'].map(item => (
                    <div key={item} style={{ fontSize: 13, color: '#6B6560', marginBottom: 8, paddingLeft: 14, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0 }}>·</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Marketplace services */}
              <div style={{ border: '1px solid #E8E0D5', borderRadius: 14, padding: 24 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#9A918A', letterSpacing: '0.08em', marginBottom: 16 }}>MARKETPLACE SERVICES (OPTIONAL)</div>
                <div style={{ background: '#FDF3E3', border: '1px solid #E8D0A0', borderRadius: 8, padding: '10px 14px', marginBottom: 14, fontSize: 12, color: '#8A5820', lineHeight: 1.5 }}>
                  These are not included in your subscription. Each requires a separate agreement.
                </div>
                {[
                  ['Marketing Starter', '$500/mo', 'Content, social management, Google reviews'],
                  ['Marketing Pro', '$1,500/mo', '+ Meta Ads, campaigns, landing page'],
                  ['Marketing Total', 'From $3,500/mo', '+ Video, TikTok, Google Ads, dedicated manager'],
                  ['Bonanza Financing', 'Commission', 'No SSN required. Personal, title, business loans.'],
                  ['Zivo Insurance', 'Commission', 'Required and optional coverage per industry.'],
                ].map(([name, price, desc]) => (
                  <div key={name} style={{ borderBottom: '1px solid #F0EDE8', paddingBottom: 10, marginBottom: 10 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#1A1A1A' }}>{name}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: '#B87840' }}>{price}</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#9A918A', marginTop: 2 }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI argument */}
      <section style={{ background: '#F7F4F0', borderTop: '1px solid #E8E0D5' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, maxWidth: 800, margin: '0 auto' }}>
            {[
              { value: '$16.63', label: 'Per day', sub: 'Less than one coffee per appointment' },
              { value: '2 clients', label: 'Pays for itself', sub: 'Reactivate 2 inactive clients at avg $300 each' },
              { value: '5 tools', label: 'Replaced', sub: 'Scheduling, CRM, POS, marketing, finance' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center', background: '#fff', borderRadius: 12, padding: '28px 20px', border: '1px solid #E8E0D5' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 36, fontWeight: 400, color: '#1A1A1A', marginBottom: 4 }}>{item.value}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1A1A1A', marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: '#9A918A', lineHeight: 1.5 }}>{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which engine */}
      <section>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="label" style={{ marginBottom: 12 }}>CHOOSE YOUR ENGINE</div>
            <h2 className="h2">Same price. Right industry configuration.</h2>
            <p className="body" style={{ marginTop: 12, maxWidth: 440, margin: '12px auto 0' }}>$499/month covers the complete Orbita platform for any engine. The engine you choose determines your module defaults and industry configuration.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 12 }}>
            {ENGINES.map(engine => (
              <Link key={engine.key} to={engine.path}
                style={{ display: 'block', background: '#fff', border: '1px solid #E8E0D5', borderRadius: 12, padding: 18, textAlign: 'center', color: '#1A1A1A', transition: 'border-color 0.15s' }}
                onMouseEnter={el => el.currentTarget.style.borderColor = engine.color}
                onMouseLeave={el => el.currentTarget.style.borderColor = '#E8E0D5'}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: engine.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: engine.color, margin: '0 auto 12px' }}>{engine.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{engine.name.replace('Orbita ', '')}</div>
                <div style={{ fontSize: 11, color: '#9A918A', lineHeight: 1.4, marginBottom: 8 }}>{engine.tagline.slice(0, 40)}...</div>
                <span className={`badge badge-${engine.status === 'live' ? 'live' : engine.status === 'beta' ? 'beta' : 'soon'}`}>{engine.status_label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F7F4F0', borderTop: '1px solid #E8E0D5' }}>
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="label" style={{ marginBottom: 12 }}>FAQ</div>
            <h2 className="h2">Common questions</h2>
          </div>
          {[
            ['Is the $499 per location or per account?', 'Per business account. If you have multiple locations, contact us — multi-location is available in the Advanced configuration.'],
            ['Are the marketplace services included?', 'No. Bonanza financing, Zivo insurance, and HC Media marketing services are entirely separate from the software subscription and require their own agreements. The app makes them easy to access — but they are never bundled.'],
            ['Can I change which modules are active?', 'Yes. You can enable or disable modules at any time from Settings. Historical data — visits, receipts, consent forms — is never deleted when you disable a module.'],
            ['What happens if I start with $199 and want to upgrade?', 'You can upgrade at any time from inside the app. The upgrade path is shown prominently. No data migration required — everything transfers instantly.'],
            ['Is there a setup fee or contract?', 'No setup fee. No contract. Month to month. Cancel any time.'],
            ['Is the platform really bilingual?', 'Completely. Every label, alert, report, error message, and workflow prompt is available in Spanish and English. The toggle is in the top-right corner of every screen.'],
          ].map(([q, a]) => (
            <div key={q} style={{ borderBottom: '1px solid #E8E0D5', padding: '20px 0' }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#1A1A1A', marginBottom: 8 }}>{q}</div>
              <div style={{ fontSize: 14, color: '#6B6560', lineHeight: 1.7 }}>{a}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
