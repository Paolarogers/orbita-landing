import { Link } from 'react-router-dom'
import { ENGINES } from '../data/engines'

export default function Footer() {
  return (
    <footer style={{ background: '#0F0F0F', color: '#fff', padding: '60px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 48 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 400, marginBottom: 12, letterSpacing: '-0.02em' }}>Orbita</div>
            <div style={{ fontSize: 13, color: '#6B6560', lineHeight: 1.7, maxWidth: 280 }}>
              A modular operating system for service businesses. Built and managed by HC Business & Media in Greenville, SC.
            </div>
            <div style={{ marginTop: 20, fontSize: 12, color: '#4A4A4A' }}>
              Hispanos Comunidad · Greenville, SC USA
            </div>
          </div>

          {/* Engines */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#4A4A4A', marginBottom: 16 }}>ENGINES</div>
            {ENGINES.map(e => (
              <Link key={e.key} to={e.path} style={{ display: 'block', fontSize: 13, color: '#9A918A', marginBottom: 10, transition: 'color 0.15s' }}
                onMouseEnter={el => el.target.style.color = '#fff'} onMouseLeave={el => el.target.style.color = '#9A918A'}>
                {e.name}
                {e.status === 'live' && <span style={{ fontSize: 9, fontWeight: 700, color: '#2A7A5A', marginLeft: 6 }}>LIVE</span>}
                {e.status === 'beta' && <span style={{ fontSize: 9, fontWeight: 700, color: '#1A3A6E', marginLeft: 6 }}>BETA</span>}
              </Link>
            ))}
          </div>

          {/* Platform */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#4A4A4A', marginBottom: 16 }}>PLATFORM</div>
            {[['/', 'Overview'], ['/pricing', 'Pricing'], ['/care', 'Book a Demo']].map(([path, label]) => (
              <Link key={path} to={path} style={{ display: 'block', fontSize: 13, color: '#9A918A', marginBottom: 10 }}>
                {label}
              </Link>
            ))}
          </div>

          {/* HC Ecosystem */}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#4A4A4A', marginBottom: 16 }}>HC ECOSYSTEM</div>
            {[
              ['Bonanza Quick Loans', 'No-SSN financing'],
              ['Zivo Insurance', 'Business coverage'],
              ['HC Media', 'Marketing services'],
            ].map(([name, sub]) => (
              <div key={name} style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 13, color: '#9A918A' }}>{name}</div>
                <div style={{ fontSize: 11, color: '#4A4A4A' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1F1F1F', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 12, color: '#4A4A4A' }}>© 2026 Hispanos Comunidad. All rights reserved.</div>
          <div style={{ fontSize: 12, color: '#4A4A4A' }}>Orbita Platform v3.0</div>
        </div>
      </div>
    </footer>
  )
}
