import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableCustomFilterPanelComponent } from './table-custom-filter-panel.component';

describe('TableCustomFilterPanelComponent', () => {
  let component: TableCustomFilterPanelComponent;
  let fixture: ComponentFixture<TableCustomFilterPanelComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCustomFilterPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCustomFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
