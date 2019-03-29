import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableGroupingColumnsComponent } from './table-grouping-columns.component';

describe('TableGroupingColumnsComponent', () => {
  let component: TableGroupingColumnsComponent;
  let fixture: ComponentFixture<TableGroupingColumnsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGroupingColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGroupingColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
