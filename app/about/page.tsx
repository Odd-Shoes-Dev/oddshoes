import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import SoleMascotStates from '@/components/SoleMascotStates';
import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'About',
  description: 'Born from a calling, not a business plan. We\'re a startup studio that does things differently — building tech products for Christian founders who believe business can be a vehicle for Kingdom impact.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="page-hero">
        <div className="container">
          <p className="label label--coral">About Us</p>
          <h1>We wear <em>odd shoes</em><br />on purpose.</h1>
          <p>We're a startup studio that does things differently — building tech products for Christian founders who believe business can be a vehicle for Kingdom impact.</p>
        </div>
      </section>

      {/* ═══ OUR STORY ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="label label--coral">Who We Are</p>
            <p style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--coral)' }}>The complete technical team Kingdom builders don't have.</p>
            <a href="https://www.fundacjagigi.pl/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo partner-logo--dark">
                <Image src="/images/gigifoundation/logo.png" alt="GIGI Foundation" width={140} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">GIGI Foundation</span>
            </a>
            <a href="https://gigiglobal.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo partner-logo--dark">
                <Image src="/images/gigiglobal/logo.png" alt="GIGI Global" width={140} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">GIGI Global</span>
            </a>
          </FadeUp>
          <FadeUp className="two-col">
            <div>
              <p className="label label--coral" style={{ marginBottom: '1rem' }}>Our Story</p>
              <h2 style={{ marginBottom: '1.5rem' }}>Born from a calling,<br />not a business plan.</h2>
              <p style={{ marginBottom: '1.2rem' }}>Odd Shoes started in a small office in Kampala with a simple conviction: the best startups are built by people who are driven by something bigger than profit.</p>
              <p style={{ marginBottom: '1.2rem' }}>We kept meeting brilliant Christian founders with incredible ideas — but they were stuck. They couldn't find developers who understood their vision. They couldn't afford the big agencies. They couldn't bridge the gap between their calling and a working product.</p>
              <p>So we built a studio specifically for them. A place where faith isn't a footnote — it's the foundation. Where every sprint starts with prayer and every product is built to serve.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image src="/logo.svg" alt="Odd Shoes" width={400} height={400} style={{ width: '100%', maxWidth: '400px', height: 'auto' }} />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="section section--cream">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">What Drives Us</p>
            <h2>Our values</h2>
          </FadeUp>
          <FadeUp className="services-grid">
            <div className="service-card">
              <div className="service-card__number">
                <Image src="/icons/cross.svg" alt="" width={48} height={48} />
              </div>
              <h3>Faith First</h3>
              <p>Every decision, every product, every partnership starts with prayer. We build for an audience of One.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">
                <Image src="/icons/team.svg" alt="" width={48} height={48} />
              </div>
              <h3>Radical Generosity</h3>
              <p>We give 50% of our profits to Kingdom work. Not because we have to — because we get to.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">
                <Image src="/icons/rocket.svg" alt="" width={48} height={48} />
              </div>
              <h3>Ship It</h3>
              <p>Ideas are cheap. Execution is everything. We move fast, build lean, and get products into users' hands.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">
                <Image src="/icons/diamond.svg" alt="" width={48} height={48} />
              </div>
              <h3>Excellence</h3>
              <p>If it has our name on it, it's going to be world-class. We don't do "good enough for a startup."</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">
                <Image src="/icons/global.svg" alt="" width={48} height={48} />
              </div>
              <h3>Africa Rising</h3>
              <p>We're proudly Ugandan, fiercely Pan-African, and globally minded. The next tech revolution starts here.</p>
            </div>
            <div className="service-card">
              <div className="service-card__number">
                <Image src="/icons/box.svg" alt="" width={48} height={48} />
              </div>
              <h3>Odd is Good</h3>
              <p>We don't fit the mould and we don't want to. The best ideas come from people who see the world differently.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">The Players</p>
            <h2>Meet the team</h2>
            <p>A small but mighty crew of designers, developers, and dreamers based in Kampala.</p>
          </FadeUp>
          <FadeUp className="team-grid">
            <div className="team-member">
              <div className="team-member__photo">
                <Image src="/images/Obed.jpg" alt="Obed Edom Mugisha" width={120} height={120} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="team-member__name">Obed Edom Mugisha</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Team Lead, Asst. Pastor, Lead Guitarist</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo">
                <Image src="/images/Edwin.jpg" alt="Edwin Nahabwe" width={120} height={120} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="team-member__name">Edwin Nahabwe</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Lead Guitarist, Youth Pastor, Full Stack Dev</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo">
                <Image src="/images/Daniel.jpg" alt="Daniel Lunyelele" width={120} height={120} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="team-member__name">Daniel Lunyelele</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Artist, Back-end & Systems Engineer</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo">
                <Image src="/images/Ian.jpg" alt="Ian Abenaitwe" width={120} height={120} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="team-member__name">Ian Abenaitwe</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Saxophone Student, AI & Agentic AI, Basketball Enthusiast</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo">
                <Image src="/images/Opaki.jpg" alt="Opakrwoth Jonathan" width={120} height={120} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="team-member__name">Opakrwoth Jonathan</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Motion Graphics, Moving Ads, AI Content Creator</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ FUN STATS ═══ */}
      <section className="section section--dark">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label" style={{ color: 'var(--coral)' }}>Odd Shoes by Numbers</p>
            <h2>The fun stats</h2>
          </FadeUp>
          <FadeUp className="fun-stats">
            <div>
              <div className="fun-stat__number">247,832</div>
              <div className="fun-stat__label">Lines of code written</div>
            </div>
            <div>
              <div className="fun-stat__number">1,847</div>
              <div className="fun-stat__label">Cups of Ugandan coffee</div>
            </div>
            <div>
              <div className="fun-stat__number">12</div>
              <div className="fun-stat__label">Laptops that survived</div>
            </div>
            <div>
              <div className="fun-stat__number">∞</div>
              <div className="fun-stat__label">Worship songs played during sprints</div>
            </div>
            <div>
              <div className="fun-stat__number">27</div>
              <div className="fun-stat__label">Average age of the team</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">Our Journey</p>
            <h2>The timeline</h2>
          </FadeUp>
          <FadeUp className="timeline">
            <div className="timeline__item">
              <div className="timeline__year">2021</div>
              <div className="timeline__text">Started freelancing — building websites and apps for local businesses in Kampala. Began tithing 50% of every project.</div>
            </div>
            <div className="timeline__item">
              <div className="timeline__year">2022</div>
              <div className="timeline__text">Launched "Odd Shoes" as a registered company. First Christian-founder client. Team grows to 3. First MVP shipped in 6 weeks.</div>
            </div>
            <div className="timeline__item">
              <div className="timeline__year">2023</div>
              <div className="timeline__text">10 MVPs launched. First client secures $250K seed round. "Give Him 50" initiative officially named. Team grows to 5.</div>
            </div>
            <div className="timeline__item">
              <div className="timeline__year">2024</div>
              <div className="timeline__text">25+ products shipped. Expanded to serve founders across East Africa. First church planted through Give Him 50 profits.</div>
            </div>
            <div className="timeline__item">
              <div className="timeline__year">2025</div>
              <div className="timeline__text">40+ projects. Team of 8. Multiple clients receive VC funding. Give Him 50 supports 5 missionaries and 3 church plants.</div>
            </div>
            <div className="timeline__item">
              <div className="timeline__year">2026</div>
              <div className="timeline__text">The year of scale. New office in Kampala. Launching our first accelerator cohort. God is faithful.</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="section section--cream">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">Our Partners</p>
            <h2>Who we work with</h2>
          </FadeUp>
          <FadeUp className="partners-row">
            <a href="https://www.fundacjagigi.pl/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo partner-logo--dark">
                <div className="gigi-text" aria-hidden="true">
                  <div className="gigi-text__top">GIGI</div>
                  <div className="gigi-text__bottom">FOUNDATION</div>
                </div>
                <span className="sr-only">GIGI Foundation</span>
              </div>
              <span className="partner-name">GIGI Foundation</span>
            </a>
            <a href="https://gigiglobal.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo partner-logo--dark">
                <Image src="/images/gigiglobal/logo.png" alt="GIGI Global" width={160} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">GIGI Global</span>
            </a>
            <a href="https://haiven.chat/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo" style={{ background: '#000000' }}>
                <Image src="/images/haiven/logo.svg" alt="Haiven" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">Haiven</span>
            </a>
            <a href="https://www.gravityjack.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo" style={{ background: '#000000' }}>
                <Image src="/images/gravityjack/logo.webp" alt="GravityJack" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">GravityJack</span>
            </a>
            <a href="https://www.diginvision.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo">
                <Image src="/images/diginvision/logo.svg" alt="Dig In Vision" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">Dig In Vision</span>
            </a>
            <a href="https://www.blueoxkampus.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo">
                <Image src="/images/blueoxkampus/logo.png" alt="BlueOx Kampus" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">BlueOx Kampus</span>
            </a>
            <a href="https://www.kingdombroker.com/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo">
                <Image src="/images/kingdombroker/logo.png" alt="Kingdom Broker" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">Kingdom Broker</span>
            </a>
            <a href="https://glpsoftware.pl/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo">
                <Image src="/images/glp/logo.png" alt="GLP Software" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">GLP Software</span>
            </a>
            <a href="https://corntech.pl/en/designing/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo" style={{ background: '#000000' }}>
                <Image src="/images/corntech/logo.png" alt="CornTech" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">CornTech</span>
            </a>
            <a href="http://www.zerke.pl/en/for-foreign-workers" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo">
                <Image src="/images/zerke/logo.png" alt="Zerke" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">Zerke</span>
            </a>
            <a href="https://en.wsts.edu.pl/" target="_blank" rel="noopener noreferrer" className="partner-logo-wrapper">
              <div className="partner-logo">
                <Image src="/images/mats/logo.svg" alt="MATS" width={120} height={40} style={{ objectFit: 'contain' }} />
              </div>
              <span className="partner-name">MATS</span>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* ═══ MASCOT STATES ═══ */}
      <section className="section section--cream" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <FadeUp style={{ textAlign: 'center' }}>
            <SoleMascotStates />
          </FadeUp>
        </div>
      </section>

      {/* ═══ SCRIPTURE ═══ */}
      <section className="scripture">
        <FadeUp className="container">
          <p className="scripture__text">"For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do."</p>
          <p className="scripture__ref">— Ephesians 2:10</p>
        </FadeUp>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <FadeUp className="container">
          <h2>Want to join us?</h2>
          <p>We're always looking for talented people who love Jesus and love building things. Reach out.</p>
          <Link href="/contact" className="btn btn--outline-white">Get in Touch</Link>
        </FadeUp>
      </section>
    </>
  );
}
