//Loader

$(window).bind("load", function () {
  $(".loader-screen").hide();
});

  //scroll-to-top
  var btn = $('#button');

  $(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
      btn.addClass('show');
  } else {
      btn.removeClass('show');
  }
  });

  btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
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


$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 10) {
    $(".main-header1").addClass("sticky");
  } else {
    $(".main-header1").removeClass("sticky");
  }
});




const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu1');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.menu1 li a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('show');
      });
    });

    // Optional: Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('show');
      }
    });


//On Scroll active menu

const menuLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('section');

    // Smooth scroll on click
    menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Immediate highlight
        menuLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Highlight on scroll
    window.addEventListener('scroll', () => {
      let currentSection = sections[0].getAttribute('id');
      let minDistance = Infinity;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top); // distance from top of viewport

        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section.getAttribute('id');
        }
      });

      menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
          link.classList.add('active');
        }
      });
    });


   document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
});



// Optional: Adjust column count based on screen size
function adjustMasonry() {
    const masonry = document.querySelector('.masonry');
    if(window.innerWidth < 768){
        masonry.style.columnCount = 1;
    } else if(window.innerWidth < 1024){
        masonry.style.columnCount = 2;
    } else {
        masonry.style.columnCount = 3;
    }
}

window.addEventListener('resize', adjustMasonry);
window.addEventListener('load', adjustMasonry);


//popup
$(document).ready(function () {
    // Open the popup and disable background scrolling
    $(".open_popup").click(function () {
        $(this).parent(".popup_main").children(".popup_body").addClass("popup_body_show");
        $("body").addClass("no-scroll");
    });

    // Close the popup and enable background scrolling
    $(".popup_close, .popup_back").click(function () {
        $(".popup_body").removeClass("popup_body_show");
        $("body").removeClass("no-scroll");
    });
});


//Theme toggle
function darkMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "dark-mode";
}
function lightMode() {
  let element = document.body;
  let content = document.getElementById("DarkModetext");
  element.className = "light-mode";
}

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
      step: function () {
        element.html(Math.floor(this.countNum) + html);
      },
      complete: function () {
        element.html(this.countNum + html);
      }
    });
  }

}

//When the document is ready
$(function () {
  //This is triggered when the
  //user scrolls the page
  $(window).scroll(function () {
    //Checking if each items to animate are 
    //visible in the viewport
    $("h2[data-max]").each(function () {
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





  // Right click / Inspect Element off & Ctrl+U off

  // document.addEventListener('contextmenu', event => event.preventDefault());

  // document.onkeydown = function (e) {
  //   if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {//Alt+c, Alt+v will also be disabled sadly.
  //     alert('You cannot view Source Code !!!');
  //   }
  //   return false;
  // };

});

