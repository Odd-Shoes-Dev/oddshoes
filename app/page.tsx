import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero__content container">
          <p className="label label--coral hero__label">Christian Founders Startup Accelerator</p>
          <h1>A <em>higher</em> calling.<br />A better startup.</h1>
          <p className="hero__subtitle">We build MVPs, craft brands, and accelerate growth for founders who want to honour God with their business.</p>
          <div className="hero__cta">
            <Link href="/planner" className="btn btn--primary">Launch Your MVP</Link>
            <Link href="/work" className="btn btn--outline">See Our Work</Link>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="section section--cream">
        <div className="container">
          <FadeUp className="stats">
            <div>
              <div className="stat__number">87%</div>
              <div className="stat__label">Of our founders secure funding</div>
            </div>
            <div>
              <div className="stat__number">3.2×</div>
              <div className="stat__label">Average revenue growth</div>
            </div>
            <div>
              <div className="stat__number">40+</div>
              <div className="stat__label">MVPs launched & counting</div>
            </div>
            <div>
              <div className="stat__number">50%</div>
              <div className="stat__label">Of profits given to the Kingdom</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ GET STARTED ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="get-started-grid">
            <div className="get-started-card">
              <div className="get-started-card__icon">
                <Image src="/icons/planner.svg" alt="" width={64} height={64} />
              </div>
              <h3 className="get-started-card__title">Project Planner</h3>
              <p className="get-started-card__text">Interested in working with us? Launch our proposal planner to get started.</p>
              <Link href="/planner" className="btn btn--outline btn--small">Launch It</Link>
            </div>
            <div className="get-started-card">
              <div className="get-started-card__icon">
                <Image src="/icons/message.svg" alt="" width={64} height={64} />
              </div>
              <h3 className="get-started-card__title">Connect</h3>
              <p className="get-started-card__text">
                <a href="mailto:hello@oddshoes.co" style={{ color: 'var(--coral)', textDecoration: 'underline' }}>hello@oddshoes.co</a>
              </p>
              <p className="get-started-card__description">Drop us an email and let's start a conversation.</p>
            </div>
            <div className="get-started-card">
              <div className="get-started-card__icon">
                <Image src="/icons/calendar.svg" alt="" width={64} height={64} />
              </div>
              <h3 className="get-started-card__title">Calendar</h3>
              <p className="get-started-card__text">Schedule a time to talk to us and get things moving.</p>
              <Link href="/contact" className="btn btn--outline btn--small">Book In</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ FEATURED WORK ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">Selected Work</p>
            <h2>What we've been building</h2>
            <p>A selection of startups we've helped bring to life — from napkin sketch to launched product.</p>
          </FadeUp>
          <div className="projects-grid">
            <FadeUp className="project-card project-card--featured">
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#e05a3a 0%,#f0735a 50%,#fcd4c9 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'white', opacity: '.7' }}>FaithFlow · Fintech</span>
              </div>
              <div className="project-card__overlay">
                <span className="project-card__tag">Fintech · Mobile App</span>
                <div className="project-card__title">FaithFlow</div>
              </div>
            </FadeUp>
            <FadeUp className="project-card">
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#1a1a1a 0%,#333 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: 'white', opacity: '.5' }}>Harambee · SaaS</span>
              </div>
              <div className="project-card__overlay">
                <span className="project-card__tag">SaaS · Web Platform</span>
                <div className="project-card__title">Harambee Connect</div>
              </div>
            </FadeUp>
            <FadeUp className="project-card">
              <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#f8f6f2 0%,#d4d4d4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', color: '#1a1a1a', opacity: '.4' }}>Zion Ed · EdTech</span>
              </div>
              <div className="project-card__overlay">
                <span className="project-card__tag">EdTech · Platform</span>
                <div className="project-card__title">Zion Education</div>
              </div>
            </FadeUp>
          </div>
          <FadeUp style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/work" className="btn btn--outline btn--small">View All Projects →</Link>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section section--cream">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">What We Do</p>
            <h2>Full-stack startup building</h2>
          </FadeUp>
          <FadeUp className="services-grid">
            <div className="service-card">
              <div className="service-card__number">01</div>
              <h3>MVP Development</h3>
              <p>From idea validation to working product. We design, build, and ship your minimum viable product in weeks, not months.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">02</div>
              <h3>Brand & Identity</h3>
              <p>Logo, colour palette, typography, brand guidelines — a complete identity system that makes investors take notice.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">03</div>
              <h3>Growth Strategy</h3>
              <p>Go-to-market plans, pitch decks, investor outreach. We walk alongside you from launch through your first funding round.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">04</div>
              <h3>UI/UX Design</h3>
              <p>User research, wireframes, prototypes, and pixel-perfect design. Beautiful interfaces your users will love.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">05</div>
              <h3>Web & Mobile Apps</h3>
              <p>React, React Native, Node.js, Python — we build scalable applications with modern tech stacks.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">06</div>
              <h3>Kingdom Consulting</h3>
              <p>How to build a profitable business while honouring God. Integrating faith, ethics, and generosity into your business model.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="testimonial">
            <div className="testimonial__quote">
              Odd Shoes didn't just build our app — they understood our mission. They helped us create something that serves both our users and our calling.
            </div>
            <div className="testimonial__author">Sarah Namugwanya</div>
            <div className="testimonial__role">Founder, FaithFlow · Kampala</div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ SCRIPTURE ═══ */}
      <section className="scripture">
        <FadeUp className="container">
          <p className="scripture__text">"Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward."</p>
          <p className="scripture__ref">— Colossians 3:23–24</p>
        </FadeUp>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">How It Works</p>
            <h2>From prayer to product</h2>
          </FadeUp>
          <FadeUp className="process-steps">
            <div className="process-step">
              <h3>Discovery Call</h3>
              <p>We listen to your vision, validate your idea, and align on God's purpose for your startup.</p>
            </div>
            <div className="process-step">
              <h3>Strategy Sprint</h3>
              <p>Two weeks of deep-dive planning — user research, competitive analysis, tech architecture, and go-to-market.</p>
            </div>
            <div className="process-step">
              <h3>Build & Ship</h3>
              <p>Our team designs and develops your MVP with weekly demos so you always know where things stand.</p>
            </div>
            <div className="process-step">
              <h3>Launch & Grow</h3>
              <p>We don't disappear after launch. We help you get your first users, refine the product, and prepare for investors.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <FadeUp className="container">
          <h2>Ready to build something<br />that matters?</h2>
          <p>Start with our project planner to share your vision, or book a call if you prefer to chat first.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/planner" className="btn btn--outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <Image src="/icons/rocket.svg" alt="" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
              Launch Project Planner
            </Link>
            <Link href="/contact" className="btn btn--outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <Image src="/icons/calendar.svg" alt="" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
              Book a Call
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
