
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/magazyn-kavy-ta-chayu.webp' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


// ВІДСТЕЖЕННЯ ВОРОНКИ ПРОДАЖІВ (Google Analytics 4)
// 1) перегляд сторінки -> 2) click_catalog -> 3) click_order -> 4) generate_lead
(function () {
  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  document.querySelectorAll('.js-track').forEach(function (link) {
    link.addEventListener('click', function () {
      track(link.dataset.event, { button_place: link.dataset.place });
    });
  });

  var form = document.getElementById('order-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var product = document.getElementById('product').value;
      track('generate_lead', { product_name: product, currency: 'UAH' });
      form.reset();
      document.getElementById('order-success').hidden = false;
    });
  }
})();
