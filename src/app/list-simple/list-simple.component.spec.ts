import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListSimpleComponent } from './list-simple.component';

describe('ListSimpleComponent', () => {
  let component: ListSimpleComponent;
  let fixture: ComponentFixture<ListSimpleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
