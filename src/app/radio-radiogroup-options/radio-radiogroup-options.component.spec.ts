import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioRadiogroupOptionsComponent } from './radio-radiogroup-options.component';

describe('RadioRadiogroupOptionsComponent', () => {
  let component: RadioRadiogroupOptionsComponent;
  let fixture: ComponentFixture<RadioRadiogroupOptionsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRadiogroupOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioRadiogroupOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
