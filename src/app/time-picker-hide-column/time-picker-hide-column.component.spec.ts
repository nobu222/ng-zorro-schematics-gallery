import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerHideColumnComponent } from './time-picker-hide-column.component';

describe('TimePickerHideColumnComponent', () => {
  let component: TimePickerHideColumnComponent;
  let fixture: ComponentFixture<TimePickerHideColumnComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerHideColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerHideColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
