// tslint:disable-next-line:quotemark
import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
// tslint:disable-next-line:quotemark
import { CarouselOptions, ScreenResolutionMap, MergefitMap } from '../options/ng2.owl.carousel.options';

declare var $: any;

@Component({
  // tslint:disable-next-line:quotemark
  selector: 'ng2-owl-carousel',
  template:`
  <div class="carousel-wrapper owl-carousel owl-theme">
    <ng-content"> </ng-content>
  </div>`
})
class Ng2OwlCarouselComponent implements OnInit, AfterViewInit {

  @Input() options: CarouselOptions;
  defaultOptions : CarouselOptions;
  $carousel: any;

  constructor() {
    this.defaultOptions = new CarouselOptions();
  }

  ngOnInit(): void {
    if(this.options){
      if (!(this.options instanceof CarouselOptions)){
       this.options = (<any>Object).assign(this.defaultOptions,this.options);
      }
    }
  }

  ngAfterViewInit(): void {

    this.$carousel = $(".carousel-wrapper");

    /* Handle mouse scroll */
    if(this.options.mouseScroll){
       // tslint:disable-next-line:typedef
       this.$carousel.on("mousewheel", ".owl-stage", function(e: any) {
        if (e.deltaY > 0) {
          this.$carousel.trigger("next.owl");
        } else {
          this.$carousel.trigger("prev.owl");
        }
        e.preventDefault();
      });
    }

    this.$carousel.owlCarousel(this.options);
  }

}

export { Ng2OwlCarouselComponent
       , CarouselOptions
       , ScreenResolutionMap
       , MergefitMap };