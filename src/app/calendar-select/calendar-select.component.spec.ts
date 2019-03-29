import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalendarSelectComponent } from './calendar-select.component';

describe('CalendarSelectComponent', () => {
  let component: CalendarSelectComponent;
  let fixture: ComponentFixture<CalendarSelectComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
