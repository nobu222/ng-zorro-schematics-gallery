import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationMoreComponent } from './pagination-more.component';

describe('PaginationMoreComponent', () => {
  let component: PaginationMoreComponent;
  let fixture: ComponentFixture<PaginationMoreComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
