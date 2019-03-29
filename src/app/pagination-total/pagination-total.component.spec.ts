import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationTotalComponent } from './pagination-total.component';

describe('PaginationTotalComponent', () => {
  let component: PaginationTotalComponent;
  let fixture: ComponentFixture<PaginationTotalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
