$(document).ready(function(){function e(){var e=$(this).scrollTop();Math.abs(s-e)<=l||(e>s&&e>a?$("header").removeClass("nav-down").addClass("nav-up"):e+$(window).height()<$(document).height()&&$("header").removeClass("nav-up").addClass("nav-down"),s=e)}$(function(){$.scrollify({section:".brand-item",scrollbars:!1,overflowScroll:!1})}),$(document).on("click",'.brand-links a[href^="#"]',function(e){var o=$(this).attr("href"),s=$(o);if(0!==s.length){e.preventDefault();var l=s.offset().top-100;$("body, html").animate({scrollTop:l})}}),$(".open-search").click(function(){$(this).removeClass("show"),$(".search-input").focus(),$(".search-box").toggleClass("show")}),$(".filters > a").click(function(){event.preventDefault(),$(".filters > a").removeClass("active"),$(this).addClass("active")}),$(".open-map").click(function(){$(".modal-box").removeClass("show"),$(".map").show()}),$(".open-map.kiev").click(function(){$(".modal-box").addClass("show"),$("#map-odessa").hide()}),$(".open-map.odessa").click(function(){$(".modal-box").addClass("show"),$("#map-kiev").hide()}),$("a.open-mobil").click(function(){event.preventDefault(),$(this).toggleClass("show"),$(".mobil-menu").toggleClass("open")}),$(".main-page-slider").lightSlider({item:1,slideMove:1,slideMargin:0,mode:"slide",speed:1e3,pause:6500,useCSS:!0,cssEasing:"cubic-bezier(0.19, 1, 0.22, 1)",auto:!0,loop:!0,controls:!0,prevHtml:"",nextHtml:"",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40}),$(".slider-brand").lightSlider({item:1,slideMove:1,mode:"slide",useCSS:!0,cssEasing:"cubic-bezier(0.19, 1, 0.22, 1)",speed:1e3,auto:!1,loop:!0,controls:!0,prevHtml:"",nextHtml:"",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40}),$(".product-slider").lightSlider({item:1,slideMove:1,mode:"slide",useCSS:!0,cssEasing:"cubic-bezier(0.19, 1, 0.22, 1)",speed:1e3,auto:!1,loop:!0,controls:!0,prevHtml:"",nextHtml:"",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,onSliderLoad:function(){$(".product-slider").Chocolat({loop:!0,linkImages:!1,firstImage:1,imageSize:"contain"})}});var o,s=0,l=5,a=$("header").outerHeight();$(window).scroll(function(e){o=!0}),setInterval(function(){o&&(e(),o=!1)},250)});
//# sourceMappingURL=./scripts-min.js.map