import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDynamicFormItemComponent } from './form-dynamic-form-item.component';

describe('FormDynamicFormItemComponent', () => {
  let component: FormDynamicFormItemComponent;
  let fixture: ComponentFixture<FormDynamicFormItemComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicFormItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDynamicFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
