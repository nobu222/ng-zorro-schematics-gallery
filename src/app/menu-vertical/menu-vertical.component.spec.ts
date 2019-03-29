import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuVerticalComponent } from './menu-vertical.component';

describe('MenuVerticalComponent', () => {
  let component: MenuVerticalComponent;
  let fixture: ComponentFixture<MenuVerticalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
