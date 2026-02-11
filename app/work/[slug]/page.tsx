import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '../projectsData';
import FadeUp from '@/components/FadeUp';
import ProjectSlideshow from './ProjectSlideshow';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex(p => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <FadeUp>
            <Link href="/work" className="label label--coral" style={{ display: 'inline-block', marginBottom: '1rem' }}>
              ← Back to Portfolio
            </Link>
            <span className="label" style={{ marginLeft: '1rem', background: 'var(--gray-100)', color: 'var(--gray-600)' }}>
              {project.tag}
            </span>
            <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', marginBottom: '1.5rem' }}>{project.name}</h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--gray-600)', maxWidth: '800px' }}>
              {project.subtitle}
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                View Live Site →
              </a>
              <Link href="/planner" className="btn btn--outline">
                Start Your Project
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Project Screenshots Slideshow */}
      <section style={{ background: 'var(--gray-50)', padding: '4rem 0' }}>
        <div className="container">
          <FadeUp>
            <ProjectSlideshow 
              imageFolder={project.imageFolder || project.slug} 
              screenshotCount={project.screenshotCount || 0}
            />
          </FadeUp>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            <FadeUp>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: '1.5rem' }}>Overview</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                {project.overview}
              </p>
            </FadeUp>
            
            <FadeUp>
              <div style={{ background: 'var(--cream)', padding: '2rem', borderRadius: '8px' }}>
                <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: 'var(--coral)' }}>
                  Tech Stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      style={{ 
                        background: 'white', 
                        padding: '0.5rem 1rem', 
                        borderRadius: '20px',
                        fontSize: '0.9rem',
                        border: '1px solid var(--gray-200)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section section--cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <FadeUp>
              <div className="label" style={{ background: 'var(--coral)', color: 'white' }}>The Challenge</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', margin: '1rem 0' }}>
                What problem needed solving?
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                {project.challenge}
              </p>
            </FadeUp>

            <FadeUp>
              <div className="label" style={{ background: 'var(--gray-800)', color: 'white' }}>Our Solution</div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', margin: '1rem 0' }}>
                How we solved it
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--gray-700)' }}>
                {project.solution}
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <FadeUp className="section-header" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem' }}>Key Features</h2>
            <p>What makes {project.name} special</p>
          </FadeUp>
          
          <FadeUp>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {project.features.map((feature, index) => (
                <div 
                  key={index}
                  style={{ 
                    background: 'var(--gray-50)', 
                    padding: '2rem', 
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--coral)'
                  }}
                >
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    background: 'var(--coral)', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                  }}>
                    {index + 1}
                  </div>
                  <p style={{ fontSize: '1.05rem', lineHeight: '1.6' }}>{feature}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Results (if available) */}
      {project.results && project.results.length > 0 && (
        <section className="section section--cream">
          <div className="container">
            <FadeUp className="section-header" style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem' }}>Results</h2>
              <p>The impact we delivered</p>
            </FadeUp>
            
            <FadeUp>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '3rem',
                marginTop: '3rem',
                textAlign: 'center'
              }}>
                {project.results.map((result, index) => (
                  <div key={index}>
                    <div style={{ 
                      fontSize: '3.5rem', 
                      fontWeight: 'bold', 
                      color: 'var(--coral)',
                      fontFamily: 'var(--serif)'
                    }}>
                      {result.metric}
                    </div>
                    <p style={{ marginTop: '0.5rem', color: 'var(--gray-600)' }}>
                      {result.description}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* Testimonial (if available) */}
      {project.testimonial && (
        <section className="section">
          <div className="container">
            <FadeUp className="testimonial">
              <div className="testimonial__quote">{project.testimonial.quote}</div>
              <div className="testimonial__author">{project.testimonial.author}</div>
              <div className="testimonial__role">{project.testimonial.role}</div>
            </FadeUp>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-band">
        <FadeUp className="container">
          <h2>Want results like this<br />for your startup?</h2>
          <p>Let's build something remarkable together. Start with our project planner or book a call.</p>
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

      {/* Next Project */}
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '3rem', background: 'var(--gray-50)' }}>
        <div className="container">
          <FadeUp>
            <div style={{ textAlign: 'center' }}>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1rem' }}>Next Project</p>
              <Link 
                href={`/work/${nextProject.slug}`}
                style={{ 
                  fontSize: '2rem', 
                  fontFamily: 'var(--serif)',
                  color: 'var(--coral)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}
              >
                {nextProject.name} →
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
