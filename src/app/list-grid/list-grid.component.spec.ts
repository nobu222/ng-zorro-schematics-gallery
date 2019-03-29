import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListGridComponent } from './list-grid.component';

describe('ListGridComponent', () => {
  let component: ListGridComponent;
  let fixture: ComponentFixture<ListGridComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
