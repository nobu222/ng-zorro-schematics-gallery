import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListInfiniteLoadComponent } from './list-infinite-load.component';

describe('ListInfiniteLoadComponent', () => {
  let component: ListInfiniteLoadComponent;
  let fixture: ComponentFixture<ListInfiniteLoadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInfiniteLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInfiniteLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
