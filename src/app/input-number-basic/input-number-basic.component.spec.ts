import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumberBasicComponent } from './input-number-basic.component';

describe('InputNumberBasicComponent', () => {
  let component: InputNumberBasicComponent;
  let fixture: ComponentFixture<InputNumberBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
