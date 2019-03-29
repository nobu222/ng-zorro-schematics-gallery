import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerBasicRightComponent } from './drawer-basic-right.component';

describe('DrawerBasicRightComponent', () => {
  let component: DrawerBasicRightComponent;
  let fixture: ComponentFixture<DrawerBasicRightComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerBasicRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerBasicRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
