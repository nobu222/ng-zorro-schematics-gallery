import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressSegmentComponent } from './progress-segment.component';

describe('ProgressSegmentComponent', () => {
  let component: ProgressSegmentComponent;
  let fixture: ComponentFixture<ProgressSegmentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressSegmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
