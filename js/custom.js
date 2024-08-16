//Loader

$(window).bind("load", function () {
    $(".loader-screen").hide();
});




//Menu toggle responsive

$(".menu-toggle").click(function () {
    $(".menu").toggleClass("slide-left");
    $(this).find('i').toggleClass('fa-bars fa-times')
});

//Sticky-Menu

$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
      $(".main-header").addClass("sticky");
  } else {
      $(".main-header").removeClass("sticky");
  }
});



//counter

function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
  }
  
  function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        //duration 5 seconds
        duration: 5000,
        easing: 'linear',
        step: function() {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
          element.html(this.countNum + html);
        }
      });
    }
  
  }
  
  //When the document is ready
  $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
      //Checking if each items to animate are 
      //visible in the viewport
      $("h2[data-max]").each(function() {
        inVisible($(this));
      });
    })
  });
  


$(document).ready(function () {

    //Banner-slider

    $('.banner-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,

            },
            1000: {
                items: 1,
            }
        }
    })


    
    //map-container

    $('.map-container')
        .click(function () {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('clicked')
        });


        //Right click / Inspect Element off & Ctrl+U off

        document.addEventListener('contextmenu', event => event.preventDefault());

        document.onkeydown = function(e) {
          if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
              alert('You cannot view Source Code !!!');
          }
          return false;
        };



});

