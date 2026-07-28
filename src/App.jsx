import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code2, Server, Layout, Download } from 'lucide-react';

// Generate random stars for the background
const generateStars = (count) => {
  let stars = '';
  for (let i = 0; i < count; i++) {
    stars += `${Math.random() * 100}vw ${Math.random() * 100}vh #FFF${i === count - 1 ? '' : ', '}`;
  }
  return stars;
};

const starLayer1 = generateStars(300);
const starLayer2 = generateStars(150);
const starLayer3 = generateStars(50);

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Spotlight Effect
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const cards = containerRef.current.getElementsByClassName('spotlight-card');
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Reveal Animation (Intersection Observer)
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Optional: unobserve if you only want it to animate once
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      const reveals = containerRef.current.querySelectorAll('.reveal');
      reveals.forEach(el => observer.observe(el));
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-container" ref={containerRef}>
      {/* Full Screen Animated Starfield */}
      <div className="star-layer" style={{ width: '1px', height: '1px', boxShadow: starLayer1, animationDuration: '50s' }}></div>
      <div className="star-layer" style={{ width: '2px', height: '2px', boxShadow: starLayer2, animationDuration: '100s' }}></div>
      <div className="star-layer" style={{ width: '3px', height: '3px', boxShadow: starLayer3, animationDuration: '150s' }}></div>

      {/* Background Animated Glows */}
      <div className="bg-glow"></div>
      <div className="bg-glow-2"></div>

      {/* Navigation */}
      <nav>
        <div className="container nav-content">
          <div style={{ fontSize: '1.25rem', fontWeight: '800' }}>
            Prince<span className="accent-text">.dev</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Expertise</a>
            <a href="#projects">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="container hero-grid">
          <div className="hero-text animate-in">
            <h1 className="gradient-text">
              Engineering the modern web, pixel by pixel.
            </h1>
            <p>
              Hi, I'm Prince Kumar. I'm a software engineer specialized in building exceptional digital experiences. I focus on highly scalable architecture, fluid animations, and uncompromising performance.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/Presktok" target="_blank" rel="noreferrer" className="btn btn-primary">
                View Work <ArrowRight size={16} />
              </a>
              <a href="/prince_resume (3).pdf" target="_blank" className="btn btn-secondary">
                <Download size={16} /> Resume
              </a>
            </div>
          </div>
          
          <div className="hero-image-container animate-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src="/images/profile.png" 
              alt="Prince Kumar" 
              className="hero-image"
              onError={(e) => { e.target.src = '/images/profile1.png' }} 
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <h2 className="section-title reveal">Technical Expertise</h2>
          <div className="cards-container grid-3">
            
            <div className="spotlight-card reveal delay-1">
              <div className="card-content">
                <Layout size={32} style={{ marginBottom: '1.5rem', color: 'var(--accent-blue)' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Frontend Development</h3>
                <p style={{ color: 'var(--text-muted)' }}>Building fast, interactive client-side applications with complex state.</p>
                <div className="skill-tags">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">TailwindCSS</span>
                </div>
              </div>
            </div>

            <div className="spotlight-card reveal delay-2">
              <div className="card-content">
                <Server size={32} style={{ marginBottom: '1.5rem', color: 'var(--accent-purple)' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Backend Architecture</h3>
                <p style={{ color: 'var(--text-muted)' }}>Designing robust REST APIs and managing scalable cloud databases.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">PostgreSQL</span>
                </div>
              </div>
            </div>

            <div className="spotlight-card reveal delay-3">
              <div className="card-content">
                <Code2 size={32} style={{ marginBottom: '1.5rem', color: '#fff' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Tooling & DevOps</h3>
                <p style={{ color: 'var(--text-muted)' }}>Automating workflows and optimizing application build performance.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Git / CI/CD</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Vite</span>
                  <span className="skill-tag">Jest</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2 className="section-title reveal">Selected Works</h2>
          <div className="cards-container grid-2">
            
            {/* Project 1 */}
            <div className="spotlight-card reveal delay-1">
              <div className="card-content">
                <img src="/images/projects/securecc.png" alt="SecureCC" className="project-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' }} />
                <h3 className="project-title">SecureCC</h3>
                <p className="project-desc">A security-aware IDE and compiler environment designed to detect and prevent vulnerabilities in C code during compilation using custom lexical and syntax analysis.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">FastAPI</span>
                  <span className="skill-tag">React</span>
                </div>
                <div className="project-actions">
                  <a href="https://github.com/Presktok/SecureCC" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="spotlight-card reveal delay-2">
              <div className="card-content">
                <img src="/images/projects/access_shield.png" alt="Access Shield" className="project-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=800&q=80' }} />
                <h3 className="project-title">Access Shield</h3>
                <p className="project-desc">Enhanced webcam security authentication system with facial capture for unauthorized access attempts and cursor locking mechanism.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">OpenCV</span>
                  <span className="skill-tag">Security</span>
                </div>
                <div className="project-actions">
                  <a href="https://github.com/Presktok/Access_shield" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="spotlight-card reveal delay-1">
              <div className="card-content">
                <img src="/images/projects/inventory_system.png" alt="Inventory Management System" className="project-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663c0?auto=format&fit=crop&w=800&q=80' }} />
                <h3 className="project-title">Inventory Management</h3>
                <p className="project-desc">A full-stack inventory management system built with Flask and MongoDB, featuring RESTful API, user authentication, and comprehensive CRUD operations.</p>
                <div className="skill-tags">
                  <span className="skill-tag">Flask</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">Python</span>
                </div>
                <div className="project-actions">
                  <a href="https://github.com/Presktok/Inventory_management" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 4: MoodMeal */}
            <div className="spotlight-card reveal delay-2">
              <div className="card-content">
                <img src="/images/projects/moodmeal.png" alt="MoodMeal AI" className="project-img" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80' }} />
                <h3 className="project-title">MoodMeal AI</h3>
                <p className="project-desc">A full-stack React application that suggests meals based on your mood. Features a RESTful Node/Express API with MongoDB Atlas integration and a reusable Tailwind UI library.</p>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
                <div className="project-actions">
                  <a href="https://github.com/Presktok/mealAi" target="_blank" rel="noreferrer" className="btn btn-secondary">
                    <Github size={16} /> Source Code
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="reveal">
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '2rem' }}>Let's build something together.</h2>
          <div className="socials">
            <a href="https://github.com/Presktok" target="_blank" rel="noreferrer"><Github size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={24} /></a>
            <a href="mailto:princedobriyal326@gmail.com"><Mail size={24} /></a>
          </div>
          <p>© {new Date().getFullYear()} Prince Kumar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
