import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardInnerComponent } from './card-inner.component';

describe('CardInnerComponent', () => {
  let component: CardInnerComponent;
  let fixture: ComponentFixture<CardInnerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
