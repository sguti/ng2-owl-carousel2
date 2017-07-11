"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:quotemark
var core_1 = require("@angular/core");
// tslint:disable-next-line:quotemark
var Ng2OwlCarouselItem = (function () {
    function Ng2OwlCarouselItem() {
    }
    Ng2OwlCarouselItem.prototype.ngOnInit = function () {
        this.onItemSelect = new core_1.EventEmitter();
    };
    Ng2OwlCarouselItem.prototype.onSelect = function () {
        this.onItemSelect.emit(this.item);
    };
    __decorate([
        core_1.Input()
    ], Ng2OwlCarouselItem.prototype, "item", void 0);
    __decorate([
        core_1.Output()
    ], Ng2OwlCarouselItem.prototype, "onItemSelect", void 0);
    Ng2OwlCarouselItem = __decorate([
        core_1.Component({
            // tslint:disable-next-line:quotemark
            selector: 'carousel-item',
            template: "\n  <div>\n    <ng-content> </ng-content>\n  </div>"
        })
    ], Ng2OwlCarouselItem);
    return Ng2OwlCarouselItem;
}());
exports.Ng2OwlCarouselItem = Ng2OwlCarouselItem;
