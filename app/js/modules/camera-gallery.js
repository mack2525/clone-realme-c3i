export default class CameraGallery {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$cameraGallerySection = $('#realme-c3-page .section-camera-gallery');

    // Elements
    this.$sliderHolder = this.$cameraGallerySection.find('.gallery-slider-list');

    // Main Timeline Animation
    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.CameraGalleryInit();

    realmeC3Listener.on('section-camera-gallery', () => {
      // Page finished load all resources
      this.DoCameraGalleryAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  CameraGalleryInit(){
    // State Init
    TweenMax.set(this.$cameraGallerySection, { opacity: 0 });

    // Slick Setup
    this.$sliderHolder.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
    });
  }

  DoCameraGalleryAnimation(){
    TweenMax.to(this.$cameraGallerySection, 0.65, { opacity: 1, ease: Power2.easeOut });
  }
}