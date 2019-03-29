import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableSizeComponent } from './table-size.component';

describe('TableSizeComponent', () => {
  let component: TableSizeComponent;
  let fixture: ComponentFixture<TableSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
