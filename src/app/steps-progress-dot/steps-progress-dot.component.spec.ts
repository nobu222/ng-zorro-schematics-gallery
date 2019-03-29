import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsProgressDotComponent } from './steps-progress-dot.component';

describe('StepsProgressDotComponent', () => {
  let component: StepsProgressDotComponent;
  let fixture: ComponentFixture<StepsProgressDotComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsProgressDotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsProgressDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
