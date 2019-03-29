import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinInsideComponent } from './spin-inside.component';

describe('SpinInsideComponent', () => {
  let component: SpinInsideComponent;
  let fixture: ComponentFixture<SpinInsideComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinInsideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
