import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardBasicComponent } from './card-basic.component';

describe('CardBasicComponent', () => {
  let component: CardBasicComponent;
  let fixture: ComponentFixture<CardBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
