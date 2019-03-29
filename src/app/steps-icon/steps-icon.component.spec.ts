import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StepsIconComponent } from './steps-icon.component';

describe('StepsIconComponent', () => {
  let component: StepsIconComponent;
  let fixture: ComponentFixture<StepsIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
