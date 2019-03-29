import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsSmallSizeComponent } from './steps-small-size.component';

describe('StepsSmallSizeComponent', () => {
  let component: StepsSmallSizeComponent;
  let fixture: ComponentFixture<StepsSmallSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsSmallSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsSmallSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
