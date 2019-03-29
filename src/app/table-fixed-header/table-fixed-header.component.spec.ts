import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableFixedHeaderComponent } from './table-fixed-header.component';

describe('TableFixedHeaderComponent', () => {
  let component: TableFixedHeaderComponent;
  let fixture: ComponentFixture<TableFixedHeaderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFixedHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFixedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
