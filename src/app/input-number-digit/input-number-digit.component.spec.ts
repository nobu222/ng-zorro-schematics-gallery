import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumberDigitComponent } from './input-number-digit.component';

describe('InputNumberDigitComponent', () => {
  let component: InputNumberDigitComponent;
  let fixture: ComponentFixture<InputNumberDigitComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberDigitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
