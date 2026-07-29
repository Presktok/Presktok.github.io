import React, { useEffect, useRef, useState } from 'react';
import { Layout, Server, Code2, Shield } from 'lucide-react';
import './SkillsInteractive.css';

const skillsData = [
  {
    id: 'frontend',
    icon: <Layout size={28} />,
    title: 'Frontend Development',
    color: 'var(--accent-blue)',
    tech: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'TailwindCSS', level: 95 }
    ]
  },
  {
    id: 'backend',
    icon: <Server size={28} />,
    title: 'Backend Architecture',
    color: 'var(--accent-purple)',
    tech: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 80 }
    ]
  },
  {
    id: 'security',
    icon: <Shield size={28} />,
    title: 'Security & Cloud',
    color: '#10b981',
    tech: [
      { name: 'AWS Services', level: 85 },
      { name: 'Docker', level: 80 },
      { name: 'OWASP Top 10', level: 90 },
      { name: 'CI/CD Pipelines', level: 85 }
    ]
  },
  {
    id: 'tooling',
    icon: <Code2 size={28} />,
    title: 'Core & Tooling',
    color: '#f59e0b',
    tech: [
      { name: 'Python', level: 92 },
      { name: 'C/C++', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'Linux/Bash', level: 88 }
    ]
  }
];

const SkillsInteractive = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);

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
    <section id="skills" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle reveal">Capabilities</h2>
        <h3 className="section-title reveal delay-1">Interactive Expertise</h3>
        
        <div className="skills-interactive-grid reveal delay-2">
          {/* Categories Sidebar */}
          <div className="skills-sidebar">
            {skillsData.map((category) => (
              <button 
                key={category.id}
                className={`skill-category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ '--active-color': category.color }}
              >
                <span className="cat-icon" style={{ color: activeCategory === category.id ? category.color : 'inherit' }}>
                  {category.icon}
                </span>
                <span className="cat-title">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Active Category Details */}
          <div className="skills-details spotlight-card">
            <div className="card-content">
              {skillsData.map((category) => (
                <div 
                  key={category.id} 
                  className={`skill-panel ${activeCategory === category.id ? 'active' : ''}`}
                >
                  <div className="panel-header" style={{ color: category.color }}>
                    {category.icon}
                    <h4>{category.title}</h4>
                  </div>
                  
                  <div className="tech-bars">
                    {category.tech.map((item, index) => (
                      <div key={index} className="tech-bar-container">
                        <div className="tech-info">
                          <span className="tech-name">{item.name}</span>
                          <span className="tech-pct">{item.level}%</span>
                        </div>
                        <div className="tech-progress-bg">
                          <div 
                            className="tech-progress-fill"
                            style={{ 
                              width: activeCategory === category.id ? `${item.level}%` : '0%',
                              backgroundColor: category.color,
                              transitionDelay: `${index * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsInteractive;
