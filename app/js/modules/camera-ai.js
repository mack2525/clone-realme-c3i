export default class CameraAI {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$cameraAISection = $('#realme-c3-page .section-camera-ai');

    // Elements
    this.$cameraAIimage = this.$cameraAISection.find('.bg-holder');
    this.$cameraAIMainContent = this.$cameraAISection.find('.main-content');
    this.$cameraAIPhoneImage = this.$cameraAISection.find('.phone-img');

    // Core Timeline
    this.CameraAITimeline = new TimelineMax({ paused: true });

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.CameraAIInit();

    realmeC3Listener.on('section-camera-ai', () => {
      // Page finished load all resources
      this.DoCameraAIAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  CameraAIInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Init State
    TweenMax.set(this.$cameraAIimage, { opacity: 0 });
    if(!data.IS_MOBILE){
      TweenMax.set(this.$cameraAIPhoneImage, { opacity: 0, y: data.SCREEN_WIDTH * distance });
    } else {
      TweenMax.set(this.$cameraAIPhoneImage, { opacity: 0, y: -data.SCREEN_WIDTH * distance * 1.4});
    }
    TweenMax.set(this.$cameraAIMainContent, { opacity: 0, x: data.SCREEN_WIDTH * distance * 0.5 });

    // Timeline Animation Build
    if(data.IS_MOBILE){
      this.CameraAITimeline.to([this.$cameraAIMainContent, this.$cameraAIimage], 0.5, { opacity: 1, x: 0, ease: Power2.EaseOut });
      this.CameraAITimeline.to(this.$cameraAIPhoneImage, 0.75, { opacity: 1, y: 0, ease: Power2.EaseOut }, '-=0.15');
    } else {
      this.CameraAITimeline.to(this.$cameraAIimage, 1, { opacity: 1, ease: Power2.EaseOut });
      this.CameraAITimeline.to(this.$cameraAIPhoneImage, 0.75, { opacity: 1, y: 0, ease: Power2.EaseOut }, '-=0.75');
      this.CameraAITimeline.to(this.$cameraAIMainContent, 0.5, { opacity: 1, x: 0, ease: Power2.EaseOut }, '-=0.25');
    }
  }

  DoCameraAIAnimation(){
    this.CameraAITimeline.play();
  }
}