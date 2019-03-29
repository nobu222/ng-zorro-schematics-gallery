import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RateBasicComponent } from './rate-basic.component';

describe('RateBasicComponent', () => {
  let component: RateBasicComponent;
  let fixture: ComponentFixture<RateBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
