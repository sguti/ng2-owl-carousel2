export class ScreenResolutionMap {
    screenWidth: number;
    itemCount: number;
    nav: boolean;
    loop: boolean;
    constructor(screenWidth: number, itemCount: number, nav: boolean, loop: boolean) {
        this.screenWidth = screenWidth;
        this.itemCount = itemCount;
        this.nav = nav;
        this.loop = loop;
    }
}

export class MergefitMap {
    screenWidth: number;
    mergeFit: boolean;
    constructor(screenWidth: number, mergeFit: boolean) {
        this.screenWidth = screenWidth;
        this.mergeFit = mergeFit;
    }
}