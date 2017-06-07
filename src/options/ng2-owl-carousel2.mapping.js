"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScreenResolutionMap = (function () {
    function ScreenResolutionMap(screenWidth, itemCount, nav, loop) {
        this.screenWidth = screenWidth;
        this.itemCount = itemCount;
        this.nav = nav;
        this.loop = loop;
    }
    return ScreenResolutionMap;
}());
exports.ScreenResolutionMap = ScreenResolutionMap;
var MergefitMap = (function () {
    function MergefitMap(screenWidth, mergeFit) {
        this.screenWidth = screenWidth;
        this.mergeFit = mergeFit;
    }
    return MergefitMap;
}());
exports.MergefitMap = MergefitMap;
