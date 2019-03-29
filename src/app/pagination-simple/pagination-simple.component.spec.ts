import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationSimpleComponent } from './pagination-simple.component';

describe('PaginationSimpleComponent', () => {
  let component: PaginationSimpleComponent;
  let fixture: ComponentFixture<PaginationSimpleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
