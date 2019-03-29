import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderEventComponent } from './slider-event.component';

describe('SliderEventComponent', () => {
  let component: SliderEventComponent;
  let fixture: ComponentFixture<SliderEventComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
