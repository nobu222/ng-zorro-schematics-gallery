import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputPasswordInputComponent } from './input-password-input.component';

describe('InputPasswordInputComponent', () => {
  let component: InputPasswordInputComponent;
  let fixture: ComponentFixture<InputPasswordInputComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPasswordInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
