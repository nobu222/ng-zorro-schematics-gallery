import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormDynamicRuleComponent } from './form-dynamic-rule.component';

describe('FormDynamicRuleComponent', () => {
  let component: FormDynamicRuleComponent;
  let fixture: ComponentFixture<FormDynamicRuleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDynamicRuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDynamicRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
