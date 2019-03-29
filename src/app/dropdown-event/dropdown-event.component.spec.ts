import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownEventComponent } from './dropdown-event.component';

describe('DropdownEventComponent', () => {
  let component: DropdownEventComponent;
  let fixture: ComponentFixture<DropdownEventComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
