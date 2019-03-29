import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerDisabledComponent } from './time-picker-disabled.component';

describe('TimePickerDisabledComponent', () => {
  let component: TimePickerDisabledComponent;
  let fixture: ComponentFixture<TimePickerDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
