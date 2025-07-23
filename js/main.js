"use strict";

(function ($) {
  "use strict";

  headerFixed();
  titleLine();
  serviceInfo();
  projectSlider();
  reviewsSlider();
  videoPlayer();
  heroSlider();
  longImg();
  videoPlay();
  timer();
  scrollDown();
  heroParallax();
  map();
  headerMenu();
  scrollDown();
  scrollDownPos();
  aos();
  newsHover(); // mixItUp();
})();

$(window).on("resize", function () {
  longImg();
  titleLine();
  scrollDownPos();
  projectSlider();
});
$(window).on("load", function () {
  masonry();
});
/* Fixed header */

function headerFixed() {
  var state = false;
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= $(".header").innerHeight()) {
      if (!state) {
        state = true;
        $(".header").addClass("fixed");
        $(".header").css({
          top: -$(".header").innerHeight(),
        });
        setTimeout(function () {
          $(".header").css({
            top: 0,
            transition: ".5s ease",
          });
        }, 200);
      }
    } else {
      $(".header").removeAttr("style");
      $(".header").removeClass("fixed");
      state = false;
    }
  });
}
/* Border line for titles */

function titleLine() {
  $(".title").each(function () {
    $(this)
      .next(".js-title-line")
      .css({
        width: $(this).innerWidth() + $(this).offset().left + "px",
      }); // /* For titles in right side */
    // if ($(this).hasClass('js-title-r')) {
    //     $(this).next('.js-title-line-r').css({
    //         'width': ($(window).innerWidth() - $('.container').innerWidth()) / 2 + $(this).innerWidth() + $('.title-wrap').innerWidth() + 30,
    //         'margin-right': -($(window).innerWidth() - $('.container').innerWidth()) / 2 - 30 - $('.title-wrap').innerWidth()
    //     });
    // }
  });
}
/* Visibility for service info */

function serviceInfo() {
  $(".js-service-toggle").on("click", function () {
    if ($(this).hasClass("active")) {
      $(this)
        .removeClass("active")
        .next(".js-service-item__cnt")
        .slideUp("slow", "linear");
    } else {
      $(".js-service-toggle")
        .removeClass("active")
        .next(".js-service-item__cnt")
        .slideUp("slow", "linear");
      $(this)
        .addClass("active")
        .next(".js-service-item__cnt")
        .slideDown("slow", "linear");
    }
  });
}
/* Project slider */

function projectSlider() {
  var swiperProject = new Swiper(".js-project", {
    slidesPerView: 3,
    spaceBetween: 30,
    grid: {
      rows: 2,
      fill: "row",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });
  $(".js-project .swiper-button-next").css({
    right:
      ($(window).innerWidth() -
        $(".js-project .swiper-button-next")
          .closest(".section")
          .find(".container")
          .innerWidth()) /
        2 +
      15,
  });
  $(".js-project .swiper-button-prev").css({
    right:
      ($(window).innerWidth() -
        $(".js-project .swiper-button-prev")
          .closest(".section")
          .find(".container")
          .innerWidth()) /
        2 +
      $(".swiper-button-next").innerWidth() +
      45,
  });
}
/* Reviews slider */

function reviewsSlider() {
  var swiperReview = new Swiper(".js-reviews", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
        spaceBetween: 70,
      },
      1340: {
        slidesPerView: 2,
        spaceBetween: 141,
      },
    },
  });
}
/* Video player */

function videoPlayer() {
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
}

function videoPlay() {
  $(".js-video-btn").on("click", function () {
    $(this).find(".video__play").addClass("hidden");
    $(this)
      .find(".js-video-content")
      .append(
        "<iframe src='" +
          $(this).attr("data-link") +
          "?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
      );
  });
}
/* Hero slider */

function heroSlider() {
  var swiperHero = new Swiper(".js-hero-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}
/* For images, which outside of the container */

function longImg() {
  $(".js-long-img").each(function () {
    $(this).css({
      width:
        (window.innerWidth - $(".container").innerWidth()) / 2 +
        $(this).parent("div").innerWidth() +
        parseInt($(".container").css("padding-right")),
    });

    if ($(this).hasClass("js-img-left")) {
      $(this).css({
        "margin-left":
          -(window.innerWidth - $(".container").innerWidth()) / 2 -
          parseInt($(".container").css("padding-left")),
      });
    }
  });
}
/* Timer */

function timer() {
  var timer;
  var compareDate = new Date();
  compareDate.setDate(compareDate.getDate() + 3);
  timer = setInterval(function () {
    timeBetweenDates(compareDate);
  }, 1000);

  function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
      // Timer done
      clearInterval(timer);
    } else {
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
      hours %= 24;
      minutes %= 60;
      seconds %= 60;
      if (days < 10) $("#days").text("0" + days);
      else $("#days").text(days);
      if (hours < 10) $("#hours").text("0" + hours);
      else $("#hours").text(hours);
      if (minutes < 10) $("#minutes").text("0" + minutes);
      else $("#minutes").text(minutes);
      if (seconds < 10) $("#seconds").text("0" + seconds);
      else $("#seconds").text(seconds);
    }
  }
}
/* Masonry */

