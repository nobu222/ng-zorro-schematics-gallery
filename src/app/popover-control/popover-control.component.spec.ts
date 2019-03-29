import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverControlComponent } from './popover-control.component';

describe('PopoverControlComponent', () => {
  let component: PopoverControlComponent;
  let fixture: ComponentFixture<PopoverControlComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
