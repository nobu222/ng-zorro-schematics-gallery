import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardInColumnComponent } from './card-in-column.component';

describe('CardInColumnComponent', () => {
  let component: CardInColumnComponent;
  let fixture: ComponentFixture<CardInColumnComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
