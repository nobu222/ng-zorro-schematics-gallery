import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipArrowPointAtCenterComponent } from './tooltip-arrow-point-at-center.component';

describe('TooltipArrowPointAtCenterComponent', () => {
  let component: TooltipArrowPointAtCenterComponent;
  let fixture: ComponentFixture<TooltipArrowPointAtCenterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipArrowPointAtCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipArrowPointAtCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
