import React, { useEffect, useRef } from 'react';
import './Mission.css';

const Mission = () => {
  const missionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    if (missionRef.current) {
      const sections = missionRef.current.querySelectorAll('.mission-section');
      sections.forEach(section => observer.observe(section));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission" id="mission" ref={missionRef}>
      <div className="container">
        <div className="mission-header">
          <h2>Built for Purpose. Driven by Passion.</h2>
          <p>Race4Success.org is forming a select founding team of leaders, educators, innovators, and motorsport enthusiasts.</p>
        </div>
        
        <div className="mission-content">
          <div className="mission-section">
            <div className="section-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              We're a nonprofit that connects students, schools, and racing technology. 
              Our purpose is to teach teamwork, innovation, and career-ready skills — 
              all through the excitement of competition.
            </p>
          </div>

          <div className="mission-section">
            <div className="section-icon">🚀</div>
            <h3>Our Vision</h3>
            <p>
              Using motorsports as a gateway to STEM education and real-world learning. 
              Together, we'll ignite a movement that makes learning interactive, 
              competitive, and career-focused.
            </p>
          </div>

          <div className="mission-section">
            <div className="section-icon">🏁</div>
            <h3>What We're Building</h3>
            <ul>
              <li>A national STEM + Motorsports program for schools</li>
              <li>Student racing teams that compete in simulators as part of learning</li>
              <li>A network of partners and sponsors who believe in using motorsports to educate and inspire</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
