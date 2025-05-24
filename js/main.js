// Main JavaScript file for Bruno Teles website

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const navLinks = document.querySelectorAll('.nav-link');
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = darkModeToggle.querySelector('i');
const projectFilters = document.querySelectorAll('.project-filter');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
  let current = '';
  const sections = document.querySelectorAll('section');
  const headerHeight = header.offsetHeight;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - headerHeight - 100;
    const sectionHeight = section.offsetHeight;
    
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Dark mode toggle
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
  document.body.classList.add('dark-mode');
  darkModeIcon.classList.remove('fa-moon');
  darkModeIcon.classList.add('fa-sun');
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeIcon.classList.remove('fa-sun');
    darkModeIcon.classList.add('fa-moon');
  }
});

// Project filtering
projectFilters.forEach(filter => {
  filter.addEventListener('click', () => {
    // Remove active class from all filters
    projectFilters.forEach(f => f.classList.remove('active'));
    
    // Add active class to clicked filter
    filter.classList.add('active');
    
    const filterValue = filter.getAttribute('data-filter');
    
    // Show/hide projects based on filter
    projectCards.forEach(card => {
      if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Form validation and submission
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (!name || !email || !phone || !subject || !message) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um endereço de e-mail válido.');
      return;
    }
    
    // Phone validation (Brazilian format)
    const phoneRegex = /^\(\d{2}\)\s\d{1}\s\d{4}-\d{4}$/;
    if (!phoneRegex.test(phone) && !phone.match(/^\d{10,11}$/)) {
      alert('Por favor, insira um número de telefone válido no formato (XX) X XXXX-XXXX ou apenas números.');
      return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    
    // Simulate API call with timeout
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      contactForm.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1500);
  });
}

// Phone mask for contact form
const phoneInput = document.getElementById('phone');
if (phoneInput) {
  phoneInput.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length <= 11) {
      if (value.length > 2 && value.length <= 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length > 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(3, 7)}-${value.slice(7)}`;
      }
    }
    
    e.target.value = value;
  });
}

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('animate-fade-in');
    }
  });
};

// Add animate-on-scroll class to elements
document.querySelectorAll('.service-card, .project-card, .testimonial-card').forEach(element => {
  element.classList.add('animate-on-scroll');
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize testimonial slider (simplified version)
const testimonialSlider = {
  currentSlide: 0,
  slides: document.querySelectorAll('.testimonial-card'),
  prevBtn: document.querySelector('.testimonial-control.prev'),
  nextBtn: document.querySelector('.testimonial-control.next'),
  
  init() {
    if (this.slides.length <= 3) return;
    
    // Hide slides beyond the first 3
    for (let i = 3; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }
    
    // Add event listeners for controls
    this.prevBtn.addEventListener('click', () => this.prevSlide());
    this.nextBtn.addEventListener('click', () => this.nextSlide());
  },
  
  prevSlide() {
    if (this.currentSlide <= 0) return;
    
    this.slides[this.currentSlide + 2].style.display = 'none';
    this.slides[this.currentSlide - 1].style.display = 'block';
    this.currentSlide--;
  },
  
  nextSlide() {
    if (this.currentSlide >= this.slides.length - 3) return;
    
    this.slides[this.currentSlide].style.display = 'none';
    this.slides[this.currentSlide + 3].style.display = 'block';
    this.currentSlide++;
  }
};

// Initialize testimonial slider
testimonialSlider.init();

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
  // Add ARIA attributes to interactive elements
  const interactiveElements = document.querySelectorAll('button, a, input, select, textarea');
  
  interactiveElements.forEach(element => {
    if (!element.hasAttribute('aria-label') && !element.hasAttribute('aria-labelledby')) {
      if (element.textContent.trim()) {
        element.setAttribute('aria-label', element.textContent.trim());
      }
    }
  });
});
