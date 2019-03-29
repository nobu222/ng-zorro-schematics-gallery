import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TooltipTemplateComponent } from './tooltip-template.component';

describe('TooltipTemplateComponent', () => {
  let component: TooltipTemplateComponent;
  let fixture: ComponentFixture<TooltipTemplateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
