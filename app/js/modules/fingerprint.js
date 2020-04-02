export default class FingerPrint {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$fingerprintSection = $('#realme-c3-page .section-fingerprint');

    // Elements
    this.$fingerprintMainContent = this.$fingerprintSection.find('.main-content');
    this.$fingerprintPhoneImage = this.$fingerprintSection.find('.phone-img');
    this.$fingerprintZoomImage = this.$fingerprintSection.find('.zoomup-img');


    // Main Animation Timeline
    this.FingerprintTimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.FingerprintInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-fingerprint', () => {
      this.DoFingerprintAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  FingerprintInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    //Init State
    TweenMax.set(this.$fingerprintMainContent, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5});
    TweenMax.set([
      this.$fingerprintPhoneImage,
      this.$fingerprintZoomImage
    ], { opacity: 0, y: data.SCREEN_WIDTH * distance * 1.25});

    // Build Timeline
    this.FingerprintTimeline.to([
      this.$fingerprintPhoneImage,
      this.$fingerprintZoomImage
    ], 0.75, { y: 0, opacity: 1 });
    this.FingerprintTimeline.to(this.$fingerprintMainContent, 0.5, {y: 0, opacity: 1}, '-=0.35');
  }

  DoFingerprintAnimation(){
    this.FingerprintTimeline.play()
  }
}