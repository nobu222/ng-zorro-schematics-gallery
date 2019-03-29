import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineColorComponent } from './timeline-color.component';

describe('TimelineColorComponent', () => {
  let component: TimelineColorComponent;
  let fixture: ComponentFixture<TimelineColorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
