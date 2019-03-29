import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioRadiogroupComponent } from './radio-radiogroup.component';

describe('RadioRadiogroupComponent', () => {
  let component: RadioRadiogroupComponent;
  let fixture: ComponentFixture<RadioRadiogroupComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRadiogroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioRadiogroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
