'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash navigation for scrolling to specific service
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero__content">
            <p className="services-hero__label">Our Services</p>
            <h1 className="services-hero__title">Built for Kingdom Impact</h1>
            <p className="services-hero__subtitle">
              Production-grade apps for Christian founders. 50% of profits fund missionaries, church plants, and Kingdom work across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Core Identity Section */}
      <section className="services-identity">
        <div className="container">
          <div className="services-identity__grid">
            <div className="services-identity__card">
              <h3>Who We Are</h3>
              <p>Worshippers, musicians, and pastors blessed by God to be engineers, based in Kampala, Uganda.</p>
            </div>
            <div className="services-identity__card">
              <h3>Our Mission</h3>
              <p>Build production-grade apps for Christian founders without technical teams. 50% of profits go to Kingdom work (Give Him 50 model).</p>
            </div>
            <div className="services-identity__card">
              <h3>What Makes Us Different</h3>
              <ul>
                <li>5-day MVPs, 14-day complete products</li>
                <li>Production-grade tech (Django, React, PostgreSQL)</li>
                <li>Custom AI agents & automation</li>
                <li>Built from worship, not just work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Genesis Build */}
      <section id="genesis-build" className="service-detail">
        <div className="container">
          <div className="service-detail__header">
            <div className="service-detail__icon">
              <Image src="/icons/rocket.svg" alt="" width={40} height={40} />
            </div>
            <div>
              <h2 className="service-detail__title">Genesis Build</h2>
              <p className="service-detail__price">The Fast-Track MVP for Kingdom Builders</p>
            </div>
          </div>
          
          <p className="service-detail__tagline">Perfect for: Pre-revenue founders who need to test a God-given idea quickly</p>

          <div className="service-detail__grid">
            <div className="service-detail__main">
              <h3>What You Get</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                <li>Single-feature MVP</li>
                <li>5-day delivery</li>
                <li>Built by worshippers who code</li>
                <li>50% of our profits fund Kingdom work</li>
              </ul>
              
              <h3>Timeline: 5 days from kickoff to launch</h3>
              <div className="service-timeline">
                <div className="service-timeline__item">
                  <h4>Day 1 — Vision Lock</h4>
                  <ul>
                    <li>2-hour strategy call</li>
                    <li>Core feature definition</li>
                    <li>Tech stack decision</li>
                    <li>Scope locked (no feature creep)</li>
                  </ul>
                </div>
                
                <div className="service-timeline__item">
                  <h4>Days 2-4 — Build</h4>
                  <ul>
                    <li>Single-feature MVP</li>
                    <li>User authentication + database</li>
                    <li>Clean React interface</li>
                    <li>Built with Django/Laravel/FastAPI + PostgreSQL</li>
                  </ul>
                </div>
                
                <div className="service-timeline__item">
                  <h4>Day 5 — Launch</h4>
                  <ul>
                    <li>Deployed to production</li>
                    <li>Simple landing page</li>
                    <li>Team walkthrough</li>
                    <li>30-day bug fixes included</li>
                  </ul>
                </div>
              </div>

              <h3>Tech Stack Options</h3>
              <div className="tech-options">
                <div className="tech-options__group">
                  <strong>Backend:</strong> Django, Laravel, or FastAPI
                </div>
                <div className="tech-options__group">
                  <strong>Frontend:</strong> React (mobile-responsive), Framer, or Webflow
                </div>
                <div className="tech-options__group">
                  <strong>Database:</strong> PostgreSQL or MySQL
                </div>
                <div className="tech-options__group">
                  <strong>CMS (optional):</strong> Directus or Strapi
                </div>
                <div className="tech-options__group">
                  <strong>Hosting:</strong> Railway, Render, Vercel, or client's choice
                </div>
              </div>


            </div>

            <div className="service-detail__sidebar">
              <div className="service-detail__box">
                <h4>Who This Is For</h4>
                <ul>
                  <li>Christian founders without technical co-founders</li>
                  <li>Pre-revenue or under $10k/year</li>
                  <li>One clear core feature needed</li>
                  <li>Ready to start Monday, launch Friday</li>
                </ul>
              </div>

              <div className="service-detail__box">
                <h4>Not For</h4>
                <ul>
                  <li>Multi-sided marketplaces (day 1)</li>
                  <li>Complex payment flows</li>
                  <li>People still "figuring it out"</li>
                </ul>
              </div>

              <div className="service-detail__box service-detail__box--highlight">
                <h4>Pricing</h4>
                <p>Budget details discussed in your project planner. Share your vision and budget, and we'll work together to make it happen.</p>
              </div>

              <Link href="/planner" className="btn btn--primary" style={{ width: '100%' }}>
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Kingdom Builder */}
      <section id="kingdom-builder" className="service-detail service-detail--alternate">
        <div className="container">
          <div className="service-detail__header">
            <div className="service-detail__icon">
              <Image src="/icons/crown.svg" alt="" width={40} height={40} />
            </div>
            <div>
              <h2 className="service-detail__title">Kingdom Builder</h2>
              <p className="service-detail__price">The Complete Dev Team for Kingdom Builders</p>
            </div>
          </div>
          
          <p className="service-detail__tagline">Perfect for: Post-revenue founders ready to scale God's vision</p>

          <div className="service-detail__grid">
            <div className="service-detail__main">
              <h3>What You Get</h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                <li>Complete product system (multiple features)</li>
                <li>14-day intensive build sprint</li>
                <li>6 months of ongoing support</li>
                <li>Built by worshippers, funded by mission (50% to Kingdom work)</li>
              </ul>
              
              <h3>Timeline: 14 days build + 6 months support</h3>
              <div className="service-timeline">
                <div className="service-timeline__item">
                  <h4>Days 1-3 — Brand & Strategy</h4>
                  <ul>
                    <li>Complete visual identity (logo, colors, typography, guidelines)</li>
                    <li>User research + feature prioritization</li>
                    <li>Technical architecture blueprint</li>
                    <li>Marketing site design</li>
                  </ul>
                </div>
                
                <div className="service-timeline__item">
                  <h4>Days 4-12 — Build</h4>
                  <ul>
                    <li>Multi-feature web or mobile app</li>
                    <li>Stripe/M-Pesa integration</li>
                    <li>Email/SMS automation</li>
                    <li>OpenClaw deployment + 2-3 custom skills (included)</li>
                    <li>Admin dashboard (Directus/Strapi)</li>
                    <li>Built with Django/Laravel/FastAPI + React</li>
                  </ul>
                </div>
                
                <div className="service-timeline__item">
                  <h4>Days 13-14 — Polish & Deploy</h4>
                  <ul>
                    <li>QA testing</li>
                    <li>Performance optimization</li>
                    <li>Production deployment</li>
                    <li>Team training</li>
                  </ul>
                </div>

                <div className="service-timeline__item">
                  <h4>Months 1-6 — Fractional CTO Support</h4>
                  <ul>
                    <li>2 strategy calls per month (60 minutes each)</li>
                    <li>Priority bug fixes (48-hour turnaround)</li>
                    <li>10 design hours per month</li>
                    <li>Technical roadmap updates</li>
                    <li>Scaling guidance</li>
                  </ul>
                </div>
              </div>

              <h3>Complete Tech Stack</h3>
              <div className="tech-options">
                <div className="tech-options__group">
                  <strong>Backend:</strong> Django/Laravel/FastAPI
                </div>
                <div className="tech-options__group">
                  <strong>Frontend:</strong> React (web) or React Native (mobile)
                </div>
                <div className="tech-options__group">
                  <strong>Database:</strong> PostgreSQL or MySQL
                </div>
                <div className="tech-options__group">
                  <strong>CMS:</strong> Directus or Strapi
                </div>
                <div className="tech-options__group">
                  <strong>Integrations:</strong> Stripe, M-Pesa, Twilio, SendGrid, etc.
                </div>
                <div className="tech-options__group">
                  <strong>AI & Automation:</strong> OpenClaw + custom skills, LLM integration, workflow automation
                </div>
                <div className="tech-options__group">
                  <strong>Hosting:</strong> Railway, AWS, Vercel, or client's choice
                </div>
              </div>
            </div>

            <div className="service-detail__sidebar">
              <div className="service-detail__box">
                <h4>Who This Is For</h4>
                <ul>
                  <li>Generating revenue or have committed customers</li>
                  <li>Need 3-5 features, not just one</li>
                  <li>Want complete brand + ongoing support</li>
                  <li>Ready to move fast</li>
                </ul>
              </div>

              <div className="service-detail__box">
                <h4>Not For</h4>
                <ul>
                  <li>Idea-stage founders (use Genesis)</li>
                  <li>Teams with full-time CTO</li>
                  <li>Anyone expecting unlimited revisions</li>
                </ul>
              </div>

              <div className="service-detail__box service-detail__box--highlight">
                <h4>Pricing</h4>
                <p>Budget details discussed in your project planner. Share your vision and budget, and we'll work together to make it happen.</p>
                <h4 style={{ marginTop: '1.5rem' }}>Capacity</h4>
                <p>3 projects per month</p>
              </div>

              <Link href="/planner" className="btn btn--primary" style={{ width: '100%' }}>
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: AI & Automation */}
      <section id="ai-automation" className="service-detail">
        <div className="container">
          <div className="service-detail__header">
            <div className="service-detail__icon">
              <Image src="/icons/brain.svg" alt="" width={40} height={40} />
            </div>
            <div>
              <h2 className="service-detail__title">AI & Automation</h2>
              <p className="service-detail__price">Flexible AI Solutions for Kingdom Builders</p>
            </div>
          </div>
          
          <p className="service-detail__tagline">OpenClaw deployment, custom AI agents, and workflow automation</p>

          <div className="service-detail__options">
            <div className="service-option">
              <div className="service-option__header">
                <h3>Option A: DIY Deployment</h3>
                <p className="service-option__price">Instant Setup</p>
              </div>
              <p className="service-option__via">Via <a href="https://www.open-clawbot.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--coral)', textDecoration: 'underline' }}>Open-ClawBot.com</a></p>
              
              <h4>What's Included</h4>
              <ul>
                <li>One-click deployment to your server</li>
                <li>Pre-configured security</li>
                <li>Basic messaging app integration (WhatsApp, Telegram, or Discord)</li>
                <li>Production-ready setup</li>
              </ul>

              <h4>What's NOT Included</h4>
              <ul>
                <li>Custom skills</li>
                <li>Team training</li>
                <li>Ongoing support</li>
              </ul>

              <a href="https://www.open-clawbot.com/" target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ marginTop: '1.5rem' }}>
                Deploy Now →
              </a>
            </div>

            <div className="service-option">
              <div className="service-option__header">
                <h3>Option B: Deployment + Custom Skills</h3>
                <p className="service-option__price">2-5 Day Build</p>
              </div>
              
              <h4>What's Included</h4>
              <ul>
                <li>Everything in DIY option</li>
                <li>1-3 custom skills built for your business</li>
                <li>30-day support</li>
                <li>Basic team training (1-3 hours)</li>
              </ul>

              <h4>Example Custom Skills</h4>
              <ul>
                <li>"Send daily revenue reports from Stripe to Slack"</li>
                <li>"Draft responses to customer support emails"</li>
                <li>"Generate weekly blog posts from meeting notes"</li>
                <li>"Parse invoices and update accounting software"</li>
              </ul>

              <Link href="/planner" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
                Get Started →
              </Link>
            </div>

            <div className="service-option">
              <div className="service-option__header">
                <h3>Option C: Full Integration</h3>
                <p className="service-option__price">Included in Kingdom Builder</p>
              </div>
              
              <h4>What's Included</h4>
              <ul>
                <li>OpenClaw deployment</li>
                <li>2-3 custom skills</li>
                <li>Security hardening</li>
                <li>Monitoring and logging setup</li>
                <li>Team training (3 hours)</li>
                <li>6 months ongoing support</li>
              </ul>

              <Link href="#kingdom-builder" className="btn btn--outline" style={{ marginTop: '1.5rem' }}>
                See Kingdom Builder →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <h2 className="section-title">Our Tech Stack</h2>
          <p className="section-subtitle">Production-grade tools. Battle-tested. Built to scale.</p>

          <div className="tech-stack-grid">
            <div className="tech-stack-category">
              <h3>Backend</h3>
              <ul>
                <li>Django + PostgreSQL</li>
                <li>Laravel + MySQL</li>
                <li>FastAPI + PostgreSQL</li>
              </ul>
            </div>

            <div className="tech-stack-category">
              <h3>Frontend</h3>
              <ul>
                <li>React (web applications)</li>
                <li>React Native (mobile apps)</li>
                <li>Framer (marketing sites)</li>
                <li>Webflow (content sites)</li>
              </ul>
            </div>

            <div className="tech-stack-category">
              <h3>CMS & Admin</h3>
              <ul>
                <li>Directus (API-first)</li>
                <li>Strapi (content-rich)</li>
              </ul>
            </div>

            <div className="tech-stack-category">
              <h3>AI & Automation</h3>
              <ul>
                <li>Custom AI agents</li>
                <li>OpenClaw deployment</li>
                <li>LLM integration (OpenAI, Anthropic, local models)</li>
                <li>Workflow automation</li>
              </ul>
            </div>

            <div className="tech-stack-category">
              <h3>Development Tools</h3>
              <ul>
                <li>Cursor</li>
                <li>Claude Code</li>
                <li>GitHub Copilot</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Costs Reference */}
      <section className="costs-section">
        <div className="container">
          <h2 className="section-title">Monthly Running Costs</h2>
          <p className="section-subtitle">Transparent pricing. No hidden fees.</p>

          <div className="costs-grid">
            <div className="cost-card">
              <h3>OpenClaw</h3>
              <ul>
                <li>Software: <strong>Free</strong> (open-source)</li>
                <li>Hosting: <strong>$10-50/month</strong></li>
                <li>AI APIs: <strong>$30-150/month</strong></li>
              </ul>
              <p className="cost-card__total">Total: ~$40-200/month</p>
            </div>

            <div className="cost-card">
              <h3>Genesis/Kingdom Products</h3>
              <ul>
                <li>Hosting: <strong>$10-100/month</strong> (depending on scale)</li>
                <li>Other costs: <strong>None</strong> unless you add paid services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="exclusions-section">
        <div className="container">
          <h2 className="section-title">What We Don't Do</h2>

          <div className="exclusions-grid">
            <div className="exclusions-box">
              <h3>Projects We Don't Accept</h3>
              <ul>
                <li>Gambling/betting platforms</li>
                <li>Adult content</li>
                <li>MLM schemes</li>
                <li>Crypto scams</li>
                <li>Anything illegal or ethically sketchy</li>
              </ul>
            </div>

            <div className="exclusions-box">
              <h3>What We Don't Offer</h3>
              <ul>
                <li>Equity-for-work arrangements</li>
                <li>Payment plans longer than 30 days</li>
                <li>"Free demo" or spec work</li>
                <li>Unlimited revisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to Build?</h2>
          <p>Launch our proposal planner to get started, or drop us an email to discuss your project.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/planner" className="btn btn--primary">
              Launch Planner →
            </Link>
            <Link href="/contact" className="btn btn--outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
