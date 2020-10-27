(function($){
	'use strict';

    // read more text view
    $(document).ready(function() {
        $(".read").click(function() {
            $(this).prev().toggle();
            $(this).siblings('.dots').
            toggle();
            if($(this).text()=='View'){
                $(this).text('Viewed');
            }
            else {
                $(this).text('View'); 
            }
        });
    });

     //menu side bar
     $('.menu-bar').on('click', function(){
        $('body,header,.menu-bar,.menu-items,.overlay').addClass('active');
    });

    $('.crose-bar').on('click', function(){
        $('body,header,.menu-bar,.menu-items,.overlay').removeClass('active');
    });

    $('.overlay').on('click', function(){
        $('body,header,.menu-bar,.menu-items,.overlay').removeClass('active');
    })

    // notification bar
    $('.notif-icon').on('click' , function(){
        $('body,header,.notif-icon,.overlays,.notification').addClass('active');
    });

    $('.close-mobile').on('click', function(){
        $('body,header,.notif-icon,.overlays,.notification').removeClass('active');
    });

    $('.overlays').on('click', function(){
        $('body,header,.notif-icon,.notification,.overlays').removeClass('active');
    })

    // menu icon-related
    $(".list-item>li>.m-submenu").parent("li").children("a").addClass("icon-down");

    //mobile drodown menu display
	$('.menu-list ul.list-item li a').on('click', function(e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(500,"swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(500,"swing");
            element.siblings('li').children('ul').slideUp(500,"swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(500,"swing");
        }
	}); 


    // drop down menu width overflow problem fix
    $('ul').parent().on('hover', function() {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });    
        }
    });
    
    // mouse hover event
    $('.list-menu ul li').hover(function() {
        $(this).children('.mega-menu').stop(true, false, true).fadeToggle(300);
    });

    // banner slider
    var swiper = new Swiper('.banner-slider', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        navigation: {
            nextEl: '.banner-button-next',
            prevEl: '.banner-button-prev',
        },
    });

    // trending products slider
    var swiper = new Swiper('.trending-slider', {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
            nextEl: '.trending-button-next',
            prevEl: '.trending-button-prev',
        },
        breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
			425: {
				slidesPerView: 2,
			}
		},
    });


    // offered products slider
    var swiper = new Swiper('.offered-slider', {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
            nextEl: '.offered-button-next',
            prevEl: '.offered-button-prev',
        },
        breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
			425: {
				slidesPerView: 2,
			}
		},
    });

     // popular products slider
     var swiper = new Swiper('.popular-slider', {
        slidesPerView: 6,
        spaceBetween: 30,
        navigation: {
            nextEl: '.popular-button-next',
            prevEl: '.popular-button-prev',
        },
        breakpoints: {
			1024: {
				slidesPerView: 5,
			},
			768: {
				slidesPerView: 4,
			},
			576: {
				slidesPerView: 3,
			},
			425: {
				slidesPerView: 2,
			}
		},
    });


    // product view mode change js
	  $(function() {
        $('.product-view-mode').on('click', 'a', function (e) {
            e.preventDefault();
            var shopProductWrap = $('.shop-product-wrap');
            var viewMode = $(this).data('target');
            $('.product-view-mode a').removeClass('active');
            $(this).addClass('active');
            shopProductWrap.removeClass('grid list').addClass(viewMode);
        });
    });

    // model option start here
      $(function() {
        $('.view-modal').on('click', function () {
            $('.modal').addClass('show');
        });
        $('.close').on('click', function () {
            $('.modal').removeClass('show');
        });
    });

    // model option start here
    $(function() {
            $('.payment-modal').on('click', function () {
                $('.modals').addClass('show');
            });
            $('.closed').on('click', function () {
                $('.modals').removeClass('show');
            });
        });
        


    // model option start here
    $(function() {
        $('.cart-modul').on('click', function () {
            $('.modul').addClass('show');
        });
        $('.close').on('click', function () {
            $('.modul').removeClass('show');
        });
    });

    // modal 3 option start hear
    $(function(){
        $('.view-password').on('click', function () {
            $('.modal_2').addClass('show');
        });
        $('.close').on('click', function () {
            $('.modal_2').removeClass('show');
        });
    })
     // modal 4 option start hear
     $(function(){
        $('.order-modal').on('click', function () {
            $('.modal_3').addClass('show');
        });
        $('.close').on('click', function () {
            $('.modal_3').removeClass('show');
        });
    })
    
})(jQuery)



 // book mark api alert
 function myFunction() {
    window.alert("you browser don't support this feature.");
}

// clipboard notif
function copyToClipboard(element) {
	document.getElementById("angle").onclick = function (copyToClipboard) {
		document.getElementById("text_change").innerHTML = "Copied" ;
	};
	document.getElementById("anglex").onclick = function (copyToClipboard) {
		document.getElementById("text_changex").innerHTML = "Copied" ;
	};
	document.getElementById("jon").onclick = function (copyToClipboard) {
		document.getElementById("text_jon").innerHTML = "Copied" ;
	};
	document.getElementById("roks").onclick = function (copyToClipboard) {
		document.getElementById("roks_text").innerHTML = "Copied" ;
	};
}