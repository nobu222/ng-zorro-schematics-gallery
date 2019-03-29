import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxBasicComponent } from './checkbox-basic.component';

describe('CheckboxBasicComponent', () => {
  let component: CheckboxBasicComponent;
  let fixture: ComponentFixture<CheckboxBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
