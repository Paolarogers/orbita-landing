import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ENGINES } from '../data/engines'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [enginesOpen, setEnginesOpen] = useState(false)
  const location = useLocation()

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #E8E0D5',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, fontWeight: 400, letterSpacing: '-0.02em', color: '#1A1A1A' }}>
            Orbita
          </div>
          <div style={{ fontSize: 9, fontWeight: 700, color: '#B0A898', letterSpacing: '0.1em', marginTop: 2 }}>
            by HC Business & Media
          </div>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Link to="/" style={{ padding: '8px 14px', fontSize: 14, color: location.pathname === '/' ? '#1A1A1A' : '#6B6560', fontWeight: location.pathname === '/' ? 600 : 400, borderRadius: 8 }}>
            Platform
          </Link>

          {/* Solutions dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setEnginesOpen(true)}
            onMouseLeave={() => setEnginesOpen(false)}
          >
            <button style={{ padding: '8px 14px', fontSize: 14, color: '#6B6560', fontWeight: 400, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4, borderRadius: 8 }}>
              Solutions
              <span style={{ fontSize: 10 }}>▾</span>
            </button>
            {enginesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 4, background: '#fff', border: '1px solid #E8E0D5', borderRadius: 12, padding: 8, width: 240, boxShadow: '0 8px 24px rgba(0,0,0,0.1)', zIndex: 200 }}>
                {ENGINES.map(engine => (
                  <Link key={engine.key} to={engine.path}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 8, color: '#1A1A1A' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F7F4F0'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <div style={{ width: 28, height: 28, borderRadius: 6, background: engine.color_light, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: engine.color, flexShrink: 0 }}>
                      {engine.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{engine.name}</div>
                      <div style={{ fontSize: 11, color: '#9A918A', lineHeight: 1.3 }}>
                        {engine.status === 'live' ? 'Live Now' : engine.status === 'beta' ? 'Beta' : 'Coming Soon'}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/pricing" style={{ padding: '8px 14px', fontSize: 14, color: location.pathname === '/pricing' ? '#1A1A1A' : '#6B6560', fontWeight: location.pathname === '/pricing' ? 600 : 400, borderRadius: 8 }}>
            Pricing
          </Link>
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="https://orbita-care.netlify.app" target="_blank" rel="noreferrer"
            style={{ padding: '8px 14px', fontSize: 13, color: '#6B6560', fontWeight: 500 }}>
            Sign in
          </a>
          <Link to="/care">
            <button className="btn-primary" style={{ padding: '9px 20px', fontSize: 13 }}>
              Book Demo
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
