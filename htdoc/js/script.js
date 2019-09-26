// Header menu hover
$('.nav__list .nav__list__link').on("mouseover", function(){
    $('.nav__list .nav__list__link').addClass('not--hover');
    $(this).removeClass('not--hover');
    $(this).addClass('hover');
});

$('.nav__list .nav__list__link').on("mouseleave", function(){
    $('.nav__list .nav__list__link').removeClass('hover');
    $('.nav__list .nav__list__link').removeClass('not--hover');
});


// Owl carousel
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


// Show/Hide nav top button
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
        $('.nav--top').addClass('active');
    }
    else{
        $('.nav--top').removeClass('active');
    }
});


// Isotope Gallery
// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'fitRows'
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
};


// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// change active class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});


// bind filter on select change
$('.filters-select').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});


// Gallery modal



$('.btn-modal-gallery').on("click", function(e){
  e.preventDefault();
  var target = $(this).attr("data-target");
  
  //alert(target);

    // $('.gallery__modal'+ target).modal({

    // });

    // $('.gallery__modal').hide();

    // $('.gallery__modal'+ target).show();

    // $('.gallery__modal'+ target).modal({

    // });
    



});