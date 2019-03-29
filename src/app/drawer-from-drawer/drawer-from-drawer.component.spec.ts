import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerFromDrawerComponent } from './drawer-from-drawer.component';

describe('DrawerFromDrawerComponent', () => {
  let component: DrawerFromDrawerComponent;
  let fixture: ComponentFixture<DrawerFromDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerFromDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerFromDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
