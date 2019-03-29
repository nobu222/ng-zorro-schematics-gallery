import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsSimpleComponent } from './steps-simple.component';

describe('StepsSimpleComponent', () => {
  let component: StepsSimpleComponent;
  let fixture: ComponentFixture<StepsSimpleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
