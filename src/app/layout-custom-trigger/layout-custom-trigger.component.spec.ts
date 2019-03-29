import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutCustomTriggerComponent } from './layout-custom-trigger.component';

describe('LayoutCustomTriggerComponent', () => {
  let component: LayoutCustomTriggerComponent;
  let fixture: ComponentFixture<LayoutCustomTriggerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCustomTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutCustomTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
