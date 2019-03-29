import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableRowSelectionAndOperationComponent } from './table-row-selection-and-operation.component';

describe('TableRowSelectionAndOperationComponent', () => {
  let component: TableRowSelectionAndOperationComponent;
  let fixture: ComponentFixture<TableRowSelectionAndOperationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowSelectionAndOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowSelectionAndOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
