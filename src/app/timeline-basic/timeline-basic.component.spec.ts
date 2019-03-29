import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimelineBasicComponent } from './timeline-basic.component';

describe('TimelineBasicComponent', () => {
  let component: TimelineBasicComponent;
  let fixture: ComponentFixture<TimelineBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
