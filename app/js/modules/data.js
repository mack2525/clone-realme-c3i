export default class PageData{
  constructor() {
    this.SCREEN_WIDTH = window.innerWidth;
    this.SCREEN_HEIGHT = window.innerHeight;
    this.IS_MOBILE = this.SCREEN_WIDTH <= 768;
  }
}