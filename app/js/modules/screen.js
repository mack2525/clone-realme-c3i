export default class Screen {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$screenSection = $('#realme-c3-page .section-screen');

    // Elements
    this.$curveImage = this.$screenSection.find('.curve-holder .curve-img-holder');
    this.$phoneImg = this.$screenSection.find('.phone-img');
    this.$screenDetail = this.$screenSection.find('.screen-detail');
    this.$screenFeature = this.$screenSection.find('.screen-feature');

    // Main Animation Timeline
    this.ScreenTimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.ScreenInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-screen', () => {
      this.DoScreenAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  ScreenInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Init State
    TweenMax.set([ this.$curveImage, this.$phoneImg ], {
      opacity: 0,
      x: -data.SCREEN_WIDTH * distance * 1.5,
      y: -data.SCREEN_WIDTH * distance * 0.5
    });
    TweenMax.set(this.$screenFeature, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5 });

    if(data.IS_MOBILE){
      TweenMax.set(this.$screenDetail, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5 });
    }

    // Build Timeline
    this.ScreenTimeline.to([ this.$curveImage, this.$phoneImg ], 0.75, { opacity: 1, x: 0, y: 0 });
    if(data.IS_MOBILE){
      this.ScreenTimeline.to(this.$screenDetail, 0.5, { opacity: 1, y: 0 }, '-=0.5');
    }
    this.ScreenTimeline.to(this.$screenFeature, 0.5, { opacity: 1, y: 0 }, '-=0.35');
  }

  DoScreenAnimation(){
    this.ScreenTimeline.play();
  }
}