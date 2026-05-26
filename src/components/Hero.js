import React from 'react';
import '../styles/Hero.css';

function Hero() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">A modern, responsive frontend application built with React</p>
        <p className="hero-description">
          Explore my projects, skills, and get in touch with me for collaboration opportunities.
        </p>
        <div className="hero-buttons">
          <button 
            className="cta-button primary" 
            onClick={() => handleScroll('projects')}
          >
            View My Work
          </button>
          <button 
            className="cta-button secondary" 
            onClick={() => handleScroll('contact')}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
