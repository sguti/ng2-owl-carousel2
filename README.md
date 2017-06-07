# ng2-owl-carousel2
This is not a official distribution of owl carousel 2--
--Owl Carosel for Angular 2+ --

### Installation
Run this command to install this library
```bash
npm install ng2-owl-carousel2
```





### Dependencies

This library needs jquery and owl carousel library

import jquery globally as per your type of your project.

import owlcarousel library after importing jquery


### How to use

Import and add this component to the declaration section

```typescript
import { Ng2OwlCarouselComponent } from "ng2.owl.carousel";

@NgModule({
  declarations: [
    AppComponent,
    Ng2OwlCarouselComponent
  ],
  imports: [        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
Now go the component where you want to use it. and place your html inside <ng2-owl-carousel2></ng2-owl-carousel2> tag

```html
 <ng2-owl-carousel2
     [options]="carouselOptions">
     //your html goes here
 </ng2-owl-carousel2>

```
In the typescript file-
1. Import CarouselOptions
2. Declare a variable of type CarouselOptions and then you can access all the properties of owl carousel with nice intellisense.

```typescript
    import { CarouselOptions } from 'ng2-owl-carousel2';
    
    export class AppComponent {    
    carouselOptions: CarouselOptions;  

    constructor() {    
    this.carouselOptions = new CarouselOptions();

    this.carouselOptions.enableMouseScroll(true)
                        .directionLeftToRight(true);
    
  }
```


## APIs
1.  **setAutoHeight(enable: boolean)**--
    Set auto height
2.  **setAutoWidth(enable: boolean)**--
    set auto width 
3.  **enableAutoPlay(autoPlay?: boolean, autoplayTimeout?: number, autoplayHoverPause?: boolean)**--
    Enables auto play
4.  **enableLazyLoading(enable: boolean)**--
    Enables lazy loading of images
5.  **allowMerge(enable: boolean, mapping: Array<MergefitMap>)**--
    To use this feature import MergefitMap class along with CarouselOptions and pass an array of mapping
    
```typescript
    import { CarouselOptions,MergefitMap } from 'ng2-owl-carousel2';
    
     constructor() {

    this.carouselOptions = new CarouselOptions();

    //first parameter of the constructor is the resolution of the screen and second one is to enable or disable Merge fit option
    let mappings: Array<MergefitMap> =[
      new MergefitMap(678, true),
      new MergefitMap(500, true)
    ] ;

    this.carouselOptions.enableMouseScroll(true)
                        .mergeFit(mappings);
                      

  }
```    
6.  **enableMouseScroll(enable: boolean)**--
    Enables mouse scroll on carousel.
7.  **makeResponsive(enable: boolean, mapping: Array<ScreenResolutionMap>)**--
     To use this feature import ScreenResolutionMap class along with CarouselOptions and pass an array of mapping
    
```typescript
    import { CarouselOptions,ScreenResolutionMap } from 'ng2-owl-carousel2';
    
      constructor() {

    this.carouselOptions = new CarouselOptions();

    // Parameters of the constructor
    // screenWidth : Width of the screen
    // itemCount : items to be displayed on that resolution
    // nav : navigation enabled or disapled
    // loop : should loop or not


    let mappings: Array<ScreenResolutionMap> =[
      new ScreenResolutionMap(678, true),
      new ScreenResolutionMap(500, true)
    ] ;

    this.carouselOptions.enableMouseScroll(true)
                        .mergeFit(mappings);
                      

  }
```    
8.  **directionRightToLeft(enable: boolean)**--
    Direction in whichc carousel items will move
9.  **directionLeftToRight(enable: boolean)**--
    Direction in whichc carousel items will move
 
 **All these methods are chainnable**

## License

***MIT***
