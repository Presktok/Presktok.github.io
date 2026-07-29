import React, { useEffect, useRef, useState } from 'react';
import './Stats.css';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const Stats = () => {
  return (
    <section id="stats" className="stats-section dot-theme-section">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>By The Numbers</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
            A quick look at my professional journey, continuous learning, and project contributions across the globe.
          </p>
        </div>
        <div className="scattered-grid reveal active">
          
          <div className="stat-card dot-card delay-1">
            <div className="card-content">
              <h3 className="stat-number"><Counter end={2} /></h3>
              <p className="stat-label">Professional Internships</p>
            </div>
          </div>
          
          <div className="stat-card dot-card delay-2">
            <div className="card-content">
              <h3 className="stat-number"><Counter end={4} /></h3>
              <p className="stat-label">Major Projects</p>
            </div>
          </div>
          
          <div className="stat-card dot-card delay-3">
            <div className="card-content">
              <h3 className="stat-number"><Counter end={150} suffix="+" /></h3>
              <p className="stat-label">DSA Problems</p>
            </div>
          </div>
          
          <div className="stat-card dot-card delay-4">
            <div className="card-content">
              <h3 className="stat-number"><Counter end={10} suffix="+" /></h3>
              <p className="stat-label">Technologies</p>
            </div>
          </div>

          <div className="stat-card dot-card delay-5">
            <div className="card-content">
              <h3 className="stat-number"><Counter end={10} suffix="+" /></h3>
              <p className="stat-label">Hackathons</p>
            </div>
          </div>

          <div className="stat-card dot-card delay-6">
            <div className="card-content">
              <h3 className="stat-number"><Counter end={4} /></h3>
              <p className="stat-label">Cybersecurity Domains</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
