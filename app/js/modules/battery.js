export default class Battery {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$batterySection = $('#realme-c3-page .section-battery');

    // Elements
    this.$batteryPhoneImg = this.$batterySection.find('.phone-img');
    this.$batteryBg = this.$batterySection.find('.bg-holder');
    this.$batteryMainContent = this.$batterySection.find('.main-content');
    this.$batteryFeature = this.$batterySection.find('.battery-features');
    this.$batteryFeatureMeter = this.$batteryFeature.find('.metter-pointer');

    // Core Timeline
    this.BatteryTimeline = new TimelineMax({paused: true});

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.BatteryInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-battery', () => {
      this.DoBatteryAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  BatteryInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Init State
    TweenMax.set(this.$batteryPhoneImg, {
      y: data.SCREEN_WIDTH * distance * 2,
      opacity: 0,
      z: data.SCREEN_WIDTH * distance * 0.25,
      scale: 1.12,
      transformOrigin: '50% 100%'
    });
    TweenMax.set(this.$batteryBg, { opacity: 0 });
    TweenMax.set(this.$batteryMainContent, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5 });
    TweenMax.set(this.$batteryFeature, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5 });
    TweenMax.set(this.$batteryFeatureMeter, { scaleX: 0, transformOrigin: '0% 50%' });

    // Timeline Build
    this.BatteryTimeline.to(this.$batteryBg, 0.5, { opacity: 1 });
    this.BatteryTimeline.to(this.$batteryPhoneImg, 0.75, {
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      transformOrigin: '50% 100%'
    }, '-=0.2');
    this.BatteryTimeline.to([ this.$batteryMainContent, this.$batteryFeature ], 0.5, { opacity: 1, y: 0 }, '-=0.35');
    this.BatteryTimeline.to( this.$batteryFeatureMeter, 0.75, { scaleX: 1, transformOrigin: '0% 50%' });
  }

  DoBatteryAnimation(){
    this.BatteryTimeline.play();
  }
}