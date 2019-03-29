import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioDisableComponent } from './radio-disable.component';

describe('RadioDisableComponent', () => {
  let component: RadioDisableComponent;
  let fixture: ComponentFixture<RadioDisableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioDisableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
