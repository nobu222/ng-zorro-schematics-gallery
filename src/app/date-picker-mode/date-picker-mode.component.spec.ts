import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerModeComponent } from './date-picker-mode.component';

describe('DatePickerModeComponent', () => {
  let component: DatePickerModeComponent;
  let fixture: ComponentFixture<DatePickerModeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
