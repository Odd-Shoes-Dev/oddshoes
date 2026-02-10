'use client';

import { useState } from 'react';
import Link from 'next/link';
import FadeUp from '@/components/FadeUp';

const projects = [
  { 
    id: 1, 
    name: 'Picflair', 
    tag: 'AI · Image Generation · SaaS', 
    category: 'saas', 
    gradient: 'linear-gradient(135deg,#8b5cf6 0%,#a78bfa 50%,#c4b5fd 100%)', 
    subtitle: 'Transform Photos into Art', 
    featured: true,
    link: 'https://picflair.art'
  },
  { 
    id: 2, 
    name: 'HeadshotCam', 
    tag: 'AI · Professional Photos · SaaS', 
    category: 'saas', 
    gradient: 'linear-gradient(135deg,#e05a3a 0%,#f0735a 50%,#fcd4c9 100%)', 
    subtitle: 'AI Professional Headshots', 
    featured: true,
    link: 'https://headshot.cam'
  },
  { 
    id: 3, 
    name: 'GloSACCO', 
    tag: 'FinTech · SACCO Management · Web Platform', 
    category: 'web', 
    gradient: 'linear-gradient(135deg,#059669 0%,#10b981 50%,#6ee7b7 100%)', 
    subtitle: 'SACCO Management Platform', 
    featured: true,
    link: 'https://glosacco.com'
  },
  { 
    id: 4, 
    name: 'NextGenHIMS', 
    tag: 'HealthTech · Hospital System · Web Platform', 
    category: 'web', 
    gradient: 'linear-gradient(135deg,#0ea5e9 0%,#38bdf8 50%,#7dd3fc 100%)', 
    subtitle: 'Hospital Information System', 
    featured: false,
    link: 'https://nextgenhims.org'
  },
  { 
    id: 5, 
    name: 'Da Vinci Analytics', 
    tag: 'EdTech · School Reports · Web Platform', 
    category: 'web', 
    gradient: 'linear-gradient(135deg,#f59e0b 0%,#fbbf24 50%,#fde047 100%)', 
    subtitle: 'Student Reports Made Simple', 
    featured: false,
    link: 'https://davincianalytics.site'
  },
  { 
    id: 6, 
    name: 'School Manager', 
    tag: 'EdTech · School Management · Web Platform', 
    category: 'web', 
    gradient: 'linear-gradient(135deg,#1a3a5c 0%,#2d6aa0 50%,#7ab8e0 100%)', 
    subtitle: 'Integrated School Management', 
    featured: false,
    link: 'https://smp.globalautosystems.co.ug'
  },
  { 
    id: 7, 
    name: 'Post Once', 
    tag: 'Social Media · Scheduling · SaaS', 
    category: 'saas', 
    gradient: 'linear-gradient(135deg,#ec4899 0%,#f472b6 50%,#fbcfe8 100%)', 
    subtitle: 'Post Everything Everywhere', 
    featured: false,
    link: 'https://postonce.pro'
  },
  { 
    id: 8, 
    name: 'Workflowe', 
    tag: 'Project Management · Mobile App', 
    category: 'mobile', 
    gradient: 'linear-gradient(135deg,#2d5a27 0%,#4a8a3f 50%,#8fc486 100%)', 
    subtitle: 'Project Tracking App', 
    featured: false,
    link: 'https://play.google.com/store/apps/details?id=ug.global.bro'
  },
  { 
    id: 9, 
    name: 'Expenseum', 
    tag: 'Finance · Personal Management · Mobile App', 
    category: 'mobile', 
    gradient: 'linear-gradient(135deg,#6366f1 0%,#818cf8 50%,#c7d2fe 100%)', 
    subtitle: 'Expense & Budget Tracker', 
    featured: false,
    link: 'https://play.google.com/store/apps/details?id=ug.global.cash'
  },
  { 
    id: 10, 
    name: 'Lightbeam Media', 
    tag: 'E-Commerce · Christian Library · Web', 
    category: 'web', 
    gradient: 'linear-gradient(135deg,#f5e6d3 0%,#e8d0b3 50%,#c4a882 100%)', 
    subtitle: 'Christian Content Library', 
    featured: false,
    dark: true,
    link: 'https://lightbeam-ouwz.onrender.com'
  },
  { 
    id: 11, 
    name: 'InstantUGC', 
    tag: 'Content Creation · UGC · SaaS', 
    category: 'saas', 
    gradient: 'linear-gradient(135deg,#dc2626 0%,#ef4444 50%,#fca5a5 100%)', 
    subtitle: 'Create UGC Ads in Seconds', 
    featured: false,
    link: 'https://instantugc.pro'
  },
  { 
    id: 12, 
    name: 'DevFest Q&A', 
    tag: 'Event Management · Q&A Platform · Web', 
    category: 'web', 
    gradient: 'linear-gradient(135deg,#1a1a1a 0%,#2a2a2a 50%,#444 100%)', 
    subtitle: 'Live Event Q&A System', 
    featured: false,
    link: 'https://qna-face.onrender.com'
  },
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
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'saas' ? 'active' : ''}`}
            onClick={() => setFilter('saas')}
          >
            SaaS & AI
          </button>
          <button 
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web Platforms
          </button>
          <button 
            className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
            onClick={() => setFilter('mobile')}
          >
            Mobile Apps
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
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    textDecoration: 'none',
                    display: 'block'
                  }}
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
                </a>
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
