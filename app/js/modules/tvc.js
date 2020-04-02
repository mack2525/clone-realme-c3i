export default class TVC {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$sectionTVC = $('#realme-c3-page .section-intro-video');

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.TVCInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-intro-video', () => {
      this.DoTVCAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  TVCInit(){
    TweenMax.set(this.$sectionTVC, { opacity: 0 });
  }

  DoTVCAnimation(){
    TweenMax.to(this.$sectionTVC, 0.5, { opacity: 1 });
  }
}