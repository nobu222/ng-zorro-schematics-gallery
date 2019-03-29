import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationJumpComponent } from './pagination-jump.component';

describe('PaginationJumpComponent', () => {
  let component: PaginationJumpComponent;
  let fixture: ComponentFixture<PaginationJumpComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationJumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationJumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
