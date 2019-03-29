import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableFixedColumnsComponent } from './table-fixed-columns.component';

describe('TableFixedColumnsComponent', () => {
  let component: TableFixedColumnsComponent;
  let fixture: ComponentFixture<TableFixedColumnsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFixedColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFixedColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
