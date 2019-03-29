import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerDisabledPartComponent } from './time-picker-disabled-part.component';

describe('TimePickerDisabledPartComponent', () => {
  let component: TimePickerDisabledPartComponent;
  let fixture: ComponentFixture<TimePickerDisabledPartComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerDisabledPartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerDisabledPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
