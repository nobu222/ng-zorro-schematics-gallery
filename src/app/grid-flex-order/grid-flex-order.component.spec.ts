import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridFlexOrderComponent } from './grid-flex-order.component';

describe('GridFlexOrderComponent', () => {
  let component: GridFlexOrderComponent;
  let fixture: ComponentFixture<GridFlexOrderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFlexOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFlexOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
