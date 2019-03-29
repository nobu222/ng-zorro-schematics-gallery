import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioBasicComponent } from './radio-basic.component';

describe('RadioBasicComponent', () => {
  let component: RadioBasicComponent;
  let fixture: ComponentFixture<RadioBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
