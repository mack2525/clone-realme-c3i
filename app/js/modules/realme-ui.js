export default class RealmeUI {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$realmeUISection = $('#realme-c3-page .section-realme-ui');

    // Elements
    this.$realmeUIMainContent = this.$realmeUISection.find('.main-content');
    this.$realmeUIScreenImage = this.$realmeUISection.find('.screen-img');
    this.$realmeUILogo = this.$realmeUISection.find('.realme-ui-explore');
    this.$realmeUIScreenSlider = this.$realmeUISection.find('.screen-slider');


    // Main Animation Timeline
    this.realmeUITimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.RealmeUIInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-realme-ui', () => {
      this.DorealmeUIAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  RealmeUIInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    this.$realmeUIScreenSlider.slick({
      slidesToShow: 1,
      dots: true,
      fade: true,
      nextArrow: '<button class="slick-control slick-next"></button>',
      prevArrow: '<button class="slick-control slick-prev"></button>',
    });

    TweenMax.set(this.$realmeUIMainContent, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5 });
    TweenMax.set(this.$realmeUILogo, { opacity: 0, y: data.SCREEN_WIDTH * distance });


    if(data.IS_MOBILE){
      TweenMax.set(this.$realmeUIScreenSlider, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5});
    } else {
      TweenMax.set(this.$realmeUIScreenImage, { opacity: 0, y: data.SCREEN_WIDTH * distance });
    }

    this.realmeUITimeline.to(this.$realmeUIMainContent, 0.5, { opacity: 1, y: 0, ease: Power2.easeOut });
    if(!data.IS_MOBILE) {
      this.realmeUITimeline.to([this.$realmeUIScreenImage, this.$realmeUILogo ], 0.75, { opacity: 1, y: 0, ease: Power2.easeOut }, '-=0.25');
    } else {
      this.realmeUITimeline.to([ this.$realmeUIScreenSlider, this.$realmeUILogo ], 0.5, { opacity: 1, y: 0, ease: Power2.easeOut }, '-=0.25');
    }

  }

  DorealmeUIAnimation(){
    this.realmeUITimeline.play()
  }
}