import { reachSection, pageListener } from './utils';

export default class CustomMenuControl {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    this.$customMenuList = $('.custom-menu-list');
    this.$customMenuIndicator = this.$customMenuList.find('.indicator');
    this.$hotsaleIndicator =  this.$customMenuList.find('.indicator.hot-sale-indicator');
    this.$reviewIndicator =  this.$customMenuList.find('.indicator.review-indicator');
    this.$featureIndicator =  this.$customMenuList.find('.indicator.feature-indicator');

    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.AddMenuScrollListener();
  }

  /* ===================================
   *  METHODS
   * =================================== */
  AddMenuScrollListener(){
    $(window).on('scroll', () => {
      if(reachSection($('#realme-c3-flashsale')) && !this.$hotsaleIndicator.hasClass('active')){
        this.$customMenuIndicator.removeClass('active');
        this.$hotsaleIndicator.addClass('active');
      }

      if(reachSection($('#realme-c3-review')) && !this.$reviewIndicator.hasClass('active')){
        this.$customMenuIndicator.removeClass('active');
        this.$reviewIndicator.addClass('active');
      }

      if(reachSection($('#realme-c3-camera-intro')) && !this.$featureIndicator.hasClass('active')){
        this.$customMenuIndicator.removeClass('active');
        this.$featureIndicator.addClass('active');
      }
    })
  }
}