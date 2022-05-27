$(window).on('scroll', function () {
  if ($(window).scrollTop() > 50) {
    $header.addClass('scrolled');
    $crown.slideUp(200);
  } else {
    $header.removeClass('scrolled');
    $crown.slideDown(200);
  }
});