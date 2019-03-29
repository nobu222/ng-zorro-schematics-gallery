import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableHeadComponent } from './table-head.component';

describe('TableHeadComponent', () => {
  let component: TableHeadComponent;
  let fixture: ComponentFixture<TableHeadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
