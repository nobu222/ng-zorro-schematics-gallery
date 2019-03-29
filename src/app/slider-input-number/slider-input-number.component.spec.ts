import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderInputNumberComponent } from './slider-input-number.component';

describe('SliderInputNumberComponent', () => {
  let component: SliderInputNumberComponent;
  let fixture: ComponentFixture<SliderInputNumberComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
