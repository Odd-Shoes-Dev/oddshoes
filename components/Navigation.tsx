'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import SoleLogo from './SoleLogo';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
        setIsMenuOpen(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`nav ${isVisible ? '' : 'nav--hidden'}`}>
      {isMenuOpen && (
        <div 
          className={`nav__overlay ${isMenuOpen ? 'active' : ''}`}
          onClick={closeMenu}
        ></div>
      )}
      <div className="nav__inner">
        <div className={`nav__links nav__links--left ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            href="/work" 
            className={`nav__link ${isActive('/work') ? 'nav__link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className={`nav__link ${isActive('/about') ? 'nav__link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`nav__link ${isActive('/services') ? 'nav__link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
        </div>
        <Link href="/" className="nav__logo">
          <SoleLogo size={50} className="nav__logo-icon" />
          <span style={{ 
            display: 'flex', 
            alignItems: 'baseline', 
            gap: '.15em',
            fontSize: '1.5rem'
          }}>
            <span style={{ 
              fontFamily: 'var(--serif)', 
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'var(--coral)',
              letterSpacing: '-.02em'
            }}>Odd</span>
            <span style={{ 
              fontFamily: 'var(--sans)',
              color: 'var(--black)',
              fontWeight: 400
            }}>shoes</span>
            <span className="nav__cursor" style={{
              display: 'inline-block',
              width: '2px',
              height: '1.5rem',
              background: 'var(--coral)',
              marginLeft: '2px',
              verticalAlign: 'middle',
              animation: 'navBlink 1s step-end infinite'
            }}></span>
          </span>
        </Link>
        <div className={`nav__links nav__links--right ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            href="/give-him-50" 
            className={`nav__link ${isActive('/give-him-50') ? 'nav__link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Give Him 50
          </Link>
          <Link 
            href="/contact" 
            className={`nav__link ${isActive('/contact') ? 'nav__link--active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        <button 
          className={`nav__hamburger ${isMenuOpen ? 'nav__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
