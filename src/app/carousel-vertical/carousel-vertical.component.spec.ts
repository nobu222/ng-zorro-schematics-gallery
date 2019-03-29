import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselVerticalComponent } from './carousel-vertical.component';

describe('CarouselVerticalComponent', () => {
  let component: CarouselVerticalComponent;
  let fixture: ComponentFixture<CarouselVerticalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
