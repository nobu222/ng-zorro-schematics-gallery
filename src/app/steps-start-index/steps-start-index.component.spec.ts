import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsStartIndexComponent } from './steps-start-index.component';

describe('StepsStartIndexComponent', () => {
  let component: StepsStartIndexComponent;
  let fixture: ComponentFixture<StepsStartIndexComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsStartIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsStartIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
