import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationBasicComponent } from './pagination-basic.component';

describe('PaginationBasicComponent', () => {
  let component: PaginationBasicComponent;
  let fixture: ComponentFixture<PaginationBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
