import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuHorizontalComponent } from './menu-horizontal.component';

describe('MenuHorizontalComponent', () => {
  let component: MenuHorizontalComponent;
  let fixture: ComponentFixture<MenuHorizontalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});