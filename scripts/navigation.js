/**
 * Modern Mobile Navigation
 * Clean, accessible hamburger menu with smooth animations
 */

(function() {
  'use strict';

  function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (!hamburger || !navLinks) {
      console.warn('Navigation elements not found');
      return;
    }

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
      const isOpen = navLinks.classList.contains('open');
      
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function() {
        closeMenu();
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideNav = hamburger.contains(event.target) || navLinks.contains(event.target);
      
      if (!isClickInsideNav && navLinks.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });

    // Handle window resize - close menu if switching to desktop view
    let resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        if (window.innerWidth >= 768 && navLinks.classList.contains('open')) {
          closeMenu();
        }
      }, 250);
    });

    function openMenu() {
      navLinks.classList.add('open');
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close menu');
    }

    function closeMenu() {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open menu');
    }

    // Set initial state
    closeMenu();

    // Highlight active page
    highlightActivePage();
  }

  function highlightActivePage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(function(link) {
      const linkPath = new URL(link.href).pathname;
      
      // Normalize paths (remove trailing slash for comparison)
      const normalizedCurrent = currentPath.replace(/\/$/, '') || '/';
      const normalizedLink = linkPath.replace(/\/$/, '') || '/';
      
      if (normalizedCurrent === normalizedLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }
})();
