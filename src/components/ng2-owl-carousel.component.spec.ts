import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2OwlCarouselComponent } from './ng2-owl-carousel.component';

describe('Ng2OwlCarouselComponent', () => {
  let component: Ng2OwlCarouselComponent;
  let fixture: ComponentFixture<Ng2OwlCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2OwlCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2OwlCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
