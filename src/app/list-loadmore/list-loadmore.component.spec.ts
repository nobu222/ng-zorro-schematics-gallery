import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListLoadmoreComponent } from './list-loadmore.component';

describe('ListLoadmoreComponent', () => {
  let component: ListLoadmoreComponent;
  let fixture: ComponentFixture<ListLoadmoreComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLoadmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLoadmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
