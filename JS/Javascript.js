$(document).ready(function() {

  $("a").on('click', function(event) {
    if (this.hash !== "" && location.pathname === this.pathname) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 100
      }, 800, function() {
        history.pushState(null, null, hash);
      });
    }
  });


  if (window.location.hash) {
    var hash = window.location.hash;
  
    setTimeout(function() {
      if ($(hash).length) {
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 100
        }, 800);
      }
    }, 100);
  }

});



const hamburger = document.querySelector('.hamburger');
const menuLinks = document.querySelector('.menu-links');

hamburger.addEventListener('click', () => {
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', !isExpanded);
  menuLinks.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (menuLinks.classList.contains('active') &&
      !menuLinks.contains(e.target) &&
      !hamburger.contains(e.target)) {
    menuLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

window.addEventListener('scroll', () => {
  if (menuLinks.classList.contains('active')) {
    menuLinks.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  }
});