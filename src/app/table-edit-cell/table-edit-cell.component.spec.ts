import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableEditCellComponent } from './table-edit-cell.component';

describe('TableEditCellComponent', () => {
  let component: TableEditCellComponent;
  let fixture: ComponentFixture<TableEditCellComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEditCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEditCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
