import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputSearchInputComponent } from './input-search-input.component';

describe('InputSearchInputComponent', () => {
  let component: InputSearchInputComponent;
  let fixture: ComponentFixture<InputSearchInputComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSearchInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
