import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerFormatComponent } from './date-picker-format.component';

describe('DatePickerFormatComponent', () => {
  let component: DatePickerFormatComponent;
  let fixture: ComponentFixture<DatePickerFormatComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerFormatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
