import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import { Metadata } from 'next';
import { createMetadata } from '../metadata';

export const metadata: Metadata = createMetadata({
  title: 'Give Him 50',
  description: '50% of every dollar we earn goes directly to Kingdom work. Not one day. Not eventually. Right now, every single month. Business as worship.',
  path: '/give-him-50',
});

export default function GiveHim50Page() {
  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="page-hero">
        <div className="container">
          <p className="label label--coral">Our Mission</p>
          <h1>Give Him <em>50.</em></h1>
          <p>50% of every dollar we earn goes directly to Kingdom work. Not one day. Not eventually. Right now, every single month.</p>
        </div>
      </section>

      {/* ═══ THE WHY ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="two-col">
            <div>
              <p className="label label--coral" style={{ marginBottom: '1rem' }}>The Why</p>
              <h2 style={{ marginBottom: '1.5rem' }}>Business as<br />worship.</h2>
              <p style={{ marginBottom: '1.2rem' }}>When we started Odd Shoes, we made a promise to God before we made a promise to any investor: half of everything belongs to Him.</p>
              <p style={{ marginBottom: '1.2rem' }}>Not 10%. Not "when we're profitable." Fifty percent of net profit, every month, from day one. It was terrifying. It also turned out to be the best business decision we ever made.</p>
              <p style={{ marginBottom: '1.2rem' }}>When you build with open hands, God fills them. Our revenue has grown every single year. Our clients keep coming back. Our team has never been stronger.</p>
              <p>Give Him 50 isn't just a programme — it's the engine of everything we do.</p>
            </div>
            <div className="two-col__img" style={{ background: 'var(--black)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: '8rem', color: 'var(--coral)', fontWeight: '700', lineHeight: '1', opacity: '.9' }}>50</span>
              <span style={{ fontSize: '.8rem', color: 'var(--gray-500)', letterSpacing: '.2em', textTransform: 'uppercase' }}>Percent to the Kingdom</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ IMPACT STATS ═══ */}
      <section className="section section--dark">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label" style={{ color: 'var(--coral)' }}>Impact So Far</p>
            <h2>Where the money goes</h2>
            <p style={{ color: 'var(--gray-400)' }}>Every shilling is tracked, every impact is measured. Here's what God has done through Give Him 50.</p>
          </FadeUp>
          <FadeUp className="stats">
            <div>
              <div className="stat__number">5</div>
              <div className="stat__label">Missionaries supported monthly</div>
            </div>
            <div>
              <div className="stat__number">3</div>
              <div className="stat__label">Churches planted</div>
            </div>
            <div>
              <div className="stat__number">120+</div>
              <div className="stat__label">Children sponsored</div>
            </div>
            <div>
              <div className="stat__number">8</div>
              <div className="stat__label">Clean water wells funded</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ IMPACT AREAS ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">Where It Goes</p>
            <h2>Our Kingdom pillars</h2>
            <p>Give Him 50 supports four key areas of Kingdom impact, all in East Africa and beyond.</p>
          </FadeUp>
          <FadeUp className="impact-grid">
            <div className="impact-card">
              <div className="impact-card__icon">
                <Image src="/icons/cross.svg" alt="" width={48} height={48} />
              </div>
              <h3>Church Planting</h3>
              <p>Funding new church plants in unreached communities across Uganda, Kenya, and Rwanda. Providing resources for pastors, worship equipment, and first-year operational costs.</p>
            </div>
            <div className="impact-card">
              <div className="impact-card__icon">
                <Image src="/icons/rocket.svg" alt="" width={48} height={48} />
              </div>
              <h3>Missions Support</h3>
              <p>Monthly support for 5 missionaries serving in East Africa and the Middle East. Covering living expenses, travel, and ministry resources so they can focus on the work.</p>
            </div>
            <div className="impact-card">
              <div className="impact-card__icon">
                <Image src="/icons/user.svg" alt="" width={48} height={48} />
              </div>
              <h3>Child Sponsorship</h3>
              <p>Partnering with local ministries to provide education, meals, and mentorship for over 120 children. Every child gets a name, not a number.</p>
            </div>
            <div className="impact-card">
              <div className="impact-card__icon">
                <Image src="/icons/water.svg" alt="" width={48} height={48} />
              </div>
              <h3>Clean Water</h3>
              <p>Funding borehole wells in rural communities. Each well serves 500+ people and is maintained by the local church — creating a gathering point for community and Gospel.</p>
            </div>
            <div className="impact-card">
              <div className="impact-card__icon">
                <Image src="/icons/book.svg" alt="" width={48} height={48} />
              </div>
              <h3>Bible Distribution</h3>
              <p>Printing and distributing Bibles in local languages — Luganda, Swahili, Runyankole, and more. Ensuring every new believer has access to God's word.</p>
            </div>
            <div className="impact-card">
              <div className="impact-card__icon">
                <Image src="/icons/lightbulb.svg" alt="" width={48} height={48} />
              </div>
              <h3>Tech Scholarships</h3>
              <p>Funding coding bootcamps and tech training for young believers. Building the next generation of Christian founders and developers in Africa.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section section--cream">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">Transparency</p>
            <h2>How it works</h2>
          </FadeUp>
          <FadeUp className="process-steps">
            <div className="process-step">
              <h3>We Earn</h3>
              <p>Every project we deliver generates revenue. No donations needed — this is funded entirely by our work.</p>
            </div>
            <div className="process-step">
              <h3>We Calculate</h3>
              <p>At month-end we calculate net profit after team salaries, tools, and operating costs.</p>
            </div>
            <div className="process-step">
              <h3>We Give</h3>
              <p>50% is distributed across our Kingdom pillars. Every shilling is tracked and reported.</p>
            </div>
            <div className="process-step">
              <h3>We Report</h3>
              <p>Quarterly impact reports shared publicly. Full transparency — you can see exactly where every contribution went.</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      {/* COMMENTED OUT
      <section className="section">
        <div className="container">
          <FadeUp className="testimonial">
            <div className="testimonial__quote">
              When I heard Odd Shoes gives half their profits to missions, I knew they were different. That's why I chose them to build my app — I wanted my business to fund theirs.
            </div>
            <div className="testimonial__author">Pastor James Byaruhanga</div>
            <div className="testimonial__role">Senior Pastor, Living Hope Church · Jinja</div>
          </FadeUp>
        </div>
      </section>
      */}

      {/* ═══ SCRIPTURE ═══ */}
      <section className="scripture">
        <FadeUp className="container">
          <p className="scripture__text">"Honour the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine."</p>
          <p className="scripture__ref">— Proverbs 3:9–10</p>
        </FadeUp>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <FadeUp className="container">
          <h2>Build with us.<br />Fund the Kingdom.</h2>
          <p>Every project you bring to Odd Shoes directly funds missions, churches, and communities across East Africa.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn--outline-white">Start a Project</Link>
            <a href="/Odd-Shoes-Impact-Report-2025.txt" download className="btn btn--outline-white" style={{ opacity: '.7' }}>Download Impact Report (PDF)</a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
