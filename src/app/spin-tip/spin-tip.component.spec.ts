import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinTipComponent } from './spin-tip.component';

describe('SpinTipComponent', () => {
  let component: SpinTipComponent;
  let fixture: ComponentFixture<SpinTipComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinTipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
