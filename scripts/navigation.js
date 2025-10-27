/**
 * Modern Mobile Navigation & Image Lightbox
 * Clean, accessible hamburger menu with smooth animations
 * Full-screen image viewer with captions
 * Version: 2.1
 */

(function() {
  'use strict';
  
  console.log('Navigation script loaded - Version 2.1');

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
        if (window.innerWidth >= 900 && navLinks.classList.contains('open')) {
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

  // Image Lightbox Functionality
  function initImageLightbox() {
    // Check if lightbox already exists
    if (document.getElementById('imageLightbox')) {
      console.log('Lightbox already initialized');
      return;
    }
    
    // Create lightbox HTML
    const lightboxHTML = '<div id="imageLightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">' +
      '<button class="lightbox-close" aria-label="Close image viewer">&times;</button>' +
      '<div class="lightbox-content">' +
      '<img class="lightbox-image" src="" alt="">' +
      '<div class="lightbox-caption"></div>' +
      '</div>' +
      '</div>';
    
    // Add lightbox to body
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    // Get lightbox elements
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Find all images in main content (exclude navigation and footer)
    const images = document.querySelectorAll('main img, .content-section img, .project-figures img, .profile-image');
    
    console.log('Found ' + images.length + ' images to make clickable');
    
    // Add click handlers to all images
    images.forEach(function(img) {
      img.style.cursor = 'pointer';
      img.setAttribute('role', 'button');
      img.setAttribute('tabindex', '0');
      
      img.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openLightbox(img);
      });
      
      // Keyboard accessibility
      img.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(img);
        }
      });
    });
    
    function openLightbox(img) {
      console.log('Opening lightbox for:', img.src);
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      
      // Get caption from alt text or figure caption
      let caption = img.alt;
      
      // Try to find figure caption (compatible with older browsers)
      const figureContainer = img.closest('.figure-container');
      if (figureContainer) {
        const figureCaptionElement = figureContainer.querySelector('.figure-caption');
        if (figureCaptionElement) {
          caption = figureCaptionElement.textContent;
        }
      }
      
      lightboxCaption.textContent = caption;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    }
    
    function closeLightbox() {
      console.log('Closing lightbox');
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    // Close button click
    closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeLightbox();
    });
    
    // Close on background click
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
    
    console.log('Lightbox initialized successfully');
  }

  // Initialize when DOM is ready
  function init() {
    console.log('Initializing navigation and lightbox...');
    initNavigation();
    
    // Add a small delay to ensure all images are loaded
    setTimeout(function() {
      initImageLightbox();
    }, 100);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Also try to reinitialize after window load (for late-loaded content)
  window.addEventListener('load', function() {
    if (!document.getElementById('imageLightbox')) {
      console.log('Reinitializing lightbox after window load');
      initImageLightbox();
    }
  });
})();