function masonry() {
  // init Isotope
  var $grid = $(".js-grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    layoutMode: "packery",
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: ".grid-sizer",
      horizontal: true,
    },
  }); // filter items on button click

  $(".inner-nav").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });
}
/* Scroll down */

function scrollDown() {
  $(".js-scroll-down").on("click", function () {
    var el = $(this);
    var dest = el.attr("href");

    if (dest !== undefined && dest !== "") {
      $("html").animate(
        {
          scrollTop: $(dest).offset().top,
        },
        2000
      );
    }

    return false;
  });
}
/* Scroll down */

function scrollDownPos() {
  $(".js-scroll-down").css({
    left:
      (window.innerWidth -
        $(".js-scroll-down").closest(".hero").find(".container").innerWidth()) /
        2 +
      15,
  });
}
/* Paralax on Demo page */

function heroParallax() {
  if ($(".js-hero").length) {
    $(window).on("scroll", function () {
      $(".js-hero").css({
        transform: "translateY(" + $(window).scrollTop() * 0.3 + "px)",
      });
    });
  }
}
/* Map on contact page */

function initMap() {
  var center = {
    lat: 51.520008,
    lng: 11.404954,
  };
  var map = new google.maps.Map(document.querySelector(".js-map"), {
    zoom: 6,
    center: center,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#102430",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  });
  new google.maps.Marker({
    position: center,
    map: map,
    icon: "images/maps-marker.svg",
  });
}

function map() {
  if ($(".js-map").length > 0) {
    var mapScript = $(
      '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDHS8cBjXUwNpyPHDiwTkXniVmeReTGr38&language=en-EN&callback=initMap" async defer></script>'
    );
    $(".contact-map").append(mapScript);
  }
}
/* Burger menu (responsive) */

function headerMenu() {
  $(".js-header-burger").on("click", function () {
    clearTimeout(window.headerTimeout);
    $(".js-header-inner").addClass("anime");
    window.headerTimeout = setTimeout(function () {
      $(".js-header-inner").removeClass("anime");
    }, 300);

    if ($(this).hasClass("clicked")) {
      $(this).removeClass("clicked");
      $(".js-header-inner").removeClass("active");
    } else {
      $(this).addClass("clicked");
      $(".js-header-inner").addClass("active");
    }
  });
  $(".dropdown-toggle").on("click", function (e) {
    if (window.innerWidth < 1740) {
      e.preventDefault();
      $(this).next(".dropdown-menu").slideToggle("slow");
    }
  });
}

(function () {
  $(document).ready(function () {
    $(".animsition").animsition({
      inClass: "fade-in",
      outClass: "fade-out",
      inDuration: 400,
      outDuration: 200,
      linkElement: ".animsition-link",
      loading: true,
      loadingParentElement: "body",
      loadingClass: "preloader",
      loadingInner:
        '<div class="preloader__spinner">\n\t\t\t\t<span class="preloader__double-bounce"></span>\n\t\t\t\t<span class="preloader__double-bounce preloader__double-bounce--delay"></span>\n\t\t\t</div>',
      timeout: true,
      timeoutCountdown: 500,
      onLoadEvent: true,
      browser: ["animation-duration", "-webkit-animation-duration"],
      overlay: false,
      overlayClass: "animsition-overlay-slide",
      overlayParentElement: "body",
      transition: function transition(url) {
        window.location.href = url;
      },
    });
  });
})();
/* AOS animation */

function aos() {
  AOS.init();
}
/* News hover */

function newsHover() {
  $(".js-news-link").on("mouseenter", function () {
    $(".js-news-img, .js-news-link").removeClass("active");
    $(this).addClass("active");
    $(".js-news-img")
      .eq($(this).closest(".js-news-item").index())
      .addClass("active");
  });
} // function mixItUp() {
//     if($('.js-list').length) {
//         var mixer = mixitup('.js-list', {
//             callbacks: {
//                 onMixEnd: function(){
//                     masonry();
//                 }
//             }
//         });
//     }
// }
