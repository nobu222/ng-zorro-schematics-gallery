import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioRadiogroupWithNameComponent } from './radio-radiogroup-with-name.component';

describe('RadioRadiogroupWithNameComponent', () => {
  let component: RadioRadiogroupWithNameComponent;
  let fixture: ComponentFixture<RadioRadiogroupWithNameComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioRadiogroupWithNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioRadiogroupWithNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
