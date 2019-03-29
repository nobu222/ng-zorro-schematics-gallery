import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableNestedTableComponent } from './table-nested-table.component';

describe('TableNestedTableComponent', () => {
  let component: TableNestedTableComponent;
  let fixture: ComponentFixture<TableNestedTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNestedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNestedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
