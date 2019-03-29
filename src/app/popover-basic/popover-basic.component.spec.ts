import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopoverBasicComponent } from './popover-basic.component';

describe('PopoverBasicComponent', () => {
  let component: PopoverBasicComponent;
  let fixture: ComponentFixture<PopoverBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopoverBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
