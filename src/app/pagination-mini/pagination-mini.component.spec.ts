import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationMiniComponent } from './pagination-mini.component';

describe('PaginationMiniComponent', () => {
  let component: PaginationMiniComponent;
  let fixture: ComponentFixture<PaginationMiniComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
