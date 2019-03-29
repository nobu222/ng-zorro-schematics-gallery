import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuInlineCollapsedComponent } from './menu-inline-collapsed.component';

describe('MenuInlineCollapsedComponent', () => {
  let component: MenuInlineCollapsedComponent;
  let fixture: ComponentFixture<MenuInlineCollapsedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInlineCollapsedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInlineCollapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
