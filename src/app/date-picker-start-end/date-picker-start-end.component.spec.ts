import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerStartEndComponent } from './date-picker-start-end.component';

describe('DatePickerStartEndComponent', () => {
  let component: DatePickerStartEndComponent;
  let fixture: ComponentFixture<DatePickerStartEndComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerStartEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerStartEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
