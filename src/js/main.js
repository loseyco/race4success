// Coming Soon Page - Simple JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Simple page load tracking
  console.log('Race4Success.org - Coming Soon page loaded');
  
  // Add a subtle entrance animation
  const container = document.querySelector('.coming-soon-container');
  if (container) {
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      container.style.transition = 'all 1s ease-out';
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 100);
  }
  
  // Add click effect to the logo
  const logo = document.querySelector('.logo h1');
  if (logo) {
    logo.addEventListener('click', () => {
      logo.style.transform = 'scale(0.95)';
      setTimeout(() => {
        logo.style.transform = 'scale(1)';
      }, 150);
    });
  }
  
  // Add hover effect to coming soon text
  const comingSoonText = document.querySelector('.coming-soon-text h2');
  if (comingSoonText) {
    comingSoonText.addEventListener('mouseenter', () => {
      comingSoonText.style.textShadow = '0 0 30px rgba(220, 38, 38, 0.8)';
    });
    
    comingSoonText.addEventListener('mouseleave', () => {
      comingSoonText.style.textShadow = '0 0 20px rgba(220, 38, 38, 0.5)';
    });
  }
});