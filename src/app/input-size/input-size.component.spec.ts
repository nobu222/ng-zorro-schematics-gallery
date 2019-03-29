import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSizeComponent } from './input-size.component';

describe('InputSizeComponent', () => {
  let component: InputSizeComponent;
  let fixture: ComponentFixture<InputSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
