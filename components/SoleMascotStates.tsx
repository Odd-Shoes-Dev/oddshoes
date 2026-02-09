'use client';

export default function SoleMascotStates() {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '1.5rem', 
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      {/* Default */}
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 60 75" style={{ width: '45px', height: '56px' }}>
          <ellipse cx="30" cy="38" rx="14" ry="17" fill="#1a1a1a"/>
          <circle cx="30" cy="20" r="10" fill="#1a1a1a"/>
          <path d="M25 21 L20 25 L20 28 L26 27 L27 24 Z" fill="#e05a3a"/>
          <circle cx="29" cy="17" r="2.5" fill="#fff" className="blink"/>
          <circle cx="29" cy="17.5" r="1.2" fill="#1a1a1a" className="blink"/>
          <line x1="26" y1="55" x2="24" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="34" y1="55" x2="36" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="21" cy="68" rx="5" ry="2.5" fill="#e05a3a"/>
          <ellipse cx="39" cy="68" rx="5" ry="2.5" fill="#1a1a1a"/>
        </svg>
        <div style={{ fontSize: '.6rem', marginTop: '.5rem', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Default</div>
      </div>

      {/* Happy */}
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 60 75" style={{ width: '45px', height: '56px' }}>
          <ellipse cx="30" cy="38" rx="14" ry="17" fill="#1a1a1a"/>
          <circle cx="30" cy="20" r="10" fill="#1a1a1a"/>
          <path d="M25 21 L20 25 L20 28 L26 27 L27 24 Z" fill="#e05a3a"/>
          <path d="M26 18 Q29 15 32 18" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <line x1="26" y1="55" x2="24" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="34" y1="55" x2="36" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="21" cy="68" rx="5" ry="2.5" fill="#e05a3a"/>
          <ellipse cx="39" cy="68" rx="5" ry="2.5" fill="#1a1a1a"/>
          <text x="40" y="12" fill="#e05a3a" fontSize="8">✦</text>
        </svg>
        <div style={{ fontSize: '.6rem', marginTop: '.5rem', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Happy</div>
      </div>

      {/* Oops / 404 */}
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 60 75" style={{ width: '45px', height: '56px' }}>
          <ellipse cx="30" cy="38" rx="14" ry="17" fill="#1a1a1a"/>
          <circle cx="30" cy="20" r="10" fill="#1a1a1a"/>
          <path d="M25 21 L20 25 L20 28 L26 27 L27 24 Z" fill="#e05a3a"/>
          <circle cx="28" cy="17" r="3" fill="#fff"/>
          <circle cx="34" cy="17" r="3" fill="#fff"/>
          <circle cx="27" cy="17.5" r="1.5" fill="#1a1a1a"/>
          <circle cx="33" cy="17.5" r="1.5" fill="#1a1a1a"/>
          <circle cx="30" cy="25" r="2" fill="#fff"/>
          <line x1="26" y1="55" x2="24" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="34" y1="55" x2="36" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="21" cy="68" rx="5" ry="2.5" fill="#e05a3a"/>
          <ellipse cx="39" cy="68" rx="5" ry="2.5" fill="#1a1a1a"/>
        </svg>
        <div style={{ fontSize: '.6rem', marginTop: '.5rem', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Oops / 404</div>
      </div>

      {/* Building */}
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 60 75" style={{ width: '45px', height: '56px' }}>
          <ellipse cx="30" cy="38" rx="14" ry="17" fill="#1a1a1a"/>
          <circle cx="30" cy="20" r="10" fill="#1a1a1a"/>
          <path d="M25 21 L20 25 L20 28 L26 27 L27 24 Z" fill="#e05a3a"/>
          <circle cx="29" cy="17" r="2.5" fill="#fff"/>
          <circle cx="29" cy="17.5" r="1.2" fill="#1a1a1a"/>
          <line x1="27" y1="17.5" x2="24" y2="17.5" stroke="#fff" strokeWidth=".8"/>
          <line x1="31" y1="17.5" x2="34" y2="17.5" stroke="#fff" strokeWidth=".8"/>
          <circle cx="25" cy="43" r="1.5" fill="#e05a3a" opacity=".3"/>
          <circle cx="30" cy="43" r="1.5" fill="#e05a3a" opacity=".6"/>
          <circle cx="35" cy="43" r="1.5" fill="#e05a3a"/>
          <line x1="26" y1="55" x2="24" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="34" y1="55" x2="36" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="21" cy="68" rx="5" ry="2.5" fill="#e05a3a"/>
          <ellipse cx="39" cy="68" rx="5" ry="2.5" fill="#1a1a1a"/>
        </svg>
        <div style={{ fontSize: '.6rem', marginTop: '.5rem', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Building</div>
      </div>

      {/* Praying */}
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 60 75" style={{ width: '45px', height: '56px' }}>
          <ellipse cx="30" cy="38" rx="14" ry="17" fill="#1a1a1a"/>
          <circle cx="30" cy="20" r="10" fill="#1a1a1a"/>
          <path d="M25 21 L20 25 L20 28 L26 27 L27 24 Z" fill="#e05a3a"/>
          <path d="M26 18 Q29 15 32 18" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <rect x="25" y="38" width="10" height="7" rx="1" fill="#c94e30"/>
          <line x1="30" y1="38" x2="30" y2="45" stroke="#e05a3a" strokeWidth=".5"/>
          <line x1="26" y1="55" x2="26" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="34" y1="55" x2="34" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="26" cy="68" rx="5" ry="3" fill="#c4a882"/>
          <ellipse cx="34" cy="68" rx="5" ry="3" fill="#c4a882"/>
        </svg>
        <div style={{ fontSize: '.6rem', marginTop: '.5rem', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Praying</div>
      </div>

      {/* Sleeping */}
      <div style={{ textAlign: 'center' }}>
        <svg viewBox="0 0 60 75" style={{ width: '45px', height: '56px' }}>
          <ellipse cx="30" cy="38" rx="14" ry="17" fill="#1a1a1a"/>
          <circle cx="30" cy="20" r="10" fill="#1a1a1a"/>
          <path d="M25 21 L20 25 L20 28 L26 27 L27 24 Z" fill="#e05a3a"/>
          <line x1="26" y1="18" x2="32" y2="18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
          <text x="38" y="15" fill="#888" fontSize="6" fontWeight="600">z</text>
          <text x="42" y="10" fill="#888" fontSize="5">z</text>
          <line x1="26" y1="55" x2="24" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <line x1="34" y1="55" x2="36" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
          <ellipse cx="21" cy="68" rx="5" ry="2.5" fill="#e05a3a"/>
          <ellipse cx="39" cy="68" rx="5" ry="2.5" fill="#1a1a1a"/>
        </svg>
        <div style={{ fontSize: '.6rem', marginTop: '.5rem', color: 'rgba(255,255,255,.4)', textTransform: 'uppercase', letterSpacing: '.1em' }}>Sleeping</div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 48%, 52%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink {
          animation: blink 3s infinite;
        }
      `}</style>
    </div>
  );
}
