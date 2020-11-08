var mySwiper = document.querySelector('.swiper-container').swiper
mySwiper.slideNext();
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    var mySwiper = new Swiper('.swiper-container', {
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
    })
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
    })
  });
  
  let MenuOn = document.querySelector('is-active');
  let MenuOff = document.querySelector('#burger');

  MenuOff.onclick = function () {
    MenuOn.classList.toggle('#menu')
  }