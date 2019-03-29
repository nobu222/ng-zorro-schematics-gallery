import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverTemplateComponent } from './popover-template.component';

describe('PopoverTemplateComponent', () => {
  let component: PopoverTemplateComponent;
  let fixture: ComponentFixture<PopoverTemplateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
