import { OnInit, AfterViewInit } from '@angular/core';
import { CarouselOptions, ScreenResolutionMap, MergefitMap } from '../options/ng2.owl.carousel.options';
declare class Ng2OwlCarouselComponent implements OnInit, AfterViewInit {
    options: CarouselOptions;
    defaultOptions: CarouselOptions;
    $carousel: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
export { Ng2OwlCarouselComponent, CarouselOptions, ScreenResolutionMap, MergefitMap };
