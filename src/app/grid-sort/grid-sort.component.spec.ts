import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { GridSortComponent } from './grid-sort.component';

describe('GridSortComponent', () => {
  let component: GridSortComponent;
  let fixture: ComponentFixture<GridSortComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
