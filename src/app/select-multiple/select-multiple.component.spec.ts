import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectMultipleComponent } from './select-multiple.component';

describe('SelectMultipleComponent', () => {
  let component: SelectMultipleComponent;
  let fixture: ComponentFixture<SelectMultipleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
