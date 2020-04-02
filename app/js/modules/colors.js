export default class Colors {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$colorsSection = $('#realme-c3-page .section-colors');

    // Current Color
    this.currentColor = 'blue';
    this.blockInteraction = false;

    // Elements
    this.$blueColorImage = this.$colorsSection.find('.colors-img-holder .color-holder.blue');
    this.$blueColorOption = this.$colorsSection.find('.colors-toggle .select-option.blue');
    this.$blueColorSub = this.$colorsSection.find('.color-sub .color-sub-item.blue');

    this.$redColorImage = this.$colorsSection.find('.colors-img-holder .color-holder.red');
    this.$redColorOption = this.$colorsSection.find('.colors-toggle .select-option.red');
    this.$redColorSub = this.$colorsSection.find('.color-sub .color-sub-item.red');

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    // Init First State Before Animation
    this.ColorsInit();

    // Scrolling reach this section
    realmeC3Listener.on('section-colors', () => {
      this.DoColorsAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  ColorsInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    TweenMax.set(this.$colorsSection, { opacity: 0 })
  }

  DoColorsAnimation(){
    TweenMax.to(this.$colorsSection, 0.5, {
      opacity: 1,
      onComplete: () => { this.ColorToggleSetup(); }
    });
  }

  ColorToggleSetup(){
    this.$redColorOption.on('click', () => {
      if( this.currentColor === 'blue' && !this.blockInteraction ){
        this.blockInteraction = true;
        this.$redColorImage.addClass('active');
        this.$redColorOption.addClass('active');
        this.$redColorSub.addClass('active');

        this.$blueColorImage.removeClass('active');
        this.$blueColorOption.removeClass('active');
        this.$blueColorSub.removeClass('active');

        setTimeout(() => {
          this.blockInteraction = false;
          this.currentColor = 'red'
        }, 250)
      }
    });

    this.$blueColorOption.on('click', () => {
      if( this.currentColor === 'red' && !this.blockInteraction ){
        this.blockInteraction = true
        this.$redColorImage.removeClass('active');
        this.$redColorOption.removeClass('active');
        this.$redColorSub.removeClass('active');

        this.$blueColorImage.addClass('active');
        this.$blueColorOption.addClass('active');
        this.$blueColorSub.addClass('active');

        setTimeout(() => {
          this.blockInteraction = false;
          this.currentColor = 'blue'
        }, 250);
      }
    });
  }
}