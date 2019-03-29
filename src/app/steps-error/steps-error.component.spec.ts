import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsErrorComponent } from './steps-error.component';

describe('StepsErrorComponent', () => {
  let component: StepsErrorComponent;
  let fixture: ComponentFixture<StepsErrorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
