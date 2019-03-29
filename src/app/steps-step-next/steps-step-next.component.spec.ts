import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsStepNextComponent } from './steps-step-next.component';

describe('StepsStepNextComponent', () => {
  let component: StepsStepNextComponent;
  let fixture: ComponentFixture<StepsStepNextComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsStepNextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsStepNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
