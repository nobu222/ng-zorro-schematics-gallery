import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableFixedColumnsHeaderComponent } from './table-fixed-columns-header.component';

describe('TableFixedColumnsHeaderComponent', () => {
  let component: TableFixedColumnsHeaderComponent;
  let fixture: ComponentFixture<TableFixedColumnsHeaderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFixedColumnsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFixedColumnsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
