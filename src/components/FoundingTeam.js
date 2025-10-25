import React, { useEffect, useRef } from 'react';
import './FoundingTeam.css';

const FoundingTeam = () => {
  const teamRef = useRef(null);

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

    if (teamRef.current) {
      const members = teamRef.current.querySelectorAll('.team-member');
      members.forEach(member => observer.observe(member));
    }

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "JOEL HAMILTON",
      title: "FOUNDER VIRTUAL2REALITY.TV",
      expertise: "13YRS IN THE SIM RACING INDUSTRY",
      role: "SCHOOL RECRUITING/CURRICULUM/GRANTS"
    },
    {
      name: "PATRICK LOSEY",
      title: "TRACKSIDE ENGINEER",
      company: "HONDA RACING CORPORATION (HRC)",
      role: "RACE DATA/STRATEGY/CURRICULUM/WEB DESIGN"
    },
    {
      name: "DAVID O'CONNELL",
      title: "EXECUTIVE DIRECTOR",
      company: "VRX SIMULATORS",
      role: "SPONSORSHIP/PARTNERSHIP FUNDING"
    },
    {
      name: "MATT JASKOL",
      title: "PROFESSIONAL RACING DRIVER / PERFORMANCE",
      expertise: "DRIVING INSTRUCTOR",
      role: "HIGH SCHOOL GO KARTING DRIVER RECRUITMENT"
    },
    {
      name: "DEKOTA FRIPP",
      title: "BRONCO MOTORSPORTS DRIVER",
      expertise: "FSAE PROGRAM COMPETITOR",
      role: "BRIDGING PROGRAM TO FSAE SCHOOLS"
    }
  ];

  return (
    <section className="founding-team" id="team" ref={teamRef}>
      <div className="container">
        <div className="team-header">
          <h2>Early Board Members and Founders</h2>
          <p>Each board member brings a different kind of horsepower</p>
        </div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-avatar">
                <div className="avatar-placeholder">
                  <span className="avatar-text">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
                {member.company && <p className="member-company">{member.company}</p>}
                {member.expertise && <p className="member-expertise">{member.expertise}</p>}
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundingTeam;
