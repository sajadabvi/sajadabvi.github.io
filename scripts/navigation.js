(function(){
  'use strict';

  var NAV_SELECTOR = '[data-site-nav]';
  var TOGGLE_SELECTOR = '[data-site-nav-toggle]';
  var MENU_SELECTOR = '[data-site-nav-menu]';
  var DESKTOP_QUERY = '(min-width: 960px)';

  function forEach(list, callback){
    Array.prototype.forEach.call(list, callback);
  }

  function getMediaQuery(){
    if (typeof window !== 'undefined' && typeof window.matchMedia === 'function'){
      return window.matchMedia(DESKTOP_QUERY);
    }
    return null;
  }

  function initNav(nav, index){
    if (!nav) return;

    var toggle = nav.querySelector(TOGGLE_SELECTOR);
    var menu = nav.querySelector(MENU_SELECTOR);

    if (!toggle || !menu) return;

    if (!menu.id){
      menu.id = 'site-nav-menu-' + (index + 1);
    }

    toggle.setAttribute('aria-controls', menu.id);

    var mediaQuery = getMediaQuery();

    function isDesktop(){
      if (mediaQuery) return mediaQuery.matches;
      return window.innerWidth >= 960;
    }

    function setState(open){
      var desktop = isDesktop();
      var shouldOpen = open && !desktop;
      var shouldHide = !desktop && !shouldOpen;

      nav.dataset.open = shouldOpen ? 'true' : 'false';
      toggle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
      menu.hidden = shouldHide;
      menu.setAttribute('aria-hidden', shouldHide ? 'true' : 'false');
    }

    function openMenu(){ setState(true); }
    function closeMenu(){ setState(false); }

    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded){
        closeMenu();
      } else {
        openMenu();
      }
    });

    forEach(menu.querySelectorAll('a'), function(link){
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function(event){
      if (nav.dataset.open !== 'true') return;
      if (nav.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', function(event){
      var key = event.key || event.keyCode;
      if (key === 'Escape' || key === 'Esc' || key === 27){
        if (nav.dataset.open === 'true'){
          closeMenu();
          if (typeof toggle.focus === 'function'){
            toggle.focus();
          }
        }
      }
    });

    if (mediaQuery){
      var mediaHandler = function(event){
        if (event.matches){
          closeMenu();
        } else if (toggle.getAttribute('aria-expanded') !== 'true'){
          setState(false);
        }
      };

      if (typeof mediaQuery.addEventListener === 'function'){
        mediaQuery.addEventListener('change', mediaHandler);
      } else if (typeof mediaQuery.addListener === 'function'){
        mediaQuery.addListener(mediaHandler);
      }
    }

    setState(false);
  }

  function init(){
    var navs = document.querySelectorAll(NAV_SELECTOR);
    if (!navs.length) return;
    forEach(navs, initNav);
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
