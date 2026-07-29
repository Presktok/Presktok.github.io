import React, { useEffect, useRef } from 'react';
import { Github } from 'lucide-react';
import './FeaturedProject.css';

const FeaturedProject = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    if (containerRef.current) {
      const reveals = containerRef.current.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="featured" className="section-padding" ref={containerRef}>
      <div className="container">
        
        <div className="featured-card spotlight-card reveal delay-1">
          <div className="featured-layout">
            
            <div className="featured-content">
              <h4 className="featured-title">SecureCC</h4>
              <p className="featured-desc">
                A security-aware IDE and compiler environment designed to detect and prevent vulnerabilities in C code during compilation using custom lexical and syntax analysis.
              </p>

              <div className="architecture-features">
                <div className="feature-item">
                  <span>Real-time vulnerability detection</span>
                </div>
                <div className="feature-item">
                  <span>Custom lexical analysis engine</span>
                </div>
                <div className="feature-item">
                  <span>Buffer overflow prevention</span>
                </div>
              </div>

              <div className="skill-tags" style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Compiler Design</span>
              </div>

              <div className="hero-actions">
                <a href="https://github.com/Presktok/SecureCC" target="_blank" rel="noreferrer" className="btn btn-primary magnetic" style={{ padding: '0.8rem 1.5rem', fontWeight: '600' }}>
                  <Github size={20} style={{ color: '#000' }} /> <span style={{ color: '#000' }}>View Source</span>
                </a>
              </div>
            </div>

            <div className="featured-visual">
              <div className="mockup-frame">
                <img 
                  src="/images/projects/securecc.png" 
                  alt="SecureCC Architecture" 
                  className="img-zoom"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80' }} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
