(function(){
  var NAV_SELECTOR = 'header nav';
  var raf = window.requestAnimationFrame || function(cb){ return window.setTimeout(cb, 16); };
  var state = {
    nav: null,
    toggle: null,
    menu: null,
    onToggleClick: null,
    onMenuClick: null,
    onDocumentClick: null,
    onKeydown: null
  };

  function findMenuContainer(nav){
    if(!nav) return null;
    var existing = nav.querySelector('.nav-links');
    if(existing) return existing;
    var children = Array.prototype.slice.call(nav.children);
    for(var i = children.length - 1; i >= 0; i--){
      var child = children[i];
      if(child && child.querySelectorAll && child.querySelectorAll('a[href]').length >= 2){
        return child;
      }
    }
    return null;
  }

  function ensureToggle(nav, menu){
    if(!nav || !menu) return null;
    var toggle = nav.querySelector('.nav-toggle');
    if(toggle) return toggle;
    toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span class="sr-only">Toggle navigation</span><span class="nav-toggle-icon"><span></span></span>';
    nav.insertBefore(toggle, menu);
    return toggle;
  }

  function ensureMenuId(menu){
    if(!menu) return '';
    if(menu.id) return menu.id;
    var baseId = 'primary-navigation';
    var id = baseId;
    var index = 1;
    while(document.getElementById(id)){
      id = baseId + '-' + index++;
    }
    menu.id = id;
    return id;
  }

  function findClosestLink(element, stopAt){
    var node = element;
    while(node && node !== stopAt){
      if(node.tagName && node.tagName.toLowerCase() === 'a' && node.hasAttribute('href')){
        return node;
      }
      node = node.parentElement;
    }
    return null;
  }

  function teardown(){
    if(!state.nav || !state.toggle || !state.menu) return;
    if(state.onToggleClick){
      state.toggle.removeEventListener('click', state.onToggleClick);
    }
    if(state.onMenuClick){
      state.menu.removeEventListener('click', state.onMenuClick);
    }
    if(state.onDocumentClick){
      document.removeEventListener('click', state.onDocumentClick);
    }
    if(state.onKeydown){
      document.removeEventListener('keydown', state.onKeydown);
    }
    state.nav = null;
    state.toggle = null;
    state.menu = null;
    state.onToggleClick = null;
    state.onMenuClick = null;
    state.onDocumentClick = null;
    state.onKeydown = null;
  }

  function enhanceNav(){
    var nav = document.querySelector(NAV_SELECTOR);
    if(!nav) return;
    var menu = findMenuContainer(nav);
    if(!menu) return;

    nav.classList.add('nav-enhanced');
    if(!menu.classList.contains('nav-links')){
      menu.classList.add('nav-links');
    }

    var toggle = ensureToggle(nav, menu);
    if(!toggle) return;

    var menuId = ensureMenuId(menu);
    toggle.setAttribute('aria-controls', menuId);

    menu.setAttribute('data-open', 'false');
    toggle.setAttribute('aria-expanded', 'false');

    teardown();

    function closeMenu(){
      if(!menu) return;
      menu.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    }

    function openMenu(){
      if(!menu) return;
      menu.setAttribute('data-open', 'true');
      toggle.setAttribute('aria-expanded', 'true');
    }

    state.onToggleClick = function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      if(expanded){
        closeMenu();
      } else {
        openMenu();
      }
    };

    state.onMenuClick = function(event){
      var anchor = findClosestLink(event.target, menu);
      if(anchor){
        closeMenu();
      }
    };

    state.onDocumentClick = function(event){
      if(toggle.getAttribute('aria-expanded') !== 'true') return;
      if(nav.contains(event.target)) return;
      closeMenu();
    };

    state.onKeydown = function(event){
      if(event.key === 'Escape'){
        closeMenu();
      }
    };

    toggle.addEventListener('click', state.onToggleClick);
    menu.addEventListener('click', state.onMenuClick);
    document.addEventListener('click', state.onDocumentClick);
    document.addEventListener('keydown', state.onKeydown);

    state.nav = nav;
    state.toggle = toggle;
    state.menu = menu;
  }

  function scheduleEnhancement(attempts){
    if(attempts <= 0) return;
    raf(function(){
      enhanceNav();
      if(!state.nav || !state.toggle || !state.menu){
        scheduleEnhancement(attempts - 1);
      }
    });
  }

  function observeMutations(){
    var observer = new MutationObserver(function(){
      var nav = document.querySelector(NAV_SELECTOR);
      if(!nav){
        teardown();
        return;
      }
      if(!nav.classList.contains('nav-enhanced')){
        enhanceNav();
        return;
      }
      var toggle = nav.querySelector('.nav-toggle');
      var menu = nav.querySelector('.nav-links');
      if(!toggle || !menu){
        enhanceNav();
      }
    });
    observer.observe(document.documentElement, {childList:true, subtree:true});

    var attributeObserver = new MutationObserver(function(mutations){
      for(var i = 0; i < mutations.length; i++){
        var target = mutations[i].target;
        if(target && target.matches && target.matches(NAV_SELECTOR)){
          if(!target.classList.contains('nav-enhanced')){
            enhanceNav();
          }
        }
      }
    });
    attributeObserver.observe(document.documentElement, {subtree:true, attributes:true, attributeFilter:['class']});
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      enhanceNav();
      scheduleEnhancement(5);
      observeMutations();
    });
  } else {
    enhanceNav();
    scheduleEnhancement(5);
    observeMutations();
  }
})();
