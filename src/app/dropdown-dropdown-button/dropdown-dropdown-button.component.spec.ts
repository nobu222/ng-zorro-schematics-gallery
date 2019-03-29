import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownDropdownButtonComponent } from './dropdown-dropdown-button.component';

describe('DropdownDropdownButtonComponent', () => {
  let component: DropdownDropdownButtonComponent;
  let fixture: ComponentFixture<DropdownDropdownButtonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownDropdownButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownDropdownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
