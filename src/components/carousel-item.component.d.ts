import { OnInit, EventEmitter } from '@angular/core';
declare class Ng2OwlCarouselItem implements OnInit {
    item: any;
    onItemSelect: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onSelect(): void;
}
export { Ng2OwlCarouselItem };
