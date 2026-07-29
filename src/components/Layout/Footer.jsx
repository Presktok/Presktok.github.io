import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
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
    <footer id="contact" className="footer-section" ref={containerRef}>
      <div className="footer-glow-bg"></div>
      
      <div className="container footer-content">
        <div className="footer-top reveal">
          <div className="status-badge">
            <span className="live-dot"></span> Available for Hiring
          </div>
          <h2 className="footer-title">Let's Build Something <br/><span className="gradient-text">Together.</span></h2>
          <p className="footer-desc">
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <a href="https://www.linkedin.com/in/prince-kumar-b45964244" target="_blank" rel="noreferrer" className="btn btn-primary magnetic reveal delay-1">
            Say Hello <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="footer-socials reveal delay-2">
          <a href="https://github.com/Presktok" target="_blank" rel="noreferrer" className="social-card spotlight-card">
            <div className="card-content flex-center">
              <Github size={24} color="#ffffff" strokeWidth={2} />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/prince-kumar-b45964244" target="_blank" rel="noreferrer" className="social-card spotlight-card">
            <div className="card-content flex-center">
              <Linkedin size={24} color="#ffffff" strokeWidth={2} />
            </div>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=princedobriyal326@gmail.com" target="_blank" rel="noreferrer" className="social-card spotlight-card">
            <div className="card-content flex-center">
              <Mail size={24} color="#ffffff" strokeWidth={2} />
            </div>
          </a>
        </div>

        <div className="footer-bottom reveal delay-3">
          <p className="copyright">
            © {new Date().getFullYear()} Prince Kumar. Engineered with pure CSS.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="footer-marquee-wrapper">
        <div className="marquee-line left">
          <div className="marquee-content" style={{ display: 'flex' }}>
            {[...Array(10)].map((_, i) => (
              <span key={i} className="marquee-text">
                Thanks for visiting my portfolio! <span className="marquee-separator">|</span>
              </span>
            ))}
          </div>
          <div className="marquee-content" style={{ display: 'flex' }} aria-hidden="true">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="marquee-text">
                Thanks for visiting my portfolio! <span className="marquee-separator">|</span>
              </span>
            ))}
          </div>
        </div>

        <div className="marquee-line right">
          <div className="marquee-content" style={{ display: 'flex' }}>
            {[...Array(10)].map((_, i) => (
              <span key={i} className="marquee-text highlight">
                Code & Crafted with 💛 by Prince Kumar <span className="marquee-separator">|</span>
              </span>
            ))}
          </div>
          <div className="marquee-content" style={{ display: 'flex' }} aria-hidden="true">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="marquee-text highlight">
                Code & Crafted with 💛 by Prince Kumar <span className="marquee-separator">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
