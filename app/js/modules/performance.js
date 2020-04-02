import { CountUp } from 'countup.js';
export default class Performance {
  /* ===================================
   *  CONSTRUCTOR
   * =================================== */
  constructor(){
    // Sections
    this.$performanceSection = $('#realme-c3-page .section-game-performance');

    // Elements
    this.$performanceMainContent = this.$performanceSection.find('.main-content')
    this.$performanceDetail1 = this.$performanceMainContent.find('.performance-detail.detail-1');
    this.$performanceDetail2 = this.$performanceMainContent.find('.performance-detail.detail-2');
    this.$meterPointer = this.$performanceMainContent.find('.detail-meter-item .meter-pointer');
    this.$meterValue = this.$performanceMainContent.find('.detail-meter-item .value');

    // Core Timeline Animation
    this.bindEvents();
  }


  /* ===================================
   *  EVENTS
   * =================================== */
  bindEvents(){
    this.PerformanceInit();

    // Reach This Section
    realmeC3Listener.on('section-game-performance', () => {
      this.DoPerformanceAnimation();
    });
  }

  /* ===================================
   *  METHODS
   * =================================== */
  PerformanceInit(){
    let data = realmeC3PageInfo;
    let distance = data.IS_MOBILE ? 0.1 : 0.04;

    // Init State
    TweenMax.set([
      this.$performanceDetail1,
      this.$performanceDetail2
    ], { opacity: 0, y: data.SCREEN_WIDTH * distance * 0.5 });

    this.ResetData();

    if(!data.IS_MOBILE){
      this.performanceTimeline = new TimelineMax({ repeat: -1, paused: true });
      this.performanceTimeline.to(this.$performanceDetail1, 0.5, { opacity: 1, y:0, onComplete: () => {
          this.RunData(1);
        }
      });

      this.performanceTimeline.to(this.$performanceDetail1, 0.5, { opacity: 0, y: - data.SCREEN_WIDTH * distance * 0.5, onComplete: () => {
          this.ResetData();
        }
      }, '+=4.5');

      this.performanceTimeline.to(this.$performanceDetail2, 0.5, { opacity: 1, y:0, onComplete: () => {
          this.RunData(2);
        }
      });

      this.performanceTimeline.to(this.$performanceDetail2, 0.5, { opacity: 0, y: - data.SCREEN_WIDTH * distance * 0.5, onComplete: () => {
          this.ResetData();
        }
      }, '+=4.5');
    } else {
      this.performanceTimeline = new TimelineMax({ paused: true });
      this.performanceTimeline.to([
        this.$performanceDetail1,
        this.$performanceDetail2
      ], 0.65, { opacity: 1, y:0, onComplete: () => {
          this.RunData(1);
          this.RunData(2);
        }
      });
    }
  }

  DoPerformanceAnimation(){
    this.performanceTimeline.play();
  }

  ResetData(){
    TweenMax.set(this.$meterPointer, { scaleX: 0, transformOrigin: '0% 50%' });
    this.$meterValue.html(0);
  }

  RunData(target){
    let $targetElements = $('.section-game-performance .performance-detail.detail-' + target);
    let $meter = $targetElements.find('.detail-meter-item .meter-pointer');
    let $value = $targetElements.find('.detail-meter-item .value');

    $meter.each((index, value) => {
      let rangeValue = $(value).data('range');
      TweenMax.to($(value), 1.5, { scaleX: rangeValue / 100, transformOrigin: '0% 50%' })
    });

    $value.each((index, value) => {
      let rangeValue = $(value).data('range');
      let targetID = $(value).attr('id');

      const options = {
        useEasing: false,
        useGrouping: false,
        duration: 1.5,
      };

      let countUp = new CountUp(targetID, rangeValue, options);
      if (!countUp.error) {
        countUp.start();
      } else {
        console.error(countUp.error);
      }
    });
  }
}