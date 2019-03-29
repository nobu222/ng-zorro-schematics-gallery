import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerBasicComponent } from './time-picker-basic.component';

describe('TimePickerBasicComponent', () => {
  let component: TimePickerBasicComponent;
  let fixture: ComponentFixture<TimePickerBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
