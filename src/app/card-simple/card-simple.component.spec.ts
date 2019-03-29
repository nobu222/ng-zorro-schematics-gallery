import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSimpleComponent } from './card-simple.component';

describe('CardSimpleComponent', () => {
  let component: CardSimpleComponent;
  let fixture: ComponentFixture<CardSimpleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSimpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
