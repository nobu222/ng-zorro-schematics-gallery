import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownItemComponent } from './dropdown-item.component';

describe('DropdownItemComponent', () => {
  let component: DropdownItemComponent;
  let fixture: ComponentFixture<DropdownItemComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
