export default class MainFeature {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$saleBannerSection = $('#realme-c3-page .section-main-feature');

    // Elements
    this.$desktopRedPhone = this.$saleBannerSection.find('.column.center .phone-red');
    this.$desktopBluePhone = this.$saleBannerSection.find('.column.center .phone-blue');
    this.$mobileBluePhone = this.$saleBannerSection.find('.column.left .phone-blue');
    this.$mobileRedPhone = this.$saleBannerSection.find('.column.right .phone-red');
    this.$featureListLeft = this.$saleBannerSection.find('.column.left .main-feature-list');
    this.$featureListRight = this.$saleBannerSection.find('.column.right .main-feature-list');

    // Main Animation Timeline
    this.MainFeatureTimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.MainFeatureInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-main-feature', () => {
      this.DoMainFeatureAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  MainFeatureInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Init State
    if(!data.IS_MOBILE){
      TweenMax.set(this.$desktopRedPhone, { y: data.SCREEN_WIDTH * distance, opacity: 0 });
      TweenMax.set(this.$desktopBluePhone, { y: -data.SCREEN_WIDTH * distance, opacity: 0 });
      TweenMax.set([this.$featureListLeft, this.$featureListRight], { opacity: 0 });
    } else{
      TweenMax.set(this.$mobileRedPhone, { y: data.SCREEN_WIDTH * distance, opacity: 0 });
      TweenMax.set(this.$mobileBluePhone, { y: -data.SCREEN_WIDTH * distance, opacity: 0 });
      TweenMax.set(this.$featureListLeft, { opacity: 0, x: data.SCREEN_WIDTH * distance * 0.5 });
      TweenMax.set(this.$featureListRight, { opacity: 0, x: -data.SCREEN_WIDTH * distance * 0.5 });
    }

    // Timeline Build
    if(!data.IS_MOBILE) {
      this.MainFeatureTimeline.to([
        this.$desktopRedPhone,
        this.$desktopBluePhone
      ], 0.6, { opacity: 1, y: 0 });
    } else {
      this.MainFeatureTimeline.to([
        this.$mobileRedPhone,
        this.$mobileBluePhone
      ], 0.6, { opacity: 1, y: 0 });
    }

    this.MainFeatureTimeline.to([
      this.$featureListLeft,
      this.$featureListRight
    ], 0.5, { opacity: 1, x: 0 }, '-=0.35');
  }

  DoMainFeatureAnimation(){
    this.MainFeatureTimeline.play();
  }
}