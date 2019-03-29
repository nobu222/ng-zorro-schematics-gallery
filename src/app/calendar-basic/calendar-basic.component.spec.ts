import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarBasicComponent } from './calendar-basic.component';

describe('CalendarBasicComponent', () => {
  let component: CalendarBasicComponent;
  let fixture: ComponentFixture<CalendarBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
