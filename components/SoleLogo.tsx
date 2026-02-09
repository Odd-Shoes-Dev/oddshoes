'use client';

interface SoleLogoProps {
  size?: number;
  className?: string;
}

export default function SoleLogo({ size = 40, className = '' }: SoleLogoProps) {
  return (
    <svg 
      viewBox="0 0 60 75" 
      style={{ width: `${size}px`, height: `${size * 1.25}px` }}
      className={className}
    >
      {/* Body */}
      <ellipse cx="30" cy="38" rx="14" ry="17" fill="currentColor"/>
      <ellipse cx="30" cy="42" rx="9" ry="11" fill="#2a2a2a"/>
      
      {/* Head */}
      <circle cx="30" cy="20" r="10" fill="currentColor"/>
      
      {/* Beak */}
      <path d="M25 21 L20 25 L20 28 L26 27 L27 24 Z" fill="#e05a3a"/>
      <path d="M20 25 L20 28 L26 27 L24 26 Z" fill="#c94e30"/>
      <line x1="22" y1="26" x2="25" y2="25.5" stroke="currentColor" strokeWidth=".3" opacity=".3"/>
      
      {/* Eye with blink animation */}
      <circle cx="28" cy="18" r="2.5" fill="#fff"/>
      <circle cx="28.5" cy="17.5" r="1.2" fill="currentColor" className="sole-eye"/>
      <circle cx="29" cy="17" r=".4" fill="#fff"/>
      
      {/* Eyebrow */}
      <line x1="25" y1="15" x2="31" y2="15.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      
      {/* Wings */}
      <ellipse cx="20" cy="36" rx="4" ry="10" fill="#2a2a2a" transform="rotate(-8 20 36)"/>
      <ellipse cx="40" cy="36" rx="4" ry="10" fill="#2a2a2a" transform="rotate(8 40 36)"/>
      
      {/* Laptop under wing */}
      <rect x="38" y="32" width="8" height="6" rx=".8" fill="#555" transform="rotate(12 42 35)"/>
      <rect x="39" y="33" width="6.5" height="4" rx=".4" fill="#4a9eff" opacity=".5" transform="rotate(12 42 35)"/>
      
      {/* Legs */}
      <line x1="26" y1="55" x2="24" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
      <line x1="34" y1="55" x2="36" y2="65" stroke="#e05a3a" strokeWidth="2" strokeLinecap="round"/>
      
      {/* LEFT: Coral sneaker */}
      <path d="M20 63 L26 63 L28 67 L19 67 L18.5 65 Z" fill="#e05a3a"/>
      <path d="M19 67 L28 67 L28 69 L19 69 Z" fill="#c94e30"/>
      <line x1="21" y1="64.5" x2="21" y2="66" stroke="#fff" strokeWidth=".4"/>
      <line x1="23" y1="64.5" x2="23" y2="66" stroke="#fff" strokeWidth=".4"/>
      <line x1="25" y1="64.5" x2="25" y2="66" stroke="#fff" strokeWidth=".4"/>
      
      {/* RIGHT: Black dress shoe */}
      <path d="M32 63 L40 63 L41 67 L31 67 Z" fill="currentColor"/>
      <path d="M31 67 L41 67 L41 69 L31 69 Z" fill="#111"/>
      <ellipse cx="35" cy="65" rx="1.2" ry=".6" fill="#333"/>
      
      <style jsx>{`
        .sole-eye {
          animation: blink 3s step-end infinite;
        }
        @keyframes blink {
          0%, 96%, 100% { opacity: 1; }
          97%, 99% { opacity: 0; }
        }
      `}</style>
    </svg>
  );
}
