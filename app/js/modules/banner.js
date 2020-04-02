export default class Banner {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$bannerSection = $('#realme-c3-page .section-banner');

    // Phone Image
    this.$bannerPhone = this.$bannerSection.find('.phone-img');

    // Content
    this.$bannerMainContent = this.$bannerSection.find('.main-content');
    this.$bannerLogo = this.$bannerMainContent.find('.logo-holder');
    this.$bannerSlogan = this.$bannerMainContent.find('.feature-txt');
    this.$bannerPrice = this.$bannerMainContent.find('.price-txt');
    this.$bannerOpenSale = this.$bannerMainContent.find('.open-sale-txt');

    // Timeline Object
    this.BannerTimeline = new TimelineMax({ paused: true });

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    //this.BannerInit();

    // realmeC3Listener.on('page-ready', () => {
    //   // Page finished load all resources
    //   this.DoBannerAnimation();
    // });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  BannerInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Set Init Elements Status
    TweenMax.set(this.$bannerPhone, { y: data.SCREEN_WIDTH * distance * 0.5, opacity: 0 });
    TweenMax.set([
      this.$bannerPrice,
      this.$bannerOpenSale
    ], { y: data.SCREEN_WIDTH * distance * 0.375, opacity: 0 });
    TweenMax.set(this.$bannerLogo, { opacity: 0 });
    TweenMax.set(this.$bannerSlogan, { opacity: 0 });

    // Build Timeline Animation
    this.BannerTimeline.to(this.$bannerPhone, 0.55, { y: 0, opacity: 1, ease: Power2.easeOut });
    this.BannerTimeline.to([
      this.$bannerLogo,
      this.$bannerSlogan,
      this.$bannerPrice,
      this.$bannerOpenSale
    ], 0.5, { x: 0, opacity: 1, ease: Power2.easeOut }, '-=0.4');
  }

  DoBannerAnimation(){
    this.BannerTimeline.play();
  }
}