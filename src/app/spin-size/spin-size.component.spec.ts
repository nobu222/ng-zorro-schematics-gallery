import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinSizeComponent } from './spin-size.component';

describe('SpinSizeComponent', () => {
  let component: SpinSizeComponent;
  let fixture: ComponentFixture<SpinSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
