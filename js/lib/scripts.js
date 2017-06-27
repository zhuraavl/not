

var phoneInput = document.querySelector('.phone-input-footer')
phoneInput.addEventListener('keydown', function(event) {
   if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
    var mask = '38 (111) 111-11-11'; // Задаем маску
 
    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        var currentString = this.value;
        var currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (var i=currentLength; i<mask.length; i++) {
                if (mask[i] == '1') {
                    this.value = currentString + event.key;
                    break;
                }
                currentString += mask[i];
                }
            }
        }
    } 
});






$(document).ready(function () {





  $(document).on('click', '.brand-links a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top - 0;

    // animated top scrolling
    $('body, html').animate({
      scrollTop: pos
    });
  });


  $(".open-search").click(function () {
    $(".mobil-menu").removeClass("open");
    $(this).removeClass("show");
    $(".search-input").focus();
    $(".search-box").toggleClass("show");
  });
  $("button.open-filter-mobil").click(function () {
    $(this).toggleClass("show");
    $(".catalog-filter").slideToggle();
  });
  $("button.close-sales").click(function () {
    $(".have-sales").addClass('hidden-sales');
  });
  $(".filters > a").click(function () {
    event.preventDefault();
    $(".filters > a").removeClass('active');
    $(this).addClass('active');
  });
  $(".open-map").click(function () {
    $(".modal-box").removeClass("show");
    $(".map").show();
  });
  $(".open-map.kiev").click(function () {
    $(".modal-box").addClass("show")
    $("#map-odessa").hide();
  });
  $(".open-map.odessa").click(function () {
    $(".modal-box").addClass("show");
    $("#map-kiev").hide();
  });
  $("a.open-mobil").click(function () {
    event.preventDefault();
    $(".search-box").removeClass("show");
    $(this).toggleClass("show");
    $(".mobil-menu").toggleClass("open");
  });


  $(".main-page-slider").lightSlider({
    item: 1,
    slideMove: 1,
    slideMargin: 0,
    mode: "slide",
    speed: 2000,
    pause: 6500,
    useCSS: true,
    cssEasing: 'cubic-bezier(0.77, 0, 0.175, 1)',
    auto: true,
    loop: true,
    controls: true,
    prevHtml: '',
    nextHtml: '',
    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40
  });
  $(".slider-brand").lightSlider({
    item: 1,
    slideMove: 1,
    mode: "slide",
    useCSS: true,
    cssEasing: 'cubic-bezier(0.77, 0, 0.175, 1)',
    speed: 2000,
    pause: 5000,
    auto: true,
    loop: true,
    controls: false,
    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          controls: true,
          auto: false,
        }
    }
  ]
  });
  $(".product-slider").lightSlider({
    item: 1,
    slideMove: 1,
    mode: "slide",
    useCSS: true,
    cssEasing: 'cubic-bezier(0.77, 0, 0.175, 1))',
    speed: 2000,
    auto: false,
    loop: true,
    controls: true,
    prevHtml: '',
    nextHtml: '',
    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,
    onSliderLoad: function () {
      $('.product-slider').Chocolat({
        loop: true,
        linkImages: false,
        firstImage: 1,
        imageSize: 'contain'
      });
    }
  });




  // add elements on mobil to brand
  if ($(window).width() < 900) {} else {
    $(".slider-brand-box li:nth-child(2)").remove();
  }








  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('header').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-top").addClass('show');
      $(".open-filter-mobil").addClass('to-top');
    } else {
      $(".scroll-top").removeClass('show');
      $(".open-filter-mobil").removeClass('to-top');
    }
  });

  
  $(".scroll-top").click(function () {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $('body').offset().top
    }, 1000);
  });
  $(".open-filter-mobil").click(function () {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: $('body').offset().top
    }, 1000);
  });







});

