import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsCustomizedProgressDotComponent } from './steps-customized-progress-dot.component';

describe('StepsCustomizedProgressDotComponent', () => {
  let component: StepsCustomizedProgressDotComponent;
  let fixture: ComponentFixture<StepsCustomizedProgressDotComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsCustomizedProgressDotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsCustomizedProgressDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
