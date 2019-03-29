import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioSizeComponent } from './radio-size.component';

describe('RadioSizeComponent', () => {
  let component: RadioSizeComponent;
  let fixture: ComponentFixture<RadioSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
