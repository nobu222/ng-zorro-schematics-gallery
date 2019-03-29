import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableExpandChildrenComponent } from './table-expand-children.component';

describe('TableExpandChildrenComponent', () => {
  let component: TableExpandChildrenComponent;
  let fixture: ComponentFixture<TableExpandChildrenComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpandChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableExpandChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
