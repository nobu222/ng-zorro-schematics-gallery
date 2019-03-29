import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormValidateStaticComponent } from './form-validate-static.component';

describe('FormValidateStaticComponent', () => {
  let component: FormValidateStaticComponent;
  let fixture: ComponentFixture<FormValidateStaticComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidateStaticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidateStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
