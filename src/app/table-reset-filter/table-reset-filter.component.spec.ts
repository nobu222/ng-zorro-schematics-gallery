import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableResetFilterComponent } from './table-reset-filter.component';

describe('TableResetFilterComponent', () => {
  let component: TableResetFilterComponent;
  let fixture: ComponentFixture<TableResetFilterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableResetFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableResetFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
