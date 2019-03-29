import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelinePendingComponent } from './timeline-pending.component';

describe('TimelinePendingComponent', () => {
  let component: TimelinePendingComponent;
  let fixture: ComponentFixture<TimelinePendingComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelinePendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
