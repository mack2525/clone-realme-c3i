export default class Design {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$designSection = $('#realme-c3-page .section-design');

    // Elements
    this.$designMainContent = this.$designSection.find('.main-content');
    this.$designPhoneImage = this.$designSection.find('.phone-img');


    // Main Animation Timeline
    this.DesignTimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.DesignInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-design', () => {
      this.DoDesignAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  DesignInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    //Init State
    TweenMax.set(this.$designMainContent, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5});
    TweenMax.set(this.$designPhoneImage, { opacity: 0, y: data.SCREEN_WIDTH * distance * 1.25});

    // Build Timeline
    this.DesignTimeline.to(this.$designPhoneImage, 0.75, { y: 0, opacity: 1 });
    this.DesignTimeline.to(this.$designMainContent, 0.5, {y: 0, opacity: 1}, '-=0.35');
  }

  DoDesignAnimation(){
    this.DesignTimeline.play()
  }
}