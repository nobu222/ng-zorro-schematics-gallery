import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerPresettedRangesComponent } from './date-picker-presetted-ranges.component';

describe('DatePickerPresettedRangesComponent', () => {
  let component: DatePickerPresettedRangesComponent;
  let fixture: ComponentFixture<DatePickerPresettedRangesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerPresettedRangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerPresettedRangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
