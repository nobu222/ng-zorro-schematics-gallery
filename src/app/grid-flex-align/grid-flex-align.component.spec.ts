import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridFlexAlignComponent } from './grid-flex-align.component';

describe('GridFlexAlignComponent', () => {
  let component: GridFlexAlignComponent;
  let fixture: ComponentFixture<GridFlexAlignComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridFlexAlignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFlexAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
