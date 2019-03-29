import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAutosizeTextareaComponent } from './input-autosize-textarea.component';

describe('InputAutosizeTextareaComponent', () => {
  let component: InputAutosizeTextareaComponent;
  let fixture: ComponentFixture<InputAutosizeTextareaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAutosizeTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAutosizeTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
