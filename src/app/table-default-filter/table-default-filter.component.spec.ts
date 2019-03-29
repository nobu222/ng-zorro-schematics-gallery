import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableDefaultFilterComponent } from './table-default-filter.component';

describe('TableDefaultFilterComponent', () => {
  let component: TableDefaultFilterComponent;
  let fixture: ComponentFixture<TableDefaultFilterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDefaultFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDefaultFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
