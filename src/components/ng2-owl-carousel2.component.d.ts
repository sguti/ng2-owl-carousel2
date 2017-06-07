import { OnInit, AfterViewInit } from '@angular/core';
import { CarouselOptions, ScreenResolutionMap, MergefitMap } from '../options/ng2-owl-carousel2.options';
declare class Ng2OwlCarouselComponent implements OnInit, AfterViewInit {
    options: CarouselOptions;
    defaultOptions: CarouselOptions;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export { Ng2OwlCarouselComponent, CarouselOptions, ScreenResolutionMap, MergefitMap };
