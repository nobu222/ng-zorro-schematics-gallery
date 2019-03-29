import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSwitchModeComponent } from './menu-switch-mode.component';

describe('MenuSwitchModeComponent', () => {
  let component: MenuSwitchModeComponent;
  let fixture: ComponentFixture<MenuSwitchModeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSwitchModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSwitchModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
