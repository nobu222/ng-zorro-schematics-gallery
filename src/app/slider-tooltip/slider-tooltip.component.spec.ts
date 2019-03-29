import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderTooltipComponent } from './slider-tooltip.component';

describe('SliderTooltipComponent', () => {
  let component: SliderTooltipComponent;
  let fixture: ComponentFixture<SliderTooltipComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
