import React, { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20; // max rotation 20deg
      const y = (clientY / innerHeight - 0.5) * 20;

      heroRef.current.style.setProperty('--mouseX', `${x}deg`);
      heroRef.current.style.setProperty('--mouseY', `${-y}deg`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="hero-section" ref={heroRef}>
      {/* Animated 3D Perspective Grid Background */}
      <div className="hero-3d-grid"></div>

      {/* Massive Background Typography */}
      <div className="hero-huge-text reveal active">
        <div className="huge-text-first">
          {"PRINCE".split('').map((char, i) => (
            <span key={`f-${i}`} className="interactive-char">{char}</span>
          ))}
        </div>
        <div className="huge-text-last">
          {"KUMAR".split('').map((char, i) => (
            <span key={`l-${i}`} className="interactive-char outline-char">{char}</span>
          ))}
        </div>
      </div>

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge reveal-scale active delay-1">
            <span className="live-dot"></span> Available for new opportunities
          </div>
          
          <h1 className="hero-title reveal active delay-2">
            Engineering secure software.
            <br />
            <span className="accent-text">Building intelligent solutions.</span>
            <br />
            Solving real-world problems.
          </h1>
          
          <div className="hero-roles reveal active delay-3">
            <span className="role-static">I am a</span>
            <div className="role-switcher-container">
              <div className="role-switcher">
                <span className="gradient-text">Software Engineer</span>
                <span className="gradient-text">Cybersecurity Intern</span>
                <span className="gradient-text">Full Stack Developer</span>
                <span className="gradient-text">AI Engineer</span>
                <span className="gradient-text">AWS Cloud Enthusiast</span>
                <span className="gradient-text">Problem Solver</span>
                <span className="gradient-text">Software Engineer</span>
              </div>
            </div>
          </div>

          <p className="hero-desc reveal active delay-4">
            Hi, I'm Prince Kumar. I specialize in building highly scalable architecture, fluid animations, and uncompromising performance. 
          </p>

          <div className="hero-actions reveal active delay-4">
            <a href="#featured" className="btn btn-primary magnetic">
              Explore Work <ArrowRight size={18} />
            </a>
            <a href="/Prince_Kumar_Resume_AIML (1).pdf" target="_blank" className="btn btn-secondary magnetic">
              <Download size={18} /> Resume
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-right active delay-3">
          <div className="profile-container">
            <div className="profile-glow"></div>
            <img 
              src="/images/profile.png" 
              alt="Prince Kumar" 
              className="profile-image"
              onError={(e) => { e.target.src = '/images/profile1.png' }} 
            />
            
            {/* Floating Tech Badges */}
            <div className="floating-badge badge-react"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="24" height="24"/></div>
            <div className="floating-badge badge-node"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" width="24" height="24"/></div>
            <div className="floating-badge badge-python"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="24" height="24"/></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
