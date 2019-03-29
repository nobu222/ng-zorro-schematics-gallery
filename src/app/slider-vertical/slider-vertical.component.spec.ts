import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderVerticalComponent } from './slider-vertical.component';

describe('SliderVerticalComponent', () => {
  let component: SliderVerticalComponent;
  let fixture: ComponentFixture<SliderVerticalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
