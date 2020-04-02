import YouTubePlayer from 'youtube-player';

export default class Common {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.SetupCommon();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SetupCommon(){
        this.slickFunction();
        this.headerProductFunction();
        this.footerFunction();
        this.PreOrderModalSetup();

        this.SetupVideoPlayer();
        this.SmoothScrollSetup();
        
        // Mobile Special Menu
        if(window.innerWidth <= 768){
            this.SetupMobileCustomMenu();
        }
    }

    PreOrderModalSetup(){
        this.preOrderModal = $('#modal-preorder');
        this.$preOrderBtn = $('.pre-order-modal');
        this.$closePreOrderBtn = $('.close-preorder-modal');

        this.$preOrderBtn.on('click', (e)=>{
            $('body').addClass('show-modal');
            this.preOrderModal.addClass('active');
        });

        this.$closePreOrderBtn.on('click', (e)=>{
            $('body').removeClass('show-modal');
            this.preOrderModal.removeClass('active');
        });
    }

    // Smooth Scrolling Setup
    SmoothScrollSetup(){
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
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
                    }, 700, function() {
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
    }

    SetupMobileCustomMenu(){
        this.$customMenu = $('.custom-header');
        this.customMenuBlock = false;
        this.$customMenuNav = this.$customMenu.find('.custom-menu-list');
        this.$menuToggler = this.$customMenu.find('.mb-menu-toggle');
        this.$closeCustomMenu = $('.close-custom-menu');

        this.$menuToggler.on('click', (e) => {
            if(!this.customMenuBlock){
                //Block Any Interaction While Animating
                this.customMenuBlock = true;

                if(this.$menuToggler.hasClass('is-show-menu')){
                    this.$menuToggler.removeClass('is-show-menu');
                    this.$customMenuNav.slideUp('fast');
                } else {
                    this.$menuToggler.addClass('is-show-menu');
                    this.$customMenuNav.slideDown('fast');
                }

                setTimeout(() => {
                    this.customMenuBlock = false;
                }, 250)
            }
        });

        this.$closeCustomMenu.on('click', (e) => {
            if(!this.customMenuBlock){
                //Block Any Interaction While Animating
                this.customMenuBlock = true;

                this.$menuToggler.removeClass('is-show-menu');
                this.$customMenuNav.slideUp('fast');


                setTimeout(() => {
                    this.customMenuBlock = false;
                }, 250)
            }
        })
    }

    headerProductFunction() {
        if($(window).width() > 767) {
            $('.header__list__product').hover(function () {
                $('#page-header').toggleClass('product-active');
            })
        } else {
            $('.header__list__product').click(function () {
                $(".nav-product").stop().slideToggle(300);
            })
        }
        $('#nav-icon4').click(function () {
            $(this).toggleClass('open');
            $('#page-header').toggleClass('menu-active');
            $(".header__list").stop().slideToggle(300);
            $('body').toggleClass('stop-scroll');
        });

        $(window).scroll(function() {
            if($(window).scrollTop() > 100) {
                $('#page-header').addClass('menu-scroll');
                $('.custom-header').addClass('menu-scroll');
            } else {
                $('#page-header').removeClass('menu-scroll');
                $('.custom-header').removeClass('menu-scroll');
            }
        });
    }

    footerFunction() {
        $('#page-footer .footer__col').each(function () {
            var $thisCol = $(this);
            if($(window).width() < 768) {
                $(this).find('h3').click(function () {
                    $thisCol.find('ul').slideToggle(300);
                    $(this).toggleClass('footer__col__ul--active');
                })
            }
        })
    }

    slickFunction() {
        $('.top-slider .top-slider__wrap, .product-slide .product-slide__wrap').slick({
            dots: true,
        });

        $('.nav-product__list').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 767,
                    settings: "unslick"
                }
            ]
        });
    }

    SetupVideoPlayer(){
        this.playerYT = YouTubePlayer('video-modal-video', {
            videoId: 'VoI7_SmxJmQ', // Default Clip
            playerVars: {
                disablekb: 1,
                fs: 0,
                modestbranding: 1,
                rel: 0,
                controls: 0,
                playlist: 'VoI7_SmxJmQ',
                loop: 1,
            },
        });

        $('.play-modal-video').on('click',(e) => {
            this.videoCode = 'VoI7_SmxJmQ'; // Default Youtube Video ID

            if($(e.target).parents('.play-modal-video').length > 0){
                this.videoCode = $(e.target).parents('.play-modal-video').data('video-id');
            } else {
                this.videoCode =  $(e.target).data('video-id');
            }
            this.PlayModalClip(this.videoCode);
        });

        $('.close-video-modal').on('click', (e) => {
            this.CloseModalClip();
        });
    }

    PlayModalClip( clipID = 'VoI7_SmxJmQ'){
        $('body').addClass('show-modal');
        $('.video-modal').addClass('active');
        this.playerYT.cueVideoById(clipID);
        this.playerYT.unMute();
        this.playerYT.playVideo();

        this.playerYT.addEventListener('onStateChange', (e) => {
            if(e.data == 0){
                this.CloseModalClip();
            }
        })

        console.log(clipID)
    }

    CloseModalClip(){
        this.playerYT.mute();
        $('body').removeClass('show-modal');
        $('.video-modal').removeClass('active');
        setTimeout(() => {this.playerYT.stopVideo();}, 200);
    }
}