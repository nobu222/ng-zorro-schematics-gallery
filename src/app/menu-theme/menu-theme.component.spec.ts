import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuThemeComponent } from './menu-theme.component';

describe('MenuThemeComponent', () => {
  let component: MenuThemeComponent;
  let fixture: ComponentFixture<MenuThemeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
