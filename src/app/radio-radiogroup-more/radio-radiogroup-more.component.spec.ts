import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioRadiogroupMoreComponent } from './radio-radiogroup-more.component';

describe('RadioRadiogroupMoreComponent', () => {
  let component: RadioRadiogroupMoreComponent;
  let fixture: ComponentFixture<RadioRadiogroupMoreComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRadiogroupMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioRadiogroupMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
