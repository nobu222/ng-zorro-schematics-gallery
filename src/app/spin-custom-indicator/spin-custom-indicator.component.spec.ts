import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinCustomIndicatorComponent } from './spin-custom-indicator.component';

describe('SpinCustomIndicatorComponent', () => {
  let component: SpinCustomIndicatorComponent;
  let fixture: ComponentFixture<SpinCustomIndicatorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinCustomIndicatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinCustomIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
