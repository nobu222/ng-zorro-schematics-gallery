import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioSolidComponent } from './radio-solid.component';

describe('RadioSolidComponent', () => {
  let component: RadioSolidComponent;
  let fixture: ComponentFixture<RadioSolidComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSolidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
