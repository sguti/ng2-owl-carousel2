class CarouselOptions {
   /* Owl Carousel options */
    items: number;
    margin: number;
    loop: boolean;
    center: boolean;
    nav: boolean;
    rewind: boolean;
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
    fallbackEasi: string;
    info: boolean;
    nestedItemSelector: boolean;
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

    /* added feature, only applicable while using lazy-loading feature */
    preload: boolean;
    preloadCount: number;
    maxItemCount: number;

    constructor(){
        this.items = 3;
        this.margin = 5;
        this.nav = true;
        this.loop = false;
        this.center = false;
        this.rewind = false;
        this.mouseDrag = true;
        this.touchDrag = true;
        this.pullDrag = true;
        this.freeDrag = false;
        this.stagePadding = 0;
        this.merge = false;
        this.mergeFit = true;
        this.autoWidth = false;
        this.startPosition = 0;
        this.rtl = false;
        this.smartSpeed = 250;
        this.fluidSpeed = false;
        this.dragEndSpeed = false;
        this.responsive = {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        };
        this.responsiveRefshRate = 200;
        this.responsiveBaseElement = window;
        this.fallbackEasi = "swing";
        this.info = false;
        this.nestedItemSelector = false;
        this.itemElement = "div";
        this.stageElement = "div";
        this.refreshClass = "owl-refresh";
        this.loadedClass = "owl-loaded";
        this.loadingClass = "owl-loading";
        this.rtlClass = "owl-rtl";
        this.responsiveClass = false;
        this.dragClass = "owl-drag";
        this.itemClass = "owl-item";
        this.stageClass = "owl-stage";
        this.stageOuterClass = "owl-stage-outer";
        this.grabClass = "owl-grab";
        this.autoHeight = true;
        this.autoPlay = false;
        this.autoplayTimeout = 1000;
        this.autoplayHoverPause = false;
        this.lazyLoad = false;
        this.mouseScroll = false;

        this.preload = false;
        this.preloadCount = 0;
        this.maxItemCount = 10000;

    }

    setAutoHeight(enable: boolean): CarouselOptions {
        this.autoHeight = true;
        return this;
    }

    setAutoWidth(enable: boolean): CarouselOptions {
        this.autoWidth = true;
        return this;
    }
    enableAutoPlay(autoPlay: boolean = true , autoplayTimeout: number = 1000 , autoplayHoverPause: boolean = true): CarouselOptions {
        this.autoPlay = autoPlay;
        this.autoplayTimeout = autoplayTimeout;
        this.autoplayHoverPause = autoplayHoverPause;
        return this;
    }

    enableLazyLoading(enable: boolean): CarouselOptions {
        this.lazyLoad = true;
        return this;
    }
    allowMerge(enable: boolean, mapping: Array<MergefitMap>): CarouselOptions {
        this.merge = true;
        if(mapping && mapping.length){
            mapping.forEach((item) => {
                this.responsive[item.screenWidth] = item.mergeFit;
            });
        }
        return this;
    }
    enableMouseScroll(enable: boolean): CarouselOptions {
        this.mouseScroll = true;
        this.loop = true;
        return this;
    }
    makeResponsive(enable: boolean, mapping: Array<ScreenResolutionMap>): CarouselOptions {
        this.responsiveClass = true;
        mapping.forEach((item) => {
            this.responsive[item.screenWidth] = {
                items: item.itemCount,
                nav: item.nav,
                loop: item.loop
            };
        });
        return this;
    }
    directionRightToLeft(enable: boolean): CarouselOptions {
        this.rtl = true;
        return this;
    }
    directionLeftToRight(enable: boolean): CarouselOptions {
        this.rtl = false;
        return this;
    }
}

class ScreenResolutionMap {
    screenWidth: number;
    itemCount: number;
    nav: boolean;
    loop: boolean;
}

class MergefitMap {
    screenWidth: number;
    mergeFit: boolean;
}

export {  CarouselOptions
        , ScreenResolutionMap
        , MergefitMap };