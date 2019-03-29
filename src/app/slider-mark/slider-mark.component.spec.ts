import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderMarkComponent } from './slider-mark.component';

describe('SliderMarkComponent', () => {
  let component: SliderMarkComponent;
  let fixture: ComponentFixture<SliderMarkComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
