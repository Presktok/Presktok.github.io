import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './ProjectsAlternating.css';

const projects = [
  {
    id: '01',
    title: 'SecureCC',
    desc: 'A security-aware IDE and compiler environment designed to detect and prevent vulnerabilities in C code during compilation using custom lexical and syntax analysis.',
    tags: ['Python', 'FastAPI', 'React', 'Compiler Design'],
    github: 'https://github.com/Presktok/SecureCC',
    image: '/images/projects/securecc.png',
    fallback: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '02',
    title: 'Access Shield',
    desc: 'Enhanced webcam security authentication system with facial capture for unauthorized access attempts and cursor locking mechanism.',
    tags: ['Python', 'OpenCV', 'Security'],
    github: 'https://github.com/Presktok/Access_shield',
    image: '/images/projects/access_shield.png',
    fallback: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '03',
    title: 'Inventory Management',
    desc: 'A full-stack inventory management system built with Flask and MongoDB, featuring RESTful API, user authentication, and comprehensive CRUD operations.',
    tags: ['Flask', 'MongoDB', 'Python'],
    github: 'https://github.com/Presktok/Inventory_management',
    image: '/images/projects/inventory_system.png',
    fallback: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '04',
    title: 'MoodMeal AI',
    desc: 'A full-stack React application that suggests meals based on your mood. Features a RESTful Node/Express API with MongoDB Atlas integration and a reusable Tailwind UI library.',
    tags: ['React', 'Express', 'MongoDB'],
    github: 'https://github.com/Presktok/mealAi',
    image: '/images/projects/moodmeal.png',
    fallback: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80'
  }
];

const ProjectsAlternating = () => {
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
      const reveals = containerRef.current.querySelectorAll('.reveal-project, .reveal');
      reveals.forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle reveal">Portfolio</h2>
        <h3 className="section-title reveal delay-1">Projects</h3>
        <div className="projects-container">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id} 
                className={`project-row reveal-project ${isEven ? 'layout-left' : 'layout-right'}`}
              >
                <div className="project-content spotlight-card light-transparent-theme">
                  <div className="card-content">
                    <div className="project-number">{project.id}</div>
                    <h4 className="project-title-alt">{project.title}</h4>
                    <p className="project-desc-alt">{project.desc}</p>
                    
                    <div className="skill-tags" style={{ margin: '1.5rem 0' }}>
                      {project.tags.map(tag => (
                        <span key={tag} className="skill-tag">{tag}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-secondary magnetic">
                        <Github size={16} /> Code
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-image-wrapper img-zoom-container">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="img-zoom"
                    onError={(e) => { e.target.src = project.fallback }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsAlternating;
