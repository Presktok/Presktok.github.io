import React, { useEffect, useRef } from 'react';
import './TechStack.css';

const techGroups = [
  {
    name: 'Frontend',
    techs: [
      { name: 'React', icon: 'react/react-original.svg' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg', invert: true },
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
      { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original.svg' }
    ]
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'express/express-original.svg', invert: true },
      { name: 'Python', icon: 'python/python-original.svg' },
      { name: 'FastAPI', icon: 'fastapi/fastapi-original.svg' }
    ]
  },
  {
    name: 'Database & Cloud',
    techs: [
      { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg', invert: true },
      { name: 'Docker', icon: 'docker/docker-original.svg' }
    ]
  },
  {
    name: 'Tools & Security',
    techs: [
      { name: 'Git', icon: 'git/git-original.svg' },
      { name: 'Jest', icon: 'jest/jest-plain.svg' },
      { name: 'Linux', icon: 'linux/linux-original.svg' },
      { name: 'Bash', icon: 'bash/bash-original.svg', invert: true }
    ]
  }
];

const TechStack = () => {
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
    <section id="techstack" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle reveal">Arsenal</h2>
        <h3 className="section-title reveal delay-1">Technologies</h3>
        
        <div className="tech-stack-grid">
          {techGroups.map((group, groupIndex) => (
            <div key={group.name} className={`tech-group reveal delay-${groupIndex + 1}`}>
              <h4 className="tech-group-title">{group.name}</h4>
              <div className="tech-items">
                {group.techs.map((tech) => (
                  <div key={tech.name} className="tech-item spotlight-card">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`} 
                      alt={tech.name} 
                      className={`tech-icon ${tech.invert ? 'invert-icon' : ''}`}
                      width="40"
                      height="40"
                      title={tech.name}
                    />
                    <span className="tech-name-tooltip">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
