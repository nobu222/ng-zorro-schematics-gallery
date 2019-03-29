import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxCheckAllComponent } from './checkbox-check-all.component';

describe('CheckboxCheckAllComponent', () => {
  let component: CheckboxCheckAllComponent;
  let fixture: ComponentFixture<CheckboxCheckAllComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxCheckAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxCheckAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
