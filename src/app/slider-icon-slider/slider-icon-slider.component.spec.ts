import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderIconSliderComponent } from './slider-icon-slider.component';

describe('SliderIconSliderComponent', () => {
  let component: SliderIconSliderComponent;
  let fixture: ComponentFixture<SliderIconSliderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderIconSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderIconSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
