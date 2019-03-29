import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RateCharacterComponent } from './rate-character.component';

describe('RateCharacterComponent', () => {
  let component: RateCharacterComponent;
  let fixture: ComponentFixture<RateCharacterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
