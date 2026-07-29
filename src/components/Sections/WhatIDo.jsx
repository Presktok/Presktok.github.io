import React, { useEffect, useRef } from 'react';
import { ShieldAlert, Monitor, BrainCircuit, Cloud } from 'lucide-react';
import './WhatIDo.css';

const services = [
  {
    id: 1,
    title: 'Cybersecurity',
    icon: <ShieldAlert size={32} />,
    color: '#10b981',
    skills: ['Digital Forensics', 'OSINT', 'Network Security', 'Secure Application Development']
  },
  {
    id: 2,
    title: 'Full Stack Development',
    icon: <Monitor size={32} />,
    color: 'var(--accent-blue)',
    skills: ['React', 'Node.js', 'Flask', 'MongoDB', 'REST APIs']
  },
  {
    id: 3,
    title: 'AI Development',
    icon: <BrainCircuit size={32} />,
    color: 'var(--accent-purple)',
    skills: ['Recommendation Systems', 'AI-assisted Applications', 'Machine Learning Integration', 'Prompt Engineering']
  },
  {
    id: 4,
    title: 'Cloud',
    icon: <Cloud size={32} />,
    color: '#f59e0b',
    skills: ['AWS', 'GitHub', 'Deployment', 'CI/CD']
  }
];

const WhatIDo = () => {
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
    <section id="about" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle reveal">Professional Summary</h2>
        <h3 className="section-title reveal delay-1">What I Do</h3>
        
        <div className="whatido-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`whatido-card atm-card-theme reveal delay-${index + 1}`}>
              <div className="atm-bg-image"></div>
              <div className="card-content">
                
                <div className="atm-card-top">
                  <div className="atm-chip"></div>
                  <div className="whatido-icon">
                    {service.icon}
                  </div>
                </div>
                
                <div className="atm-card-middle">
                  <h4 className="whatido-title atm-title">{service.title}</h4>
                  <div className="atm-skills-number">
                    {service.skills.join(' • ').toUpperCase()}
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
