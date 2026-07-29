import React, { useEffect, useRef } from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import './Achievements.css';

const achievements = [
  {
    id: 1,
    icon: <Trophy size={32} />,
    title: 'AWS Jam Rank',
    desc: 'Secured Top 10 rank in the prestigious AWS Jam, solving complex cloud architecture challenges.',
    color: '#ff9900'
  },
  {
    id: 2,
    icon: <Award size={32} />,
    title: 'Smart India Hackathon',
    desc: 'Led the team to top placement with an innovative cybersecurity solution.',
    color: '#3b82f6'
  },
  {
    id: 3,
    icon: <Medal size={32} />,
    title: 'LeetCode Problem Solver',
    desc: 'Consistently cracked over 150+ complex algorithmic problems on LeetCode.',
    color: '#eab308'
  }
];

const Achievements = () => {
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
    <section id="achievements" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle reveal">Milestones</h2>
        <h3 className="section-title reveal delay-1">Notable Achievements</h3>
        
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div 
              key={item.id} 
              className={`achievement-card spotlight-card reveal delay-${index + 1}`}
              style={{ '--ach-color': item.color }}
            >
              <div className="card-content">
                <div className="ach-icon-wrapper">
                  {item.icon}
                  <div className="ach-glow"></div>
                </div>
                <h4 className="ach-title">{item.title}</h4>
                <p className="ach-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
