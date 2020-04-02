export default class CameraIntro {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$cameraIntroSection = $('#realme-c3-page .section-camera-intro');

    // Elements
    this.$mainContent = this.$cameraIntroSection.find('.main-content');
    this.$phoneImage = this.$cameraIntroSection.find('.effect-holder .phone-img');
    this.$lensHolder = this.$cameraIntroSection.find('.lens-img');
    this.$lensImagesCam1 = this.$lensHolder.find('.cam-lens-img.cam-1 .lens-holder:not(.lens-base)');
    this.$lensImagesCam2 = this.$lensHolder.find('.cam-lens-img.cam-2 .lens-holder:not(.lens-base)');
    this.$lensImagesCam3 = this.$lensHolder.find('.cam-lens-img.cam-3 .lens-holder:not(.lens-base)');
    this.$lensBaseImage = this.$lensHolder.find('.lens-holder.lens-base');
    this.$cameraFeatureList = this.$cameraIntroSection.find('.camera-feature-list');

    // Main Timeline Animation
    this.CameraIntroTimeline = new TimelineMax({ paused: true });
    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.CameraIntroInit();

    realmeC3Listener.on('section-camera-intro', () => {
      // Page finished load all resources
      this.DoCameraIntroAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  CameraIntroInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Init State
    TweenMax.set(this.$mainContent, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.75 });
    TweenMax.set(this.$phoneImage, { opacity: 0, y: data.SCREEN_WIDTH * distance });
    TweenMax.set([
      this.$lensImagesCam1,
      this.$lensImagesCam2,
      this.$lensImagesCam3,
    ], { opacity: 0, x: data.SCREEN_WIDTH * distance * 0.25, scale: 0.85 });
    TweenMax.set(this.$lensBaseImage, { opacity: 0 })

    if(!data.IS_MOBILE){
      TweenMax.set(this.$cameraFeatureList, {opacity: 0, x: data.SCREEN_WIDTH * distance * 0.5});
    }

    // Timeline Build
    this.CameraIntroTimeline.to([
      this.$mainContent,
      this.$phoneImage
    ], 0.6, { opacity: 1, y: 0 });
    this.CameraIntroTimeline.to(this.$lensBaseImage, 0.4, { opacity: 1 });
    this.CameraIntroTimeline.addLabel('baseFinish')
    this.CameraIntroTimeline.staggerTo(this.$lensImagesCam1, 0.35, { opacity: 1, x: 0, scale: 1 }, '0.1', 'baseFinish-=0.25');
    this.CameraIntroTimeline.staggerTo(this.$lensImagesCam2, 0.35, { opacity: 1, x: 0, scale: 1 }, '0.1', 'baseFinish-=0.25');
    this.CameraIntroTimeline.staggerTo(this.$lensImagesCam3, 0.35, { opacity: 1, x: 0, scale: 1 }, '0.1', 'baseFinish-=0.25');
    if(!data.IS_MOBILE) {
      this.CameraIntroTimeline.to(this.$cameraFeatureList, 0.5, { opacity: 1, x: 0 }, 'baseFinish-=0.25');
    }
  }

  DoCameraIntroAnimation(){
    this.CameraIntroTimeline.play();
  }
}