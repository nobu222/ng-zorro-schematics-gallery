import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsVerticalComponent } from './steps-vertical.component';

describe('StepsVerticalComponent', () => {
  let component: StepsVerticalComponent;
  let fixture: ComponentFixture<StepsVerticalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
