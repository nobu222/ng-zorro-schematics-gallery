import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerValueComponent } from './time-picker-value.component';

describe('TimePickerValueComponent', () => {
  let component: TimePickerValueComponent;
  let fixture: ComponentFixture<TimePickerValueComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
