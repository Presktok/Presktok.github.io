import React, { useEffect, useRef } from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import WhatIDo from './components/Sections/WhatIDo';
import Stats from './components/Sections/Stats';
import SkillsInteractive from './components/Sections/SkillsInteractive';
import ProjectsAlternating from './components/Sections/ProjectsAlternating';
import Achievements from './components/Sections/Achievements';
import Timeline from './components/Sections/Timeline';
import TechStack from './components/Sections/TechStack';
import Experience from './components/Sections/Experience';

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
    // Prevent browser from restoring previous scroll position which causes reveal animation glitches
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top on load
    window.scrollTo(0, 0);

    // Global Spotlight Effect for all cards
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

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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

      <Navbar />
      <main>
        <Hero />
        <WhatIDo />
        <Stats />
        <Experience />
        <ProjectsAlternating />
        <SkillsInteractive />
        <TechStack />
        <Achievements />
        <Timeline />
      </main>
      <Footer />
    </div>
  );
}

export default App;
