import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableDragSortingComponent } from './table-drag-sorting.component';

describe('TableDragSortingComponent', () => {
  let component: TableDragSortingComponent;
  let fixture: ComponentFixture<TableDragSortingComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDragSortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDragSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
