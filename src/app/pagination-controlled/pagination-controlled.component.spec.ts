import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationControlledComponent } from './pagination-controlled.component';

describe('PaginationControlledComponent', () => {
  let component: PaginationControlledComponent;
  let fixture: ComponentFixture<PaginationControlledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationControlledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationControlledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
