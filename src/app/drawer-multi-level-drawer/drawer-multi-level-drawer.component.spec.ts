import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerMultiLevelDrawerComponent } from './drawer-multi-level-drawer.component';

describe('DrawerMultiLevelDrawerComponent', () => {
  let component: DrawerMultiLevelDrawerComponent;
  let fixture: ComponentFixture<DrawerMultiLevelDrawerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerMultiLevelDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerMultiLevelDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
