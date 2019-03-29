import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinBasicComponent } from './spin-basic.component';

describe('SpinBasicComponent', () => {
  let component: SpinBasicComponent;
  let fixture: ComponentFixture<SpinBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
