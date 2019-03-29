import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumberSizeComponent } from './input-number-size.component';

describe('InputNumberSizeComponent', () => {
  let component: InputNumberSizeComponent;
  let fixture: ComponentFixture<InputNumberSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
