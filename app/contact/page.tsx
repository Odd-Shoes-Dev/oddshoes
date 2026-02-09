'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
    referral: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to backend/email service
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', service: '', budget: '', message: '', referral: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How long does an MVP take to build?',
      answer: 'Typically 6–10 weeks from kickoff to launch. Our Strategy Sprint takes the first 2 weeks, then we build and ship in 4–8 weekly sprints depending on complexity.'
    },
    {
      question: 'Do I need a technical co-founder?',
      answer: 'No! That\'s literally why we exist. You bring the vision and domain expertise — we handle the design, development, and technical architecture.'
    },
    {
      question: 'Do I have to be a Christian to work with you?',
      answer: 'We welcome everyone! Our mission is rooted in Christian values, and we start sprints with prayer, but we serve founders of all backgrounds who share our values of integrity and generosity.'
    },
    {
      question: 'What does "Give Him 50" mean for my project?',
      answer: 'It means when you hire us, 50% of our profit from your project goes directly to Kingdom work — missions, church planting, and community development. Your startup literally funds the Gospel.'
    },
    {
      question: 'What\'s your tech stack?',
      answer: 'We\'re flexible, but our go-to stack is React/Next.js for web, React Native for mobile, Node.js or Python for backends, and PostgreSQL or Firebase for databases. We deploy on Vercel, AWS, or Google Cloud.'
    },
    {
      question: 'Do you work with clients outside Uganda?',
      answer: 'Absolutely. We work with founders across East Africa, the US, UK, and beyond. We\'re fully remote-friendly with async workflows and weekly video check-ins.'
    }
  ];

  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="page-hero">
        <div className="container">
          <p className="label label--coral">Get in Touch</p>
          <h1>Let's build<br /><em>something.</em></h1>
          <p>Whether you have a fully baked idea or a napkin sketch, we'd love to hear about it. No pressure, no pitch — just a conversation.</p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/planner" className="btn btn--primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <Image src="/icons/rocket.svg" alt="" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
              Fill Out Project Planner
            </Link>
            <p style={{ fontSize: '.85rem', color: 'var(--gray-500)', marginTop: '.8rem' }}>Or use the quick contact form below</p>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT GRID ═══ */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <FadeUp className="contact-grid">
            {/* LEFT: Info */}
            <div className="contact-info">
              <h2 style={{ marginBottom: '1.5rem' }}>How to reach us</h2>
              <p>We respond to every message within 24 hours. If it's urgent, WhatsApp is the fastest way to reach us.</p>

              <div className="contact-detail">
                <p className="label">Email</p>
                <a href="mailto:hello@oddshoes.co">hello@oddshoes.co</a>
              </div>

              <div className="contact-detail">
                <p className="label">WhatsApp</p>
                <a href="https://wa.me/3197010209759">+31 97 010 209 759</a>
              </div>

              <div className="contact-detail">
                <p className="label">Office</p>
                <a href="#">Innovation Village, Ntinda<br />Kampala, Uganda</a>
              </div>

              <div className="contact-detail">
                <p className="label">Working Hours</p>
                <p style={{ fontSize: '1rem', color: 'var(--black)' }}>Monday – Friday, 9am – 6pm EAT<br />
                  <span style={{ fontSize: '.85rem', color: 'var(--gray-500)', display: 'inline-flex', alignItems: 'center', gap: '.3rem' }}>
                    We rest on Sundays. Worship first.
                    <Image src="/icons/cross.svg" alt="" width={14} height={14} style={{ display: 'inline', marginLeft: '.2rem' }} />
                  </span>
                </p>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <a href="https://wa.me/3197010209759" className="btn btn--primary btn--small" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
                  <Image src="/icons/whatsapp.svg" alt="" width={18} height={18} style={{ filter: 'brightness(0) invert(1)' }} />
                  WhatsApp Us
                </a>
                <a href="mailto:hello@oddshoes.co?subject=Book a Call" className="btn btn--outline btn--small" style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem' }}>
                  <Image src="/icons/calendar.svg" alt="" width={18} height={18} />
                  Book a Call
                </a>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Namugwanya" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@example.com" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">What Do You Need?</label>
                  <select id="service" value={formData.service} onChange={handleChange}>
                    <option value="">Select a service...</option>
                    <option value="mvp">MVP Development</option>
                    <option value="brand">Brand & Identity</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="growth">Growth Strategy</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select id="budget" value={formData.budget} onChange={handleChange}>
                    <option value="">Select your budget...</option>
                    <option value="small">$2,000 – $5,000</option>
                    <option value="medium">$5,000 – $15,000</option>
                    <option value="large">$15,000 – $30,000</option>
                    <option value="enterprise">$30,000+</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Tell Us About Your Idea</label>
                  <textarea 
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's your vision? What problem does it solve? Who is it for? The more detail the better — but a few sentences is fine too." 
                    rows={5}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="referral">How Did You Find Us?</label>
                  <select id="referral" value={formData.referral} onChange={handleChange}>
                    <option value="">Select...</option>
                    <option value="referral">Referral / Word of Mouth</option>
                    <option value="social">Social Media</option>
                    <option value="search">Google Search</option>
                    <option value="church">Through a Church</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="btn btn--primary" 
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center', 
                    marginTop: '.5rem',
                    background: isSubmitted ? '#2d5a27' : '',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.5rem'
                  }}
                >
                  {isSubmitted && <Image src="/icons/check.svg" alt="" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />}
                  {isSubmitted ? 'Message Sent!' : 'Launch It →'}
                </button>
                <p style={{ textAlign: 'center', fontSize: '.8rem', color: 'var(--gray-400)', marginTop: '1rem' }}>
                  We'll respond within 24 hours. No spam, ever.
                </p>
              </form>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <section>
        <FadeUp className="map-embed" style={{ background: 'linear-gradient(135deg,#e8e4dd,#d4d4d4)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
            <div style={{ marginBottom: '.5rem', display: 'flex', justifyContent: 'center' }}>
              <Image src="/icons/location.svg" alt="" width={56} height={56} />
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', color: 'var(--black)', marginBottom: '.5rem' }}>Kampala, Uganda</div>
            <p style={{ fontSize: '.9rem', color: 'var(--gray-600)' }}>Innovation Village, Ntinda</p>
          </div>
        </FadeUp>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">FAQ</p>
            <h2>Common questions</h2>
          </FadeUp>
          <FadeUp style={{ maxWidth: '700px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <span className="faq-toggle">+</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      {/* ═══ SCRIPTURE ═══ */}
      <section className="scripture">
        <FadeUp className="container">
          <p className="scripture__text">"Commit to the Lord whatever you do, and he will establish your plans."</p>
          <p className="scripture__ref">— Proverbs 16:3</p>
        </FadeUp>
      </section>

      <style jsx>{`
        .faq-item {
          border-bottom: 1px solid var(--gray-200);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          cursor: pointer;
          font-family: var(--serif);
          font-size: 1.1rem;
          color: var(--black);
          transition: color var(--transition);
        }
        .faq-question:hover {
          color: var(--coral);
        }
        .faq-toggle {
          font-family: var(--sans);
          font-size: 1.5rem;
          font-weight: 300;
          color: var(--coral);
          transition: transform var(--transition);
          flex-shrink: 0;
          margin-left: 1rem;
        }
        .faq-item.open .faq-toggle {
          transform: rotate(45deg);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height .4s ease, padding .4s ease;
          padding: 0;
        }
        .faq-item.open .faq-answer {
          max-height: 300px;
          padding-bottom: 1.5rem;
        }
        .faq-answer p {
          font-size: .95rem;
          line-height: 1.7;
        }
      `}</style>
    </>
  );
}
