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
            <span>LAUNCHING NOVEMBER 2025</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">STEM IN</span>
            <span className="title-line accent">MOTORSPORTS</span>
          </h1>
          <p className="hero-description">
            We're creating a nonprofit to spearhead our STEM in Motorsports program 
            for both middle schools and high schools. We'll be raising money for schools 
            to have racing simulators installed and/or seat time at a local participating sim center.
          </p>
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-text">NATIONAL CAMPAIGN</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-text">ALL US SCHOOLS ELIGIBLE</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-text">ONSITE DISPLAY AT SEMA LAS VEGAS</span>
            </div>
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
          <div className="simulator-preview">
            <div className="sim-screen"></div>
            <div className="sim-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
