// Header menu hover
function menuHover () {
  $('.nav__list .nav__list__link').on("mouseover", function(){
    $('.nav__list .nav__list__link').addClass('not--hover');
    $(this).removeClass('not--hover');
    $(this).addClass('hover');
  });

  $('.nav__list .nav__list__link').on("mouseleave", function(){
      $('.nav__list .nav__list__link').removeClass('hover');
      $('.nav__list .nav__list__link').removeClass('not--hover');
  });
}

// Show/Hide nav top button
function scrollTop () {
  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
        $('.nav--top').addClass('active');
    }
    else{
        $('.nav--top').removeClass('active');
    }
  });
}

// Owl carousel
function carousel () {
    $(document).ready(function(){
      $("#testimonial__carousel").owlCarousel({
          autoPlay: 3000,
          loop: true,
        margin: 30,
        item: 3,
        // responsiveClass: true,
        responsive:{
            0:{
                items: 1,
                dots: true
            },
            768:{
                items: 2,
                dots: true
            },
            1000:{
                items: 3,
                dots: true
            }
        }
      });
  });
}


// Gallery filter
function galleryFilter () {
  // check if the button is click
  $('.filters-button-group button').on('click', function(){
    var button = $(this).data('filter');

    // show all album
    $('.gallery-item').show();

    // set album = .gallery-item
    var album = $('.gallery-item');

    $.each(album, function (index, value) {

      // Break the loop if click button all
      if(button == 'all'){
        return;
      }

      // hide all album that is not selected
      if ($(value).data('category') != button) {
        $(value).hide();
      }
    });
  });
}


// Smooth Scrolling
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.not('a[href*="#image-slide"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});


$(function () {
  if($('.nav--top').length > 0) {
    scrollTop();
  }

  if($('.nav__list').length > 0) {
    menuHover();
  }

  if($('#testimonial__carousel').length > 0) {
    carousel();
  }

  if($('.gallery-item').length > 0) {
    galleryFilter();
  }
})