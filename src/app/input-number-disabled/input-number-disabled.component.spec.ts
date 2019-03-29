import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumberDisabledComponent } from './input-number-disabled.component';

describe('InputNumberDisabledComponent', () => {
  let component: InputNumberDisabledComponent;
  let fixture: ComponentFixture<InputNumberDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
