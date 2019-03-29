import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListBasicComponent } from './list-basic.component';

describe('ListBasicComponent', () => {
  let component: ListBasicComponent;
  let fixture: ComponentFixture<ListBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
