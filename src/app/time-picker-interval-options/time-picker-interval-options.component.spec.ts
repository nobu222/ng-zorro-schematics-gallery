import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerIntervalOptionsComponent } from './time-picker-interval-options.component';

describe('TimePickerIntervalOptionsComponent', () => {
  let component: TimePickerIntervalOptionsComponent;
  let fixture: ComponentFixture<TimePickerIntervalOptionsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerIntervalOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerIntervalOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
