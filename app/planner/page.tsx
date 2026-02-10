'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import Link from 'next/link';

export default function PlannerPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    description: '',
    services: [] as string[],
    startMonth: '',
    startYear: '',
    launchMonth: '',
    launchYear: '',
    budget: '',
    hearAbout: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (service: string) => {
    const services = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    setFormData({ ...formData, services });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/submit-planner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '', email: '', company: '', phone: '', projectType: '',
            description: '', services: [], startMonth: '', startYear: '',
            launchMonth: '', launchYear: '', budget: '', hearAbout: ''
          });
        }, 5000);
      } else {
        alert('Failed to submit planner. Please try again or email us directly at buildit@oddshoes.dev');
      }
    } catch (error) {
      console.error('Error submitting planner:', error);
      alert('Failed to submit planner. Please try again or email us directly at buildit@oddshoes.dev');
    }
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 3 }, (_, i) => currentYear + i);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="page-hero">
        <div className="container">
          <p className="label label--coral">Project Planner</p>
          <h1>Let's plan your<br /><em>launch.</em></h1>
          <p>Give us all the details below, and we'll put together a detailed proposal tailored to your vision and budget.</p>
        </div>
      </section>

      {/* ═══ PLANNER FORM ═══ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <form onSubmit={handleSubmit} className="planner-form">
            {/* YOUR DETAILS */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">Your Details</h2>
              <div className="planner-grid">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. David Kimani" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="david@example.com" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company / Startup Name</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. NextGen EdTech" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+256 xxx xxx xxx" 
                  />
                </div>
              </div>
            </FadeUp>

            {/* TYPE OF PROJECT */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">Type of Project</h2>
              <div className="planner-options">
                {['MVP Development', 'Web Application', 'Mobile App', 'Brand & Identity', 'Full Startup Package', 'Something Else'].map(type => (
                  <label key={type} className="planner-option">
                    <input
                      type="radio"
                      name="projectType"
                      value={type}
                      checked={formData.projectType === type}
                      onChange={handleChange}
                      required
                    />
                    <span>{type}</span>
                  </label>
                ))}
              </div>
            </FadeUp>

            {/* BRIEF DESCRIPTION */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">Brief Description</h2>
              <div className="form-group">
                <label htmlFor="description">Tell us about your vision *</label>
                <textarea 
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="What problem are you solving? Who is it for? What makes it different? How does it serve the Kingdom?" 
                  rows={6}
                  required
                ></textarea>
              </div>
            </FadeUp>

            {/* WHAT DO YOU NEED */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">What Do You Need?</h2>
              <p style={{ fontSize: '.9rem', color: 'var(--gray-500)', marginBottom: '1.5rem' }}>Select all that apply</p>
              <div className="planner-checkboxes">
                {['Strategy Sprint', 'UI/UX Design', 'Web Development', 'Mobile Development', 'Brand Identity', 'Growth & Marketing', 'Pitch Deck', 'Not Sure Yet'].map(service => (
                  <label key={service} className="planner-checkbox">
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckbox(service)}
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>
            </FadeUp>

            {/* TIMELINE */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">Timeline</h2>
              <div className="planner-grid">
                <div className="form-group">
                  <label>Ideal Start Date</label>
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    <select name="startMonth" value={formData.startMonth} onChange={handleChange}>
                      <option value="">Month</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                      <option value="flexible">Flexible</option>
                    </select>
                    <select name="startYear" value={formData.startYear} onChange={handleChange}>
                      <option value="">Year</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Ideal Launch Date</label>
                  <div style={{ display: 'flex', gap: '.5rem' }}>
                    <select name="launchMonth" value={formData.launchMonth} onChange={handleChange}>
                      <option value="">Month</option>
                      {months.map(m => <option key={m} value={m}>{m}</option>)}
                      <option value="asap">ASAP</option>
                      <option value="when-ready">When it's ready</option>
                    </select>
                    <select name="launchYear" value={formData.launchYear} onChange={handleChange}>
                      <option value="">Year</option>
                      {years.map(y => <option key={y} value={y}>{y}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* BUDGET */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">Likely Budget *</h2>
              <div className="planner-options">
                {['$2,000 – $5,000', '$5,000 – $15,000', '$15,000 – $30,000', '$30,000 – $50,000', 'Over $50,000', 'Not Sure Yet'].map(range => (
                  <label key={range} className="planner-option">
                    <input
                      type="radio"
                      name="budget"
                      value={range}
                      checked={formData.budget === range}
                      onChange={handleChange}
                      required
                    />
                    <span>{range}</span>
                  </label>
                ))}
              </div>
            </FadeUp>

            {/* HOW DID YOU HEAR */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">How Did You Find Us?</h2>
              <div className="form-group">
                <select name="hearAbout" value={formData.hearAbout} onChange={handleChange}>
                  <option value="">Select one...</option>
                  <option value="referral">Referral / Word of Mouth</option>
                  <option value="social">Social Media</option>
                  <option value="search">Google Search</option>
                  <option value="church">Through a Church</option>
                  <option value="event">Conference or Event</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </FadeUp>

            {/* SUBMIT */}
            <FadeUp className="planner-section">
              <h2 className="planner-section__title">Finished?</h2>
              <button 
                type="submit" 
                disabled={isSubmitted}
                className="btn btn--primary btn--large" 
                style={{ 
                  width: '100%', 
                  justifyContent: 'center',
                  background: isSubmitted ? '#2d5a27' : '',
                  fontSize: '1.1rem',
                  padding: '1.2rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '.6rem'
                }}
              >
                {isSubmitted ? (
                  <>
                    <Image src="/icons/check.svg" alt="" width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
                    Planner Submitted!
                  </>
                ) : (
                  <>
                    <Image src="/icons/rocket.svg" alt="" width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
                    Submit Project Planner
                  </>
                )}
              </button>
              <p style={{ textAlign: 'center', fontSize: '.85rem', color: 'var(--gray-400)', marginTop: '1.5rem' }}>
                We'll review your submission and get back to you within 24 hours with a tailored proposal. No pressure, no hard sell — just a conversation about how we can help.
              </p>
            </FadeUp>
          </form>
        </div>
      </section>

      {/* ═══ SCRIPTURE ═══ */}
      <section className="scripture">
        <FadeUp className="container">
          <p className="scripture__text">"Commit to the Lord whatever you do, and he will establish your plans."</p>
          <p className="scripture__ref">— Proverbs 16:3</p>
        </FadeUp>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section section--cream">
        <FadeUp className="container" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '1rem' }}>Prefer to chat first?</h2>
          <p style={{ marginBottom: '2rem' }}>No problem. Book a discovery call or send us a message on WhatsApp.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/3197010209759" className="btn btn--primary" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <Image src="/icons/whatsapp.svg" alt="" width={20} height={20} style={{ filter: 'brightness(0) invert(1)' }} />
              WhatsApp Us
            </a>
            <a href="https://calendly.com/builtbyoddshoes" target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
              <Image src="/icons/calendar.svg" alt="" width={20} height={20} />
              Book a Call
            </a>
          </div>
        </FadeUp>
      </section>

      <style jsx>{`
        .planner-form {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }
        .planner-section__title {
          font-family: var(--serif);
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--black);
        }
        .planner-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .planner-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }
        .planner-option {
          position: relative;
          cursor: pointer;
          padding: 1.2rem 1.5rem;
          border: 2px solid var(--gray-200);
          border-radius: 8px;
          transition: all var(--transition);
          display: flex;
          align-items: center;
          gap: .8rem;
        }
        .planner-option:hover {
          border-color: var(--coral);
          background: var(--coral-light);
        }
        .planner-option input[type="radio"] {
          width: 20px;
          height: 20px;
          accent-color: var(--coral);
        }
        .planner-option input[type="radio"]:checked + span {
          color: var(--coral);
          font-weight: 600;
        }
        .planner-option span {
          font-size: .95rem;
        }
        .planner-checkboxes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1rem;
        }
        .planner-checkbox {
          display: flex;
          align-items: center;
          gap: .8rem;
          cursor: pointer;
          padding: 1rem;
          border: 2px solid var(--gray-200);
          border-radius: 8px;
          transition: all var(--transition);
        }
        .planner-checkbox:hover {
          border-color: var(--coral);
          background: var(--coral-light);
        }
        .planner-checkbox input[type="checkbox"] {
          width: 20px;
          height: 20px;
          accent-color: var(--coral);
        }
        .planner-checkbox input[type="checkbox"]:checked + span {
          color: var(--coral);
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .planner-grid {
            grid-template-columns: 1fr;
          }
          .planner-options {
            grid-template-columns: 1fr;
          }
          .planner-checkboxes {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
