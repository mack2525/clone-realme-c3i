// Sections
import Banner from './banner';
import SaleBanner from './sale-banner';
import MainFeature from './main-feature';
import TVC from './tvc';
import PhoneReview from './phone-review';
import CameraIntro from './camera-intro';
import CameraGallery from './camera-gallery';
import CameraCloseUp from './camera-closeup';
import CameraAI from './camera-ai';
import Chipset from './chipset';
import Performance from './performance';
import Battery from './battery';
import Screen from './screen';
import FingerPrint from './fingerprint';
import Simtray from './simtray';
import Colors from './colors';
import Design from './design';
import RealmeUI from './realme-ui';
import Quality from './quality';

// Utils
import { reachSection, pageListener } from './utils';
import { TweenMax } from "gsap/TweenMax";
import Data from "./data";
import CustomMenuControl from "./custom-menu-control";

export default class Home {
    /* ===================================
     *  CONSTRUCTOR
     * =================================== */
    constructor(){
        // Core Utils Setup
        window.realmeC3Listener = new pageListener();
        window.TweenMax = TweenMax;
        window.realmeC3PageInfo = new Data();
        $('.lazy').Lazy();

        // Behavior Use For All Sections
        let customMenuControl = new CustomMenuControl();
        let banner = new Banner();
        let saleBanner = new SaleBanner();
        let mainFeature = new MainFeature();
        let tvc = new TVC();
        let phoneReview = new PhoneReview();
        let cameraIntro = new CameraIntro();
        let cameraGallery = new CameraGallery();
        let cameraCloseUp = new CameraCloseUp();
        let cameraAI = new CameraAI();
        let chipset = new Chipset();
        let performance = new Performance();
        let battery = new Battery();
        let screen = new Screen();
        let fingerprint = new FingerPrint();
        let simtray = new Simtray();
        let colors = new Colors();
        let design = new Design();
        let realmeUI = new RealmeUI();
        let quality = new Quality();

        this.pageSections = {
            $banner: $('#realme-c3-page .section-banner'),
            $saleBanner: $('#realme-c3-page .section-flashsale-banner'),
            $mainFeature: $('#realme-c3-page .section-main-feature'),
            $TVC: $('#realme-c3-page .section-intro-video'),
            $phoneReview: $('#realme-c3-page .section-phone-review'),
            $cameraIntro: $('#realme-c3-page .section-camera-intro'),
            $cameraGallery: $('#realme-c3-page .section-camera-gallery'),
            $cameraCloseUp: $('#realme-c3-page .section-closeup-camera'),
            $cameraAI: $('#realme-c3-page .section-camera-ai'),
            $chipset: $('#realme-c3-page .section-chipset'),
            $performance: $('#realme-c3-page .section-game-performance'),
            $battery: $('#realme-c3-page .section-battery'),
            $screen: $('#realme-c3-page .section-screen'),
            $fingerprint: $('#realme-c3-page .section-fingerprint'),
            $simtray: $('#realme-c3-page .section-simtray'),
            $colors: $('#realme-c3-page .section-colors'),
            $design: $('#realme-c3-page .section-design'),
            $realmeUI: $('#realme-c3-page .section-realme-ui'),
            $quality: $('#realme-c3-page .section-quality'),
        }

        this.animationStatus = {
            banner: false,
            saleBanner: false,
            mainFeature: false,
            TVC: false,
            phoneReview: false,
            cameraIntro: false,
            cameraGallery: false,
            cameraCloseUp: false,
            cameraAI: false,
            chipset: false,
            performance: false,
            battery: false,
            screen: false,
            fingerprint: false,
            simtray: false,
            colors: false,
            design: false,
            realmeUI: false,
            quality: false,
        }

        this.bindEvents();
    }


    /* ===================================
     *  EVENTS
     * =================================== */
    bindEvents(){
        this.SetupHomePage();
    }

    /* ===================================
     *  METHODS
     * =================================== */
    SetupHomePage(){
        window.onload = () => {
            realmeC3Listener.emit('finished-load');
        }

        realmeC3Listener.on('finished-load', () => {
            setTimeout(() => {
                realmeC3Listener.emit('page-ready');
            }, 50);
        });

        realmeC3Listener.on('page-ready', () => {
            this.ScreenDetection();
            this.SetupUserScrollDetect();
        });
    }

