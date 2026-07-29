import React, { useEffect, useRef } from 'react';
import { GraduationCap, Target, Rocket, Lightbulb } from 'lucide-react';
import './AboutStory.css';

const AboutStory = () => {
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
      const reveals = containerRef.current.querySelectorAll('.story-block');
      reveals.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-subtitle">My Journey</h2>
        <h3 className="section-title">The Story Behind the Code</h3>
        
        <div className="story-grid">
          
          <div className="story-block spotlight-card reveal-left">
            <div className="card-content">
              <div className="story-icon-wrapper">
                <GraduationCap size={24} className="accent-text" />
              </div>
              <h4 className="story-title">Education</h4>
              <p className="story-text">
                Currently pursuing a degree in Computer Science, focusing on system architecture, algorithms, and secure software engineering. My academic journey has laid a strong foundation for solving complex engineering problems.
              </p>
            </div>
          </div>

          <div className="story-block spotlight-card reveal-right delay-1">
            <div className="card-content">
              <div className="story-icon-wrapper">
                <Target size={24} className="accent-text" />
              </div>
              <h4 className="story-title">Current Focus</h4>
              <p className="story-text">
                Deep diving into full-stack development with modern frameworks and cloud infrastructure. I'm actively exploring AWS services and advanced React patterns to build highly performant applications.
              </p>
            </div>
          </div>

          <div className="story-block spotlight-card reveal-left delay-1">
            <div className="card-content">
              <div className="story-icon-wrapper">
                <Lightbulb size={24} className="accent-text" />
              </div>
              <h4 className="story-title">Mission</h4>
              <p className="story-text">
                To engineer digital products that don't just function smoothly, but leave a lasting impression. I believe in writing code that is clean, secure, and maintainable while delivering a premium user experience.
              </p>
            </div>
          </div>

          <div className="story-block spotlight-card reveal-right delay-2">
            <div className="card-content">
              <div className="story-icon-wrapper">
                <Rocket size={24} className="accent-text" />
              </div>
              <h4 className="story-title">Future Goals</h4>
              <p className="story-text">
                Aiming to contribute to open-source enterprise software and specialize in cloud-native cybersecurity. I want to build systems that scale effortlessly to millions of users while maintaining iron-clad security.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutStory;
