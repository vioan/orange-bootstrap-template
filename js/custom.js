$(document).ready(function() {

    // wow.js initialization
    new WOW().init();

    // navbar animation feature
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('#navigation').removeClass('animated-header');
        } else {
            $('#navigation').addClass('animated-header');
        }
    });

    // highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

});

