import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardBorderLessComponent } from './card-border-less.component';

describe('CardBorderLessComponent', () => {
  let component: CardBorderLessComponent;
  let fixture: ComponentFixture<CardBorderLessComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBorderLessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBorderLessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
