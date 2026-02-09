'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';

const projects = [
  { id: 1, name: 'FaithFlow', tag: 'Fintech · Mobile App · Brand', category: 'mobile', gradient: 'linear-gradient(135deg,#e05a3a 0%,#f0735a 50%,#fcd4c9 100%)', subtitle: 'Fintech for the Faithful', featured: true },
  { id: 2, name: 'Harambee Connect', tag: 'SaaS · Web Platform', category: 'saas', gradient: 'linear-gradient(135deg,#1a1a1a 0%,#2a2a2a 50%,#444 100%)', subtitle: 'Community Platform', featured: false },
  { id: 3, name: 'Zion Education', tag: 'EdTech · Web Platform', category: 'web', gradient: 'linear-gradient(135deg,#f8f6f2 0%,#e8e4dd 50%,#d4d4d4 100%)', subtitle: 'EdTech Platform', featured: false, dark: true },
  { id: 4, name: 'Manna Logistics', tag: 'Logistics · Mobile App', category: 'mobile', gradient: 'linear-gradient(135deg,#2d5a27 0%,#4a8a3f 50%,#8fc486 100%)', subtitle: 'Last-Mile Delivery', featured: false },
  { id: 5, name: 'Agape Health', tag: 'HealthTech · Mobile App', category: 'mobile', gradient: 'linear-gradient(135deg,#1a3a5c 0%,#2d6aa0 50%,#7ab8e0 100%)', subtitle: 'Telehealth', featured: false },
  { id: 6, name: 'Grace Church Kampala', tag: 'Brand · Church · Identity System', category: 'brand', gradient: 'linear-gradient(135deg,#f5e6d3 0%,#e8d0b3 50%,#c4a882 100%)', subtitle: 'Brand Identity', featured: false, dark: true },
  { id: 7, name: 'Jubilee Market', tag: 'E-Commerce · Web · Brand', category: 'web', gradient: 'linear-gradient(135deg,#f7c948 0%,#f5a623 50%,#e88d1a 100%)', subtitle: 'E-Commerce for African Artisans', featured: true },
  { id: 8, name: 'Selah Wellness', tag: 'SaaS · Wellness · Web App', category: 'saas', gradient: 'linear-gradient(135deg,#6b4c7a 0%,#9b6fb0 50%,#c9a8d8 100%)', subtitle: 'Mental Health SaaS', featured: false },
  { id: 9, name: 'Cornerstone Capital', tag: 'Brand · Finance · Identity', category: 'brand', gradient: 'linear-gradient(135deg,#1a1a1a 0%,#333 50%,#555 100%)', subtitle: 'Investment Firm Brand', featured: false },
];

const testimonials = [
  { quote: "Odd Shoes didn't just build our app — they understood our mission. They helped us create something that serves both our users and our calling.", name: "Sarah Namugwanya", role: "Founder, FaithFlow · Kampala" },
  { quote: "In 8 weeks they turned our napkin sketch into a working platform with 500 beta users. The speed was unreal, the quality even better.", name: "David Okello", role: "CEO, Harambee Connect · Nairobi" },
  { quote: "They built our brand from scratch and it's been the single biggest factor in closing our seed round. Investors constantly comment on how polished we look.", name: "Grace Mutesi", role: "Founder, Jubilee Market · Kigali" },
  { quote: "What makes Odd Shoes different is they pray with you before sprints. It sounds small but it changes everything about how you build.", name: "Joshua Ssemakula", role: "CTO, Manna Logistics · Kampala" }
];

export default function WorkPage() {
  const [filter, setFilter] = useState('all');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <>
      {/* ═══ PAGE HERO ═══ */}
      <section className="page-hero">
        <div className="container">
          <p className="label label--coral">Portfolio</p>
          <h1>Our work speaks<br /><em>for itself.</em></h1>
          <p>Every project is a partnership. Every product is a ministry. Here's what we've built together.</p>
        </div>
      </section>

      {/* ═══ FILTER BAR ═══ */}
      <section style={{ padding: '0 0 2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Platforms
          </button>
          <button 
            className={`filter-btn ${filter === 'brand' ? 'active' : ''}`}
            onClick={() => setFilter('brand')}
          >
            Brand & Identity
          </button>
          <button 
            className={`filter-btn ${filter === 'saas' ? 'active' : ''}`}
            onClick={() => setFilter('saas')}
          >
            SaaS
          </button>
        </div>
      </section>

      {/* ═══ PROJECTS GRID ═══ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <FadeUp 
                key={project.id}
                className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              >
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: project.gradient, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  flexDirection: 'column', 
                  gap: '.5rem' 
                }}>
                  <span style={{ 
                    fontFamily: 'var(--serif)', 
                    fontSize: project.featured ? '2.5rem' : '1.6rem', 
                    color: project.dark ? '#1a1a1a' : 'white', 
                    opacity: project.dark ? '.5' : '.8' 
                  }}>
                    {project.name}
                  </span>
                  <span style={{ 
                    fontSize: project.featured ? '.8rem' : '.7rem', 
                    color: project.dark ? 'rgba(26,26,26,.3)' : 'rgba(255,255,255,.6)', 
                    letterSpacing: '.15em', 
                    textTransform: 'uppercase' 
                  }}>
                    {project.subtitle}
                  </span>
                </div>
                <div className="project-card__overlay">
                  <span className="project-card__tag">{project.tag}</span>
                  <div className="project-card__title">{project.name}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS CAROUSEL ═══ */}
      <section className="section section--cream">
        <div className="container">
          <FadeUp className="section-header">
            <p className="label">Client Words</p>
            <h2>What founders say</h2>
          </FadeUp>
          <FadeUp className="testimonial">
            <div className="testimonial__quote">
              {currentTest.quote}
            </div>
            <div className="testimonial__author">{currentTest.name}</div>
            <div className="testimonial__role">{currentTest.role}</div>
          </FadeUp>
          <FadeUp style={{ textAlign: 'center', marginTop: '2rem', display: 'flex', gap: '.5rem', justifyContent: 'center' }}>
            <button onClick={prevTestimonial} className="btn btn--outline btn--small">←</button>
            <button onClick={nextTestimonial} className="btn btn--outline btn--small">→</button>
          </FadeUp>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="cta-band">
        <FadeUp className="container">
          <h2>Have an idea worth<br />building?</h2>
          <p>We'd love to hear about your vision. Let's see how we can bring it to life together.</p>
          <Link href="/contact" className="btn btn--outline-white">Start a Project</Link>
        </FadeUp>
      </section>
    </>
  );
}
