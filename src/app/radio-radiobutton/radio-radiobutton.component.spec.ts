import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioRadiobuttonComponent } from './radio-radiobutton.component';

describe('RadioRadiobuttonComponent', () => {
  let component: RadioRadiobuttonComponent;
  let fixture: ComponentFixture<RadioRadiobuttonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRadiobuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
