import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselAutoplayComponent } from './carousel-autoplay.component';

describe('CarouselAutoplayComponent', () => {
  let component: CarouselAutoplayComponent;
  let fixture: ComponentFixture<CarouselAutoplayComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselAutoplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselAutoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
