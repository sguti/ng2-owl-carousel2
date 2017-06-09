import { ScreenResolutionMap, MergefitMap } from "./ng2-owl-carousel2.mapping";
declare class CarouselOptions {
    items: number;
    margin: number;
    loop: boolean;
    dots: boolean;
    dotsEach: number | boolean;
    dotData: boolean;
    center: boolean;
    nav: boolean;
    navSpeed: boolean | number;
    dotSpeed: boolean | number;
    callbacks: boolean;
    responsiveRefreshRate: number;
    rewind: boolean;
    navText: Array<string>;
    navElement: string;
    slideBy: number | string;
    mouseDrag: boolean;
    touchDrag: boolean;
    pullDrag: boolean;
    freeDrag: boolean;
    stagePadding: number;
    merge: boolean;
    mergeFit: boolean;
    autoWidth: boolean;
    autoHeight: boolean;
    startPosition: number;
    rtl: boolean;
    smartSpeed: number;
    fluidSpeed: boolean;
    dragEndSpeed: boolean;
    responsive: object;
    responsiveRefshRate: number;
    responsiveBaseElement: Window;
    nestedItemSelector: boolean | string;
    itemElement: string;
    stageElement: string;
    refreshClass: string;
    loadedClass: string;
    loadingClass: string;
    rtlClass: string;
    responsiveClass: boolean;
    dragClass: string;
    itemClass: string;
    stageClass: string;
    stageOuterClass: string;
    grabClass: string;
    autoPlay: boolean;
    autoplayTimeout: number;
    autoplayHoverPause: boolean;
    lazyLoad: boolean;
    mouseScroll: boolean;
    URLhashListener: boolean;
    video: boolean;
    videoHeight: number | boolean;
    videoWidth: number | boolean;
    animateOut: string | boolean;
    animateIn: string | boolean;
    fallbackEasing: string;
    info: any;
    navContainer: string | boolean;
    dotsContainer: string | boolean;
    preload: boolean;
    preloadCount: number;
    maxItemCount: number;
    constructor();
    setAutoHeight(enable: boolean): CarouselOptions;
    setAutoWidth(enable: boolean): CarouselOptions;
    enableAutoPlay(autoPlay?: boolean, autoplayTimeout?: number, autoplayHoverPause?: boolean): CarouselOptions;
    enableLazyLoading(enable: boolean): CarouselOptions;
    allowMerge(enable: boolean, mapping: Array<MergefitMap>): CarouselOptions;
    enableMouseScroll(enable: boolean): CarouselOptions;
    makeResponsive(enable: boolean, mapping: Array<ScreenResolutionMap>): CarouselOptions;
    directionRightToLeft(enable: boolean): CarouselOptions;
    directionLeftToRight(enable: boolean): CarouselOptions;
    setNextPrevText(prev: string, next: string): CarouselOptions;
}
export { CarouselOptions, ScreenResolutionMap, MergefitMap };
