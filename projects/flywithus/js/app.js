document.addEventListener("DOMContentLoaded", function () {
    // mobile nav
    var button = document.getElementById("nav-btn");
    var nav = document.querySelector("nav");
    var faIcon = document.querySelector("i");

    button.addEventListener("click", function () {
        nav.classList.toggle("visible");
        faIcon.classList.toggle("fa-bars");
        faIcon.classList.toggle("fa-times");

        var menuList = document.querySelectorAll('.menu li');

        for (var i = 0; i < menuList.length; i++) {
            var children = menuList[i].addEventListener('click', closeNav, false);

            function closeNav() {
                nav.classList.remove("visible");
            }
        }
    })
    
    window.addEventListener('resize', function () {
    if (window.matchMedia("(min-width: 769px)").matches) {
        nav.classList.remove("visible");
        }
});


  $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
                
                ]
  });
  
  $('.quote').hide();
$('.slick-current').find('.quote').show();
  
  function displayQuotes() {
    $(".slick-slide").click(function() {
      if ($('.slick-slide').hasClass('slick-current')) {
        $('.slick-slide').find('.quote').hide();
         $('.slick-current').find('.quote').show();
      } 
      
        

    });
  };

  displayQuotes();
});
                  