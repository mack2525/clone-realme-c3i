export default class SaleBanner {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$saleBannerSection = $('#realme-c3-page .section-flashsale-banner');
    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.SaleBannerInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-flashsale-banner', () => {
      this.DoSaleBannerAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  SaleBannerInit(){
    TweenMax.set(this.$saleBannerSection, {opacity: 0});
  }

  DoSaleBannerAnimation(){
    TweenMax.to(this.$saleBannerSection, 0.65, { opacity: 1, ease: Power2.easeOut });
  }
}