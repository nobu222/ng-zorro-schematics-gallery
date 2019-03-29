import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineRightComponent } from './timeline-right.component';

describe('TimelineRightComponent', () => {
  let component: TimelineRightComponent;
  let fixture: ComponentFixture<TimelineRightComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
