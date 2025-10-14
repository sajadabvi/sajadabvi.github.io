(function(){
  function initializeNavigationToggle(root){
    if(!root) return;
    var toggle = root.querySelector('.nav-toggle');
    var menu = root.querySelector('.nav-links');
    if(!toggle || !menu) return;

    var closeMenu = function(){
      toggle.setAttribute('aria-expanded','false');
      menu.dataset.open = 'false';
    };

    var openMenu = function(){
      toggle.setAttribute('aria-expanded','true');
      menu.dataset.open = 'true';
    };

    toggle.addEventListener('click', function(){
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      if(expanded){
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        closeMenu();
      });
    });

    document.addEventListener('click', function(event){
      if(!menu.dataset.open || menu.dataset.open !== 'true') return;
      if(root.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', function(event){
      if(event.key === 'Escape'){
        closeMenu();
      }
    });

    closeMenu();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', function(){
      initializeNavigationToggle(document.querySelector('header nav'));
    });
  } else {
    initializeNavigationToggle(document.querySelector('header nav'));
  }
})();
