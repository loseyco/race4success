import React from 'react';
import './SimpleLanding.css';

const SimpleLanding = () => {
  return (
    <div className="simple-landing">
      <div className="hero-section">
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
            for both middle schools and high schools.
          </p>
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-text">NATIONAL CAMPAIGN</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-text">ALL US SCHOOLS ELIGIBLE</span>
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
        </div>
      </div>
      
      <div className="info-section">
        <div className="container">
          <h2>Built for Purpose. Driven by Passion.</h2>
          <p>
            Race4Success.org is forming a select founding team of leaders, educators, 
            innovators, and motorsport enthusiasts using motorsports as a gateway to 
            STEM education and real-world learning.
          </p>
          <div className="cta-section">
            <p className="coming-soon-text">Coming Soon - Stay Tuned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleLanding;
