import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimePickerAddonComponent } from './time-picker-addon.component';

describe('TimePickerAddonComponent', () => {
  let component: TimePickerAddonComponent;
  let fixture: ComponentFixture<TimePickerAddonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerAddonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePickerAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
