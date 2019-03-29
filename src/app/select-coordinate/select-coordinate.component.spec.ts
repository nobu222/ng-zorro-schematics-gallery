import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectCoordinateComponent } from './select-coordinate.component';

describe('SelectCoordinateComponent', () => {
  let component: SelectCoordinateComponent;
  let fixture: ComponentFixture<SelectCoordinateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCoordinateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
