import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownBasicComponent } from './dropdown-basic.component';

describe('DropdownBasicComponent', () => {
  let component: DropdownBasicComponent;
  let fixture: ComponentFixture<DropdownBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
