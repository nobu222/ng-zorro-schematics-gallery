import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableColspanRowspanComponent } from './table-colspan-rowspan.component';

describe('TableColspanRowspanComponent', () => {
  let component: TableColspanRowspanComponent;
  let fixture: ComponentFixture<TableColspanRowspanComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColspanRowspanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableColspanRowspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
