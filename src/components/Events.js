import React, { useEffect, useRef } from 'react';
import './Events.css';

const Events = () => {
  const eventsRef = useRef(null);

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

    if (eventsRef.current) {
      const events = eventsRef.current.querySelectorAll('.event-card');
      events.forEach(event => observer.observe(event));
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      name: "SEMA Show",
      location: "Las Vegas",
      date: "November 2025",
      description: "Inside the VRX SpeedFest exhibit, demonstrating how racing simulators can transform classroom learning.",
      highlight: "VRX SpeedFest Exhibit"
    },
    {
      name: "SKUSA Super Nationals",
      location: "Las Vegas",
      date: "November 2025",
      description: "Recruiting the first wave of student ambassadors and introducing motorsport-based education to new schools.",
      highlight: "Student Ambassador Recruitment"
    }
  ];

  return (
    <section className="events" id="events" ref={eventsRef}>
      <div className="container">
        <div className="events-header">
          <h2>The Road Ahead</h2>
          <p>Our starting line - the real race begins when we launch our first full-scale school program</p>
        </div>
        
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <div className="event-date">
                <span className="date-month">{event.date}</span>
              </div>
              <div className="event-content">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-location">{event.location}</p>
                <div className="event-highlight">
                  <span className="highlight-badge">{event.highlight}</span>
                </div>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="events-footer">
          <p className="events-note">
            These events are our starting line. The real race begins when we launch our first 
            full-scale school program – and we want you to help lead the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
