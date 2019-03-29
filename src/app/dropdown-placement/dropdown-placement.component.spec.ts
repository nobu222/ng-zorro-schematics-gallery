import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownPlacementComponent } from './dropdown-placement.component';

describe('DropdownPlacementComponent', () => {
  let component: DropdownPlacementComponent;
  let fixture: ComponentFixture<DropdownPlacementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
