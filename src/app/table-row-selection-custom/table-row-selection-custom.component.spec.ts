import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableRowSelectionCustomComponent } from './table-row-selection-custom.component';

describe('TableRowSelectionCustomComponent', () => {
  let component: TableRowSelectionCustomComponent;
  let fixture: ComponentFixture<TableRowSelectionCustomComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowSelectionCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowSelectionCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
