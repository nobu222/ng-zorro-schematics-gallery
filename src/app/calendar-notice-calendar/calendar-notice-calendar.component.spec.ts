import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarNoticeCalendarComponent } from './calendar-notice-calendar.component';

describe('CalendarNoticeCalendarComponent', () => {
  let component: CalendarNoticeCalendarComponent;
  let fixture: ComponentFixture<CalendarNoticeCalendarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarNoticeCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarNoticeCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
