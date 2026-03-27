import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '1rem' }}>
              <div className="nav__logo-icon">O</div>
              <span className="nav__logo-text" style={{ color: 'var(--white)' }}>Odd Shoes</span>
            </div>
            <p>Building tech products for Christian founders who believe business can be a vehicle for Kingdom impact.</p>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Quick Links</div>
            <Link href="/work">Our Work</Link>
            <Link href="/about">About Us</Link>
            <Link href="/give-him-50">Give Him 50</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Services</div>
            <Link href="/work#mvp">MVP Development</Link>
            <Link href="/work#brand">Brand & Identity</Link>
            <Link href="/work#growth">Growth & Strategy</Link>
          </div>
          <div className="footer__col">
            <div className="footer__col-title">Contact</div>
            <a href="mailto:buildit@oddshoes.dev">buildit@oddshoes.dev</a>
            <a href="https://wa.me/3197010209759">+31 97 010 209 759</a>
            <p style={{ marginTop: '1rem', fontSize: '.85rem' }}>Mbarara, Uganda</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Odd Shoes. All rights reserved.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
