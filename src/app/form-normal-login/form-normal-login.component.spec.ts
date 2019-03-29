import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormNormalLoginComponent } from './form-normal-login.component';

describe('FormNormalLoginComponent', () => {
  let component: FormNormalLoginComponent;
  let fixture: ComponentFixture<FormNormalLoginComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNormalLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNormalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
