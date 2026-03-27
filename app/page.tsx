import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import { projects } from './work/projectsData';
import './work/hexagon.css';

export default function Home() {
  return (
    <>
      {/* ═══ MARQUEE ═══ */}
      <div className="hero__marquee-wrapper">
        <div className="hero__marquee">
          <p className="label label--coral hero__label">100+ MVPs shipped • 15+ products live • 5-14 days to launch • 50% to His Kingdom</p>
          <p className="label label--coral hero__label">100+ MVPs shipped • 15+ products live • 5-14 days to launch • 50% to His Kingdom</p>
          <p className="label label--coral hero__label">100+ MVPs shipped • 15+ products live • 5-14 days to launch • 50% to His Kingdom</p>
        </div>
      </div>

      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="hero__content container">
          <h1>A <em>higher</em> calling.<br />A better startup.</h1>
          <p className="hero__subtitle">We build MVPs, craft brands, and accelerate growth for founders who want to honour God with their business.</p>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="section section--services-preview" style={{ paddingTop: '0' }}>
        <div className="container">
          <FadeUp className="section-header" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', marginBottom: '4rem' }}>Services we Offer</h2>
          </FadeUp>
          <FadeUp className="get-started-grid">
            <Link href="/services#genesis-build" className="get-started-card">
              <div className="get-started-card__icon">
                <Image src="/icons/rocket.svg" alt="" width={60} height={60} />
              </div>
              <h3 className="get-started-card__title">Genesis Build</h3>
              <p className="get-started-card__description">5-day MVP for pre-revenue founders. Single feature, production-ready, launched Friday.</p>
              <div className="get-started-card__arrow">
                <Image src="/icons/arrow-right.svg" alt="" width={50} height={50} />
              </div>
            </Link>
            <Link href="/services#kingdom-builder" className="get-started-card">
              <div className="get-started-card__icon">
                <Image src="/icons/diamond.svg" alt="" width={60} height={60} />
              </div>
              <h3 className="get-started-card__title">Kingdom Builder</h3>
              <p className="get-started-card__description">Complete system with brand, multi-feature app, and 6 months fractional CTO support.</p>
              <div className="get-started-card__arrow">
                <Image src="/icons/arrow-right.svg" alt="" width={50} height={50} />
              </div>
            </Link>
            <Link href="/services#ai-automation" className="get-started-card">
              <div className="get-started-card__icon">
                <Image src="/icons/lightbulb.svg" alt="" width={60} height={60} />
              </div>
              <h3 className="get-started-card__title">AI & Automation</h3>
              <p className="get-started-card__description">OpenClaw deployment, custom AI agents, and workflow automation for your business.</p>
              <div className="get-started-card__arrow">
                <Image src="/icons/arrow-right.svg" alt="" width={50} height={50} />
              </div>
            </Link>
          </FadeUp>
          <div className="hero__cta" style={{ marginTop: '3rem' }}>
            <Link href="/planner" className="btn btn--primary">Launch Your MVP</Link>
            <Link href="/work" className="btn btn--outline">See Our Work</Link>
          </div>
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
          
          {/* Hexagonal Grid - First 9 projects (2 rows) */}
          <div className="hex-grid-wrapper">
            <ul className="hexagon-grid">
              {projects.slice(0, 9).map((project, index) => {
                // Determine hex class based on position for offset pattern
                let hexClass = 'hex';
                if (index % 10 >= 5) hexClass += ' secondary';
                
                // Larger logos for specific projects
                let logoSize = '60%';
                if (project.slug === 'nextgenhims') logoSize = '95%';
                else if (['davinci-analytics', 'lightbeam-media'].includes(project.slug)) logoSize = '80%';
                else if (['picflair', 'headshotcam'].includes(project.slug)) logoSize = '70%';
                
                return (
                  <li key={project.id} className={hexClass}>
                    <div className="hex-in">
                      <Link 
                        href={`/work/${project.slug}`} 
                        className={`hex-link ${project.logoText ? 'hex-text-logo' : ''}`}
                        style={{ 
                          backgroundImage: project.logoText ? 'none' : `url(${project.logoPath})`,
                          backgroundColor: project.logoBackgroundColor || '#ffffff',
                          backgroundSize: project.logoText ? 'auto' : logoSize
                        }}
                      >
                        {project.logoText && (
                          <span className="hex-logo-text">
                            {project.slug === 'glosacco' ? (
                              <>Glo <span style={{ color: '#4ade80' }}>SACCO</span></>
                            ) : project.slug === 'instantugc' ? (
                              <>Instant<span style={{ fontWeight: '700' }}>UGC</span></>
                            ) : project.slug === 'devfest-qa' ? (
                              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', justifyContent: 'center', height: '60px' }}>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#3b82f6', borderRadius: '20px' }}></div>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#22c55e', borderRadius: '20px' }}></div>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#eab308', borderRadius: '20px' }}></div>
                                <div style={{ width: '12px', height: '100%', backgroundColor: '#ef4444', borderRadius: '20px' }}></div>
                              </div>
                            ) : (
                              project.logoText
                            )}
                          </span>
                        )}
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <FadeUp style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/work" className="btn btn--outline btn--small">View All Projects →</Link>
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
                <a href="mailto:buildit@oddshoes.dev" style={{ color: 'var(--coral)', textDecoration: 'underline' }}>buildit@oddshoes.dev</a>
              </p>
              <p className="get-started-card__description">Drop us an email and let's start a conversation.</p>
            </div>
            <div className="get-started-card">
              <div className="get-started-card__icon">
                <Image src="/icons/calendar.svg" alt="" width={64} height={64} />
              </div>
              <h3 className="get-started-card__title">Calendar</h3>
              <p className="get-started-card__text">Schedule a time to talk to us and get things moving.</p>
              <a href="https://calendly.com/builtbyoddshoes" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--small">Book In</a>
            </div>
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

      {/* ═══ TESTIMONIAL ═══ **/}
      {/* COMMENTED OUT
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
      */}

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
            <a href="https://calendly.com/builtbyoddshoes" target="_blank" rel="noopener noreferrer" className="btn btn--outline-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <Image src="/icons/calendar.svg" alt="" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
              Book a Call
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
