import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuRecursiveComponent } from './menu-recursive.component';

describe('MenuRecursiveComponent', () => {
  let component: MenuRecursiveComponent;
  let fixture: ComponentFixture<MenuRecursiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRecursiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRecursiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
