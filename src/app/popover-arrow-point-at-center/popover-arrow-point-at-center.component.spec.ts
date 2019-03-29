import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverArrowPointAtCenterComponent } from './popover-arrow-point-at-center.component';

describe('PopoverArrowPointAtCenterComponent', () => {
  let component: PopoverArrowPointAtCenterComponent;
  let fixture: ComponentFixture<PopoverArrowPointAtCenterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverArrowPointAtCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverArrowPointAtCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
