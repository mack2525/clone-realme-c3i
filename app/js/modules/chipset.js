export default class ChipSet {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$chipsetSection = $('#realme-c3-page .section-chipset');

    // Elements
    this.$chipsetBackgroundImage = this.$chipsetSection.find('.bg-holder');
    this.$chipsetChipImage = this.$chipsetSection.find('.chip-img');
    this.$chipsetMainContent = this.$chipsetSection.find('.main-content');

    // Core Animation Timeline
    this.chipsetTimeline = new TimelineMax({ paused: true });

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.ChipsetInit();

    // Scrolling Reach This Section
    realmeC3Listener.on('section-chipset', () => {
      this.DoChipsetAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  ChipsetInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Init State
    TweenMax.set(this.$chipsetBackgroundImage, { opacity: 0, scale: 1.15 });
    TweenMax.set(this.$chipsetChipImage, { opacity: 0, z: 10, scale: 1.1, y: -data.SCREEN_WIDTH * distance * 0.03 });
    TweenMax.set(this.$chipsetMainContent, { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5 });

    // Timeline Build
    this.chipsetTimeline.to(this.$chipsetBackgroundImage, 1, { opacity: 1, scale: 1, ease: Power3.easeOut });
    this.chipsetTimeline.to(this.$chipsetChipImage, 0.65, { opacity: 1, scale: 1, y: 0, z: 0, ease: Power2.easeOut }, '-=0.65');
    this.chipsetTimeline.to(this.$chipsetMainContent, 0.65, { opacity: 1, y: 0, ease: Power3.easeOut }, '-=0.35');
  }

  DoChipsetAnimation(){
    this.chipsetTimeline.play();
  }
}