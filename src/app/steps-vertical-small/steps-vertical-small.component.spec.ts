import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsVerticalSmallComponent } from './steps-vertical-small.component';

describe('StepsVerticalSmallComponent', () => {
  let component: StepsVerticalSmallComponent;
  let fixture: ComponentFixture<StepsVerticalSmallComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsVerticalSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsVerticalSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
