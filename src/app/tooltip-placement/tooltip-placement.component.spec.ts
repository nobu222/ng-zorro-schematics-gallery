import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipPlacementComponent } from './tooltip-placement.component';

describe('TooltipPlacementComponent', () => {
  let component: TooltipPlacementComponent;
  let fixture: ComponentFixture<TooltipPlacementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
