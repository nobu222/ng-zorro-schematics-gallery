import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RateTextComponent } from './rate-text.component';

describe('RateTextComponent', () => {
  let component: RateTextComponent;
  let fixture: ComponentFixture<RateTextComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
