import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationChangerComponent } from './pagination-changer.component';

describe('PaginationChangerComponent', () => {
  let component: PaginationChangerComponent;
  let fixture: ComponentFixture<PaginationChangerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
