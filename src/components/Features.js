import React, { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const featuresRef = useRef(null);

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

    if (featuresRef.current) {
      const cards = featuresRef.current.querySelectorAll('.feature-card');
      const header = featuresRef.current.querySelector('.section-header');
      
      if (header) observer.observe(header);
      cards.forEach(card => observer.observe(card));
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🎓',
      title: 'STEM Learning',
      description: 'Science, Technology, Engineering, and Math through hands-on racing experiences'
    },
    {
      icon: '🏎️',
      title: 'Racing Simulators',
      description: 'Advanced simulation technology for immersive learning environments'
    },
    {
      icon: '🚀',
      title: 'Future Innovation',
      description: 'Preparing students for tomorrow\'s technology careers through racing'
    }
  ];

  return (
    <section className="features" id="features" ref={featuresRef}>
      <div className="container">
        <div className="section-header">
          <h2>Why STEM Racing Education?</h2>
          <p>Innovative learning through motorsport technology</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
