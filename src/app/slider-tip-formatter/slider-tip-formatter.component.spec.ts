import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderTipFormatterComponent } from './slider-tip-formatter.component';

describe('SliderTipFormatterComponent', () => {
  let component: SliderTipFormatterComponent;
  let fixture: ComponentFixture<SliderTipFormatterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTipFormatterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderTipFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
