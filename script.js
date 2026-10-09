// Initialize progress bars when they enter viewport
document.addEventListener('DOMContentLoaded', function() {
  // Animate progress bars on scroll
  const progressBars = document.querySelectorAll('.progress-bar .progress');
  
  const observeProgress = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.style.width;
        progressBar.style.width = '0';
        // Trigger reflow to restart animation
        void progressBar.offsetWidth;
        progressBar.style.width = width;
        observer.unobserve(progressBar);
      }
    });
  };
  
  const progressObserver = new IntersectionObserver(observeProgress, {
    threshold: 0.5
  });
  
  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });
  
  // Add hover effect to skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Add hover effect to lesson cards
  const lessonCards = document.querySelectorAll('.lesson-card';
  
  lessonCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Add hover effect to feature cards
  const featureCards = document.querySelectorAll('.feature-card';
  
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.08)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Navbar background on scroll
  const navbar = document.querySelector('.navbar';
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = '0 1px 5px rgba(0, 0, 0, 0.02)';
    }
  });
});