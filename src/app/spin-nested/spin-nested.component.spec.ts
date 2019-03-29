import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinNestedComponent } from './spin-nested.component';

describe('SpinNestedComponent', () => {
  let component: SpinNestedComponent;
  let fixture: ComponentFixture<SpinNestedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
