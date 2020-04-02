export default class FingerPrint {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$simtraySection = $('#realme-c3-page .section-simtray');

    // Elements
    this.$simtrayMainContent = this.$simtraySection.find('.main-content');
    this.$simtrayEffect = this.$simtraySection.find('.effect-holder');


    // Main Animation Timeline
    this.SimtrayTimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.SimtrayInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-simtray', () => {
      this.DoSimtrayAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  SimtrayInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    //Init State
    TweenMax.set(this.$simtrayMainContent, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5});
    TweenMax.set(this.$simtrayEffect, { opacity: 0, y: data.SCREEN_WIDTH * distance * 1.25});

    // Build Timeline
    this.SimtrayTimeline.to(this.$simtrayEffect, 0.75, { y: 0, opacity: 1 });
    this.SimtrayTimeline.to(this.$simtrayMainContent, 0.5, {y: 0, opacity: 1}, '-=0.35');
  }

  DoSimtrayAnimation(){
    this.SimtrayTimeline.play()
  }
}