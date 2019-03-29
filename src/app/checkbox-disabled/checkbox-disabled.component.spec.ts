import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxDisabledComponent } from './checkbox-disabled.component';

describe('CheckboxDisabledComponent', () => {
  let component: CheckboxDisabledComponent;
  let fixture: ComponentFixture<CheckboxDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
