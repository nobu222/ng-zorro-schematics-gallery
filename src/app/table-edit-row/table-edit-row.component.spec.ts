import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableEditRowComponent } from './table-edit-row.component';

describe('TableEditRowComponent', () => {
  let component: TableEditRowComponent;
  let fixture: ComponentFixture<TableEditRowComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEditRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
