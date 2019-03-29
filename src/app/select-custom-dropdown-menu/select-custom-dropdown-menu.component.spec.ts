import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectCustomDropdownMenuComponent } from './select-custom-dropdown-menu.component';

describe('SelectCustomDropdownMenuComponent', () => {
  let component: SelectCustomDropdownMenuComponent;
  let fixture: ComponentFixture<SelectCustomDropdownMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomDropdownMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCustomDropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
