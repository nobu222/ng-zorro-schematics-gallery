import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselFadeComponent } from './carousel-fade.component';

describe('CarouselFadeComponent', () => {
  let component: CarouselFadeComponent;
  let fixture: ComponentFixture<CarouselFadeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselFadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
