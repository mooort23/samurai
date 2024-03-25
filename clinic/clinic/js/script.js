// sp-nav
$('.menu-open').on('click', function(){
  $('.sp-nav-menu').css('display', 'block');
});

$('.menu-close').on('click', function(){
  $('.sp-nav-menu').css('display', 'none');
});

// carousel
$('.carousel').slick({
  autoplay: true,
  dots: false,
  infinite: true,
  autoplaySpeed: 3300,
  arrows: false,
  fade: false,
})

// carousel
$('.b-carousel').slick({
  autoplay: true,
  dots: false,
  infinite: true,
  autoplaySpeed: 3300,
  arrows: false,
  fade: false,
})

// back-btn
$(window).on('scroll', function() {
  if($(window).scrollTop() >= 10) {
    $('#back-btn').css('display', 'inline');
  } else {
    $('#back-btn').css('display', 'none');
  }
});