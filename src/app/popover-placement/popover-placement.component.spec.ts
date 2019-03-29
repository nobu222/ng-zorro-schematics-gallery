import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverPlacementComponent } from './popover-placement.component';

describe('PopoverPlacementComponent', () => {
  let component: PopoverPlacementComponent;
  let fixture: ComponentFixture<PopoverPlacementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
