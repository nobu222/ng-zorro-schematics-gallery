import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerSizeComponent } from './time-picker-size.component';

describe('TimePickerSizeComponent', () => {
  let component: TimePickerSizeComponent;
  let fixture: ComponentFixture<TimePickerSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
