import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderBasicComponent } from './slider-basic.component';

describe('SliderBasicComponent', () => {
  let component: SliderBasicComponent;
  let fixture: ComponentFixture<SliderBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
