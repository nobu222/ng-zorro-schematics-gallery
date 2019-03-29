import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNumberFormatterComponent } from './input-number-formatter.component';

describe('InputNumberFormatterComponent', () => {
  let component: InputNumberFormatterComponent;
  let fixture: ComponentFixture<InputNumberFormatterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputNumberFormatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
