"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ng2_owl_carousel2_mapping_1 = require("./ng2-owl-carousel2.mapping");
exports.ScreenResolutionMap = ng2_owl_carousel2_mapping_1.ScreenResolutionMap;
exports.MergefitMap = ng2_owl_carousel2_mapping_1.MergefitMap;
var CarouselOptions = (function () {
    function CarouselOptions() {
        this.navContainer = false;
        this.dotsContainer = false;
        this.animateIn = false;
        this.animateOut = false;
        this.videoWidth = false;
        this.videoHeight = false;
        this.video = false;
        this.items = 3;
        this.margin = 5;
        this.nav = true;
        this.navText = ["&#x27;next &#x27;", "&#x27;prev &#x27;"];
        this.navElement = "div";
        this.responsiveRefreshRate = 200;
        this.slideBy = 1;
        this.dots = true;
        this.dotsEach = false;
        this.dotData = false;
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
        this.URLhashListener = false;
        this.responsiveRefshRate = 200;
        this.responsiveBaseElement = window;
        this.fallbackEasing = "swing";
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
    CarouselOptions.prototype.setAutoHeight = function (enable) {
        this.autoHeight = true;
        return this;
    };
    CarouselOptions.prototype.setAutoWidth = function (enable) {
        this.autoWidth = true;
        return this;
    };
    CarouselOptions.prototype.enableAutoPlay = function (autoPlay, autoplayTimeout, autoplayHoverPause) {
        if (autoPlay === void 0) { autoPlay = true; }
        if (autoplayTimeout === void 0) { autoplayTimeout = 1000; }
        if (autoplayHoverPause === void 0) { autoplayHoverPause = true; }
        this.autoPlay = autoPlay;
        this.autoplayTimeout = autoplayTimeout;
        this.autoplayHoverPause = autoplayHoverPause;
        return this;
    };
    CarouselOptions.prototype.enableLazyLoading = function (enable) {
        this.lazyLoad = true;
        return this;
    };
    CarouselOptions.prototype.allowMerge = function (enable, mapping) {
        var _this = this;
        this.merge = true;
        if (mapping && mapping.length) {
            mapping.forEach(function (item) {
                _this.responsive[item.screenWidth] = item.mergeFit;
            });
        }
        return this;
    };
    CarouselOptions.prototype.enableMouseScroll = function (enable) {
        this.mouseScroll = true;
        this.loop = true;
        return this;
    };
    CarouselOptions.prototype.makeResponsive = function (enable, mapping) {
        var _this = this;
        this.responsiveClass = true;
        mapping.forEach(function (item) {
            _this.responsive[item.screenWidth] = {
                items: item.itemCount,
                nav: item.nav,
                loop: item.loop
            };
        });
        return this;
    };
    CarouselOptions.prototype.directionRightToLeft = function (enable) {
        this.rtl = true;
        return this;
    };
    CarouselOptions.prototype.directionLeftToRight = function (enable) {
        this.rtl = false;
        return this;
    };
    return CarouselOptions;
}());
exports.CarouselOptions = CarouselOptions;
