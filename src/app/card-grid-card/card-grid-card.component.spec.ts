import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGridCardComponent } from './card-grid-card.component';

describe('CardGridCardComponent', () => {
  let component: CardGridCardComponent;
  let fixture: ComponentFixture<CardGridCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGridCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
