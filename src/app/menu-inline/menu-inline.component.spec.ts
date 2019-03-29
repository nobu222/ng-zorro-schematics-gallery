import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuInlineComponent } from './menu-inline.component';

describe('MenuInlineComponent', () => {
  let component: MenuInlineComponent;
  let fixture: ComponentFixture<MenuInlineComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuInlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
