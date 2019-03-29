import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerDisabledComponent } from './date-picker-disabled.component';

describe('DatePickerDisabledComponent', () => {
  let component: DatePickerDisabledComponent;
  let fixture: ComponentFixture<DatePickerDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
