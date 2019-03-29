import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineAlternateComponent } from './timeline-alternate.component';

describe('TimelineAlternateComponent', () => {
  let component: TimelineAlternateComponent;
  let fixture: ComponentFixture<TimelineAlternateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineAlternateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineAlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
