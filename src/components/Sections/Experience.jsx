import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Building2, Shield, Code2, ExternalLink } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Cybersecurity Intern',
    company: 'Amroha Police Cyber Security Cell',
    location: 'APCSIP-2026',
    duration: 'Jun 2026',
    icon: <Shield size={24} />,
    color: '#10b981',
    highlights: [
      'Completed an intensive cybersecurity internship with the Amroha Police Cyber Security Cell.',
      'Conducted practical investigations in Digital Forensics, OSINT, Dark Web Intelligence, and cybercrime analysis.',
      'Worked on real-world scenarios involving mobile security, network security, cyber laws, and UPI fraud investigations.',
      'Collaborated with cybersecurity experts and law enforcement officers during forensic investigations and technical workshops.'
    ],
    tech: ['Digital Forensics', 'OSINT', 'Dark Web', 'Cyber Laws'],
    logoFallback: 'AP'
  },
  {
    id: 2,
    role: 'AI-Assisted Full Stack Web Development Intern',
    company: 'Technology Business Incubator (TBI)',
    location: 'Graphic Era Deemed to be University',
    duration: 'Jun 2026 – Present',
    icon: <Code2 size={24} />,
    color: 'var(--accent-blue)',
    highlights: [
      'Developing AI-assisted full-stack web applications using React.js, Flask, Node.js, and REST APIs.',
      'Designing scalable application modules using object-oriented programming and efficient data structures.',
      'Collaborating with mentors through Git/GitHub workflows and agile development practices.',
      'Building responsive frontend interfaces and backend APIs with a focus on maintainability and performance.'
    ],
    tech: ['React', 'Node', 'Flask', 'Git', 'REST API'],
    logoFallback: 'TBI',
    projectLink: 'https://github.com/Presktok/mealAi'
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle reveal">Career</h2>
        <h3 className="section-title reveal delay-1">Professional Experience</h3>
        
        <div className="experience-container" ref={carouselRef}>
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-card spotlight-card atm-card-theme reveal delay-${index + 1}`}>
              <div className="card-content">
                
                <div className="atm-card-top">
                  <div className="atm-chip"></div>
                  <div className="atm-contactless">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.5 21.3c-2.8-2.6-4.5-6.3-4.5-10.3S5.7 3.3 8.5.7"/>
                      <path d="M12 18.5c-2-1.9-3.3-4.5-3.3-7.5s1.3-5.6 3.3-7.5"/>
                      <path d="M15.5 15.7c-1.2-1.1-2-2.7-2-4.7s.8-3.6 2-4.7"/>
                    </svg>
                  </div>
                </div>

                <div className="exp-header">
                  <div className="exp-company-logo" style={{ '--logo-color': exp.color }}>
                    {/* Placeholder for real logos */}
                    <span className="logo-fallback">{exp.logoFallback}</span>
                  </div>
                  
                  <div className="exp-title-group">
                    <h4 className="exp-role">{exp.role}</h4>
                    <div className="exp-company">
                      <Building2 size={16} /> {exp.company}
                    </div>
                    <div className="exp-meta">
                      <span className="exp-duration"><Calendar size={14} /> {exp.duration}</span>
                      <span className="exp-location"><MapPin size={14} /> {exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="exp-body">
                  <ul className="exp-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <span className="highlight-bullet" style={{ backgroundColor: exp.color }}></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="skill-tags" style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {exp.tech.map((tag, idx) => (
                      <span key={idx} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                  
                  {exp.projectLink && (
                    <a href={exp.projectLink} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.4rem 1rem', fontSize: 'var(--fs-sm)' }}>
                      <ExternalLink size={14} /> View Project
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
