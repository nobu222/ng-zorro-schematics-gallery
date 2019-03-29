import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardFlexibleContentComponent } from './card-flexible-content.component';

describe('CardFlexibleContentComponent', () => {
  let component: CardFlexibleContentComponent;
  let fixture: ComponentFixture<CardFlexibleContentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFlexibleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFlexibleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
