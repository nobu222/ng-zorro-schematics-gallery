import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormHorizontalLoginComponent } from './form-horizontal-login.component';

describe('FormHorizontalLoginComponent', () => {
  let component: FormHorizontalLoginComponent;
  let fixture: ComponentFixture<FormHorizontalLoginComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHorizontalLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHorizontalLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
