export default class Quality {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$qualitySection = $('#realme-c3-page .section-quality');

    // Elements
    this.$qualityMainContent = this.$qualitySection.find('.main-content');
    this.$qualityPhoneImage = this.$qualitySection.find('.phone-img');


    // Main Animation Timeline
    this.QualityTimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.QualityInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-quality', () => {
      this.DoQualityAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  QualityInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    //Init State
    TweenMax.set(this.$qualityMainContent, { opacity: 0, x: data.SCREEN_WIDTH * distance * 0.5});
    TweenMax.set(this.$qualityPhoneImage, { opacity: 0, y: data.SCREEN_WIDTH * distance * 1.25});

    // Build Timeline
    this.QualityTimeline.to(this.$qualityPhoneImage, 0.75, { y: 0, opacity: 1 });
    this.QualityTimeline.to(this.$qualityMainContent, 0.5, {x: 0, opacity: 1}, '-=0.35');
  }

  DoQualityAnimation(){
    this.QualityTimeline.play()
  }
}