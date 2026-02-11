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
          </FadeUp>
          <FadeUp className="two-col">
            <div>
              <p className="label label--coral" style={{ marginBottom: '1rem' }}>Our Story</p>
              <h2 style={{ marginBottom: '1.5rem' }}>Born from a calling,<br />not a business plan.</h2>
              <p style={{ marginBottom: '1.2rem' }}>Odd Shoes started in a small office in Kampala with a simple conviction: the best startups are built by people who are driven by something bigger than profit.</p>
              <p style={{ marginBottom: '1.2rem' }}>We kept meeting brilliant Christian founders with incredible ideas — but they were stuck. They couldn't find developers who understood their vision. They couldn't afford the big agencies. They couldn't bridge the gap between their calling and a working product.</p>
              <p>So we built a studio specifically for them. A place where faith isn't a footnote — it's the foundation. Where every sprint starts with prayer and every product is built to serve.</p>
            </div>
            <div className="two-col__img" style={{ background: 'linear-gradient(135deg,#e05a3a,#f0735a,#fcd4c9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '4rem', color: 'white', opacity: '.3', fontStyle: 'italic' }}>OS</span>
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
              <div className="team-member__photo" style={{ background: 'var(--coral)', color: 'white' }}>JK</div>
              <div className="team-member__name">John Katumba</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Founder & Lead</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo" style={{ background: '#2d5a27', color: 'white' }}>AN</div>
              <div className="team-member__name">Amara Nalubega</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Creative Director</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo" style={{ background: '#1a3a5c', color: 'white' }}>SO</div>
              <div className="team-member__name">Samuel Ochieng</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Lead Developer</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo" style={{ background: '#6b4c7a', color: 'white' }}>RN</div>
              <div className="team-member__name">Ruth Nakato</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">UI/UX Designer</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo" style={{ background: '#f5a623', color: 'white' }}>DM</div>
              <div className="team-member__name">Daniel Mugisha</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Full-Stack Dev</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo" style={{ background: '#c4a882', color: 'white' }}>FS</div>
              <div className="team-member__name">Faith Ssebunya</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Growth & Strategy</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo" style={{ background: '#e05a3a', color: 'white' }}>PK</div>
              <div className="team-member__name">Paul Kigozi</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Backend Engineer</div>
            </div>
            <div className="team-member">
              <div className="team-member__photo" style={{ background: '#8fc486', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/icons/paw.svg" alt="" width={40} height={40} />
              </div>
              <div className="team-member__name">Simba</div>
              <div className="team-member__divider"></div>
              <div className="team-member__role">Office Dog</div>
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
            <div className="partner-logo">AWS</div>
            <div className="partner-logo">Vercel</div>
            <div className="partner-logo">Stripe</div>
            <div className="partner-logo">Figma</div>
            <div className="partner-logo">Google<br />Cloud</div>
            <div className="partner-logo">Notion</div>
            <div className="partner-logo">Linear</div>
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
