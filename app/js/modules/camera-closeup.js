export default class CameraCloseUp {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$cameraCloseUpSection = $('#realme-c3-page .section-closeup-camera');

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.CameraCloseUpInit();

    realmeC3Listener.on('section-closeup-camera', () => {
      // Page finished load all resources
      this.DoCameraCloseUpAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  CameraCloseUpInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    TweenMax.set(this.$cameraCloseUpSection, { opacity: 0 });
  }

  DoCameraCloseUpAnimation(){
    TweenMax.to(this.$cameraCloseUpSection, 0.65, { opacity: 1, y: 0 });
  }
}