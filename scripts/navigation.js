(function(){
  function initializeNavigationToggle(root){
    if(!root) return;

    var toggle = root.querySelector('[data-nav-toggle]') ||
      root.querySelector('.nav-toggle') ||
      root.querySelector('#menuToggle') ||
      root.querySelector('.hamburger');

    var menu = root.querySelector('[data-nav-menu]') ||
      root.querySelector('.nav-links') ||
      document.getElementById('mobileMenu');

    if(!toggle || !menu) return;

    var setMenuState = function(open){
      var isOpen = Boolean(open);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menu.dataset.open = isOpen ? 'true' : 'false';
      menu.classList.toggle('open', isOpen);
    };

    var closeMenu = function(){ setMenuState(false); };
    var openMenu = function(){ setMenuState(true); };

    toggle.addEventListener('click', function(){
      var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      if(isExpanded){
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(event){
      if(!(menu.dataset.open === 'true' || menu.classList.contains('open'))) return;
      if(root.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', function(event){
      if(event.key === 'Escape'){
        closeMenu();
        if(typeof toggle.focus === 'function'){
          toggle.focus();
        }
      }
    });

    setMenuState(false);
  }

  var activateNavigation = function(){
    document.querySelectorAll('header nav').forEach(function(nav){
      initializeNavigationToggle(nav);
    });
  };

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', activateNavigation);
  } else {
    activateNavigation();
  }
})();
