import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerPlacementComponent } from './drawer-placement.component';

describe('DrawerPlacementComponent', () => {
  let component: DrawerPlacementComponent;
  let fixture: ComponentFixture<DrawerPlacementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
