import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RateHalfComponent } from './rate-half.component';

describe('RateHalfComponent', () => {
  let component: RateHalfComponent;
  let fixture: ComponentFixture<RateHalfComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateHalfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateHalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
