import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerDisabledDateComponent } from './date-picker-disabled-date.component';

describe('DatePickerDisabledDateComponent', () => {
  let component: DatePickerDisabledDateComponent;
  let fixture: ComponentFixture<DatePickerDisabledDateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerDisabledDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerDisabledDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
