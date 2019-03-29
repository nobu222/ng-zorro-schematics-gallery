import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerTimeComponent } from './date-picker-time.component';

describe('DatePickerTimeComponent', () => {
  let component: DatePickerTimeComponent;
  let fixture: ComponentFixture<DatePickerTimeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
