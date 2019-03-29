import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerUserProfileComponent } from './drawer-user-profile.component';

describe('DrawerUserProfileComponent', () => {
  let component: DrawerUserProfileComponent;
  let fixture: ComponentFixture<DrawerUserProfileComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerUserProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
