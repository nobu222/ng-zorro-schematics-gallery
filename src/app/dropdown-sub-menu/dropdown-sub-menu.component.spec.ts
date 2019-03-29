import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownSubMenuComponent } from './dropdown-sub-menu.component';

describe('DropdownSubMenuComponent', () => {
  let component: DropdownSubMenuComponent;
  let fixture: ComponentFixture<DropdownSubMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownSubMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
