import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableExpandComponent } from './table-expand.component';

describe('TableExpandComponent', () => {
  let component: TableExpandComponent;
  let fixture: ComponentFixture<TableExpandComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableExpandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableExpandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
