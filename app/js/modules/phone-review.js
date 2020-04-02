export default class PhoneReview {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor (){
    // News Section
    this.$newsSection = $('#realme-c3-page .section-phone-review');
    this.$newsSlider = this.$newsSection.find('.news-slider');

    // Slick Slider Options
    this.sliderOptions = {
      nextArrow: '<button class="slick-control slick-next"></button>',
      prevArrow: '<button class="slick-control slick-prev"></button>',
      slidesToShow: 4,
      slidesToScroll: 1,

      responsive: [
        {
          breakpoint: 1681,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }

    this.bindEvents();
  }

  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.NewsInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-phone-review', () => {
      this.DoNewsAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  NewsInit(){
    this.$newsSlider.slick(this.sliderOptions)
    TweenMax.set(this.$newsSection, { opacity: 0 });
  }

  DoNewsAnimation(){
    TweenMax.to(this.$newsSection, 0.5, { opacity: 1 });
  }
}