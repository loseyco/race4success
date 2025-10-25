import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Add entrance animation
    if (heroRef.current) {
      heroRef.current.style.opacity = '0';
      heroRef.current.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        heroRef.current.style.transition = 'all 1s ease-out';
        heroRef.current.style.opacity = '1';
        heroRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Coming Soon</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">STEM</span>
            <span className="title-line accent">Racing</span>
            <span className="title-line">Education</span>
          </h1>
          <p className="hero-description">
            Transforming how students learn, collaborate, and dream through 
            racing simulators and motorsport-based education.
          </p>
          <div className="hero-info">
            <p className="info-text">Coming Soon - Stay Tuned</p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="racing-track">
            <div className="track-line"></div>
            <div className="track-line"></div>
            <div className="track-line"></div>
          </div>
          <div className="speed-indicator">
            <div className="speed-bar"></div>
            <div className="speed-bar"></div>
            <div className="speed-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
