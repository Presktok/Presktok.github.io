import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const timelineData = [
  {
    year: 'Jun 2026 – Present',
    title: 'AI Full Stack Intern',
    desc: 'Technology Business Incubator. Developing AI-assisted full-stack web applications using React.js, Flask, Node.js, and REST APIs.'
  },
  {
    year: 'Jun 2026',
    title: 'Cybersecurity Intern',
    desc: 'Amroha Police. Conducted practical investigations in Digital Forensics, OSINT, Dark Web Intelligence, and cybercrime analysis.'
  },
  {
    year: '2025',
    title: 'AWS Jam, Hackathons & Projects',
    desc: 'Secured Top 10 rank in AWS Jam, won Smart India Hackathon, and built complex full-stack projects.'
  },
  {
    year: '2023',
    title: 'Started B.Tech CSE',
    desc: 'Started formal engineering education. Discovered a passion for secure software development and system architecture.'
  }
];

const Timeline = () => {
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
      const reveals = containerRef.current.querySelectorAll('.timeline-item');
      reveals.forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle reveal">History</h2>
        <h3 className="section-title reveal delay-1">Education & Journey</h3>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {/* Future Graduation Node */}
          <div className="timeline-item reveal">
            <div className="timeline-dot" style={{ borderColor: 'var(--text-muted)' }}></div>
            <div className="timeline-content spotlight-card white-theme">
              <div className="card-content">
                <span className="timeline-year" style={{ color: 'var(--text-muted)' }}>2027</span>
                <h4 className="timeline-title">Graduation</h4>
                <p className="timeline-desc">Expected to graduate with a degree in Computer Science.</p>
              </div>
            </div>
          </div>

          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content spotlight-card white-theme">
                <div className="card-content">
                  <span className="timeline-year accent-text">{item.year}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
