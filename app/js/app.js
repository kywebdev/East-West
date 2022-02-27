$(document).ready(function() {

    // back to top smooth scrolling
    function backToTop(width) {
        if (width <= 535) {
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
        
                var target = this.hash;
                var $target = $(target);
        
                $('html, body').stop().animate({
                    'scrollTop': 0 + $target.offset().top - 69
                }, 1000, 'swing', function() {});
            });
        } else if (width <= 985) {
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
        
                var target = this.hash;
                var $target = $(target);
        
                $('html, body').stop().animate({
                    'scrollTop': 0 + $target.offset().top - 79
                }, 1000, 'swing', function() {});
            });
        } else {
            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
        
                var target = this.hash;
                var $target = $(target);
        
                $('html, body').stop().animate({
                    'scrollTop': 0 + $target.offset().top - 99
                }, 1000, 'swing', function() {});
            });
        }
    }
    backToTop( $(window).width() );
    $(window).on('resize', function() {
        backToTop( $(this).width() );
    });

    // set the data-offset attribute
    function setDataOffset(width) {
        if (width <= 535) {
            $('body').attr('data-offset', '70');
        } else if (width <= 985) {
            $('body').attr('data-offset', '80');
        } else {
            $('body').attr('data-offset', '100');
        }
    }
    setDataOffset( $(window).width() );
    $(window).on('resize', function() {
        setDataOffset( $(this).width() );
    });

    // toggle the mobile menu
    $('.mobile-nav-toggle').on('click', function() {
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('open');
        $('body').toggleClass('open');
        if ($('.mobile-menu').hasClass('open')) {
            setTimeout(function() {
                $('.blue-bar').addClass('show');
            }, 1000);
        } else {
            $('.blue-bar').removeClass('show');
        }
    });

    // close the mobile menu when a nav item is clicked
    $('.nav ul li a').on('click', function() {
        setTimeout(function() {
            $('.mobile-nav-toggle').removeClass('open');
            $('.mobile-menu').removeClass('open');
            $('body').removeClass('open');
            $('.blue-bar').removeClass('show');
        }, 1000);
    });

    // move the header navigation based on screen size
    function moveHeaderNav(width) {
        if (width <= 985) {
            $('#navbar').prependTo('.mobile-menu .container-fluid');
        } else {
            $('#navbar').insertAfter('header .logo');
        }
    }
    moveHeaderNav( $(window).width() );
    $(window).on('resize', function() {
        moveHeaderNav( $(this).width() );
    });

    // work slider
    $('.work-slider').slick({
        infinite: true,
        dots: true,
        touchThreshold: 100
    });
    
    // detect if any nav links have the active class on load
    setTimeout(function() {
        if ($('.nav-link').hasClass('active')) {
            $('header').addClass('dark');
        }
    }, 300);

    // scrollspy
    $(window).on('scroll', function() {
        if ($('.nav-link').hasClass('active')) {
            $('header').addClass('dark');
        } else {
            $('header').removeClass('dark');
        }
    });

});