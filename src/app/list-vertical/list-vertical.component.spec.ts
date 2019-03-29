import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListVerticalComponent } from './list-vertical.component';

describe('ListVerticalComponent', () => {
  let component: ListVerticalComponent;
  let fixture: ComponentFixture<ListVerticalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVerticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
