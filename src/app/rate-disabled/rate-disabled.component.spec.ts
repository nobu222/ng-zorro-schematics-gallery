import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RateDisabledComponent } from './rate-disabled.component';

describe('RateDisabledComponent', () => {
  let component: RateDisabledComponent;
  let fixture: ComponentFixture<RateDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
