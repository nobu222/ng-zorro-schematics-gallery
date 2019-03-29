import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputBasicComponent } from './input-basic.component';

describe('InputBasicComponent', () => {
  let component: InputBasicComponent;
  let fixture: ComponentFixture<InputBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
