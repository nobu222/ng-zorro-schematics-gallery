import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTooltipComponent } from './input-tooltip.component';

describe('InputTooltipComponent', () => {
  let component: InputTooltipComponent;
  let fixture: ComponentFixture<InputTooltipComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
