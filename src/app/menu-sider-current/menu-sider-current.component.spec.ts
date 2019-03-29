import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuSiderCurrentComponent } from './menu-sider-current.component';

describe('MenuSiderCurrentComponent', () => {
  let component: MenuSiderCurrentComponent;
  let fixture: ComponentFixture<MenuSiderCurrentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSiderCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSiderCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
