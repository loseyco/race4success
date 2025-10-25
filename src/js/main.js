// Modern Racing Landing Page JavaScript
class ModernRacingPage {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollEffects();
    this.setupAnimations();
    this.setupInteractions();
    this.setupSmoothScrolling();
  }

  setupScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.98)';
        nav.style.borderBottomColor = 'rgba(220, 38, 38, 0.2)';
      } else {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.borderBottomColor = 'rgba(17, 17, 17, 1)';
      }
    });

    // Intersection Observer for animations
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

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .section-header').forEach(el => {
      observer.observe(el);
    });
  }

  setupAnimations() {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .feature-card, .section-header {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
      }
      
      .feature-card.animate-in, .section-header.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
      
      .hero-title .title-line {
        opacity: 0;
        transform: translateY(20px);
        animation: slideInUp 0.8s ease-out forwards;
      }
      
      .hero-title .title-line:nth-child(1) {
        animation-delay: 0.2s;
      }
      
      .hero-title .title-line:nth-child(2) {
        animation-delay: 0.4s;
      }
      
      .hero-title .title-line:nth-child(3) {
        animation-delay: 0.6s;
      }
      
      @keyframes slideInUp {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }

  setupInteractions() {
    // Button hover effects
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
      });
    });

    // Feature card interactions
    document.querySelectorAll('.feature-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'var(--red)';
        card.style.boxShadow = '0 10px 25px rgba(220, 38, 38, 0.1)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.borderColor = 'var(--black-lighter)';
        card.style.boxShadow = 'none';
      });
    });

    // Logo click effect
    const logo = document.querySelector('.logo-text');
    if (logo) {
      logo.addEventListener('click', () => {
        logo.style.transform = 'scale(0.95)';
        setTimeout(() => {
          logo.style.transform = 'scale(1)';
        }, 150);
      });
    }
  }

  setupSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed nav
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Utility methods
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ModernRacingPage();
  
  // Add entrance animation
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      hero.style.transition = 'all 1s ease-out';
      hero.style.opacity = '1';
      hero.style.transform = 'translateY(0)';
    }, 100);
  }
  
  // Console log for development
  console.log('🏁 Race4Success - Modern Racing Platform loaded');
});

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ModernRacingPage };
}