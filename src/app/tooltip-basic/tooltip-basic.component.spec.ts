import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipBasicComponent } from './tooltip-basic.component';

describe('TooltipBasicComponent', () => {
  let component: TooltipBasicComponent;
  let fixture: ComponentFixture<TooltipBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
