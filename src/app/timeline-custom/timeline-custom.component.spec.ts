import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineCustomComponent } from './timeline-custom.component';

describe('TimelineCustomComponent', () => {
  let component: TimelineCustomComponent;
  let fixture: ComponentFixture<TimelineCustomComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
