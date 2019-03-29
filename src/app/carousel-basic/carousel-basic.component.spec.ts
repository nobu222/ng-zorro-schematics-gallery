import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselBasicComponent } from './carousel-basic.component';

describe('CarouselBasicComponent', () => {
  let component: CarouselBasicComponent;
  let fixture: ComponentFixture<CarouselBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
