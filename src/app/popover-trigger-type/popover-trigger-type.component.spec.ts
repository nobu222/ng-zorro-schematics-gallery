import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverTriggerTypeComponent } from './popover-trigger-type.component';

describe('PopoverTriggerTypeComponent', () => {
  let component: PopoverTriggerTypeComponent;
  let fixture: ComponentFixture<PopoverTriggerTypeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverTriggerTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverTriggerTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
