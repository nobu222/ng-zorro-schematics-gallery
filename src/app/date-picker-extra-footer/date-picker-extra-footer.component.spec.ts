import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerExtraFooterComponent } from './date-picker-extra-footer.component';

describe('DatePickerExtraFooterComponent', () => {
  let component: DatePickerExtraFooterComponent;
  let fixture: ComponentFixture<DatePickerExtraFooterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerExtraFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerExtraFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
