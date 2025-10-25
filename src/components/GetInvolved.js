import React, { useEffect, useRef } from 'react';
import './GetInvolved.css';

const GetInvolved = () => {
  const involvedRef = useRef(null);

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

    if (involvedRef.current) {
      const sections = involvedRef.current.querySelectorAll('.involvement-section');
      sections.forEach(section => observer.observe(section));
    }

    return () => observer.disconnect();
  }, []);

  const roles = [
    {
      title: "Educators & STEM Leaders",
      description: "Bringing curriculum expertise and school relationships"
    },
    {
      title: "Motorsport & Esports Professionals",
      description: "Connecting competition with education"
    },
    {
      title: "Creative & Marketing Minds",
      description: "Telling the story and attracting the next generation"
    },
    {
      title: "Business & Sponsorship Experts",
      description: "Ensuring sustainable funding and partnerships"
    },
    {
      title: "Community Builders & Youth Mentors",
      description: "Keeping programs people-centered"
    }
  ];

  return (
    <section className="get-involved" id="involved" ref={involvedRef}>
      <div className="container">
        <div className="involved-header">
          <h2>Ready to Join the Founding Team?</h2>
          <p>You're not being asked to fit into a box. You're being invited because your strengths already align with what we're building.</p>
        </div>
        
        <div className="roles-grid">
          {roles.map((role, index) => (
            <div key={index} className="involvement-section">
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </div>
          ))}
        </div>
        
        <div className="involved-footer">
          <div className="commitment-info">
            <h3>Your Role as a Founding Member</h3>
            <ul>
              <li>Guide the mission – shaping programs and outreach strategy</li>
              <li>Provide insight – using your expertise to help Race4Success.org grow</li>
              <li><strong>(Optional)</strong> Small contribution ($500-$1,000) to support startup expenses</li>
            </ul>
            <p className="commitment-note">
              This contribution is completely optional and does not define commitment, 
              but accelerates our ability to move fast and seize early opportunities.
            </p>
          </div>
          
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:joel@virtual2reality.tv" className="contact-link">joel@virtual2reality.tv</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+15107666207" className="contact-link">(510) 766-6207</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Website:</span>
                <span className="contact-link">Race4Success.org (coming soon)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
