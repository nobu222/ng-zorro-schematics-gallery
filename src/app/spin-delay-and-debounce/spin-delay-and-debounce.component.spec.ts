import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinDelayAndDebounceComponent } from './spin-delay-and-debounce.component';

describe('SpinDelayAndDebounceComponent', () => {
  let component: SpinDelayAndDebounceComponent;
  let fixture: ComponentFixture<SpinDelayAndDebounceComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinDelayAndDebounceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinDelayAndDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