    SetupUserScrollDetect(){
        $(window).on('scroll', (e) => {
            this.ScreenDetection();
        });
    }

    ScreenDetection(){
        // Sale Banner
        if( reachSection( this.pageSections.$saleBanner )){
            if( !this.animationStatus.saleBanner){
                this.animationStatus.saleBanner = true;
                realmeC3Listener.emit('section-flashsale-banner');
            }
        }

        // Main Feature Section
        if( reachSection( this.pageSections.$mainFeature )){
            if( !this.animationStatus.mainFeature){
                this.animationStatus.mainFeature = true;
                realmeC3Listener.emit('section-main-feature');
            }
        }

        // TVC Section
        if( reachSection( this.pageSections.$TVC )){
            if( !this.animationStatus.TVC){
                this.animationStatus.TVC = true;
                realmeC3Listener.emit('section-intro-video');
            }
        }

        // Phone Review
        if( reachSection( this.pageSections.$phoneReview )){
            if( !this.animationStatus.phoneReview){
                this.animationStatus.phoneReview = true;
                realmeC3Listener.emit('section-phone-review');
            }
        }

        // Camera Intro
        if( reachSection( this.pageSections.$cameraIntro )){
            if( !this.animationStatus.cameraIntro){
                this.animationStatus.cameraIntro = true;
                realmeC3Listener.emit('section-camera-intro');
            }
        }

        // Camera Gallery
        if( reachSection( this.pageSections.$cameraGallery )){
            if( !this.animationStatus.cameraGallery){
                this.animationStatus.cameraGallery = true;
                realmeC3Listener.emit('section-camera-gallery');
            }
        }

        // Camera Closeup
        if( reachSection( this.pageSections.$cameraCloseUp )){
            if( !this.animationStatus.cameraCloseUp){
                this.animationStatus.cameraCloseUp = true;
                realmeC3Listener.emit('section-closeup-camera');
            }
        }

        // Camera AI
        if( reachSection( this.pageSections.$cameraAI )){
            if( !this.animationStatus.cameraAI){
                this.animationStatus.cameraAI = true;
                realmeC3Listener.emit('section-camera-ai');
            }
        }

        // Camera AI
        if( reachSection( this.pageSections.$chipset )){
            if( !this.animationStatus.chipset){
                this.animationStatus.chipset = true;
                realmeC3Listener.emit('section-chipset');
            }
        }

        // Performance
        if( reachSection( this.pageSections.$performance )){
            if( !this.animationStatus.performance){
                this.animationStatus.performance = true;
                realmeC3Listener.emit('section-game-performance');
            }
        }

        // Performance
        if( reachSection( this.pageSections.$battery )){
            if( !this.animationStatus.battery){
                this.animationStatus.battery = true;
                realmeC3Listener.emit('section-battery');
            }
        }

        // Screen
        if( reachSection( this.pageSections.$screen )){
            if( !this.animationStatus.screen){
                this.animationStatus.screen = true;
                realmeC3Listener.emit('section-screen');
            }
        }

        // Fingerprint
        if( reachSection( this.pageSections.$fingerprint )){
            if( !this.animationStatus.fingerprint){
                this.animationStatus.fingerprint = true;
                realmeC3Listener.emit('section-fingerprint');
            }
        }

        // Simtray
        if( reachSection( this.pageSections.$simtray )){
            if( !this.animationStatus.simtray){
                this.animationStatus.simtray = true;
                realmeC3Listener.emit('section-simtray');
            }
        }

        // Colors
        if( reachSection( this.pageSections.$colors )){
            if( !this.animationStatus.colors){
                this.animationStatus.colors = true;
                realmeC3Listener.emit('section-colors');
            }
        }

        // Design
        if( reachSection( this.pageSections.$design)){
            if( !this.animationStatus.design){
                this.animationStatus.design = true;
                realmeC3Listener.emit('section-design');
            }
        }

        // realmeUI
        if( reachSection( this.pageSections.$realmeUI)){
            if( !this.animationStatus.realmeUI){
                this.animationStatus.realmeUI = true;
                realmeC3Listener.emit('section-realme-ui');
            }
        }

        // Quality
        if( reachSection( this.pageSections.$quality)){
            if( !this.animationStatus.quality){
                this.animationStatus.quality = true;
                realmeC3Listener.emit('section-quality');
            }
        }
    }
}