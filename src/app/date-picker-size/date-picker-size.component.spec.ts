import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerSizeComponent } from './date-picker-size.component';

describe('DatePickerSizeComponent', () => {
  let component: DatePickerSizeComponent;
  let fixture: ComponentFixture<DatePickerSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
