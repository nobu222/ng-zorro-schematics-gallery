import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationItemRenderComponent } from './pagination-item-render.component';

describe('PaginationItemRenderComponent', () => {
  let component: PaginationItemRenderComponent;
  let fixture: ComponentFixture<PaginationItemRenderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationItemRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationItemRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
