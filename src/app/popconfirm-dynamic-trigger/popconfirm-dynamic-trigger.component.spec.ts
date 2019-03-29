import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopconfirmDynamicTriggerComponent } from './popconfirm-dynamic-trigger.component';

describe('PopconfirmDynamicTriggerComponent', () => {
  let component: PopconfirmDynamicTriggerComponent;
  let fixture: ComponentFixture<PopconfirmDynamicTriggerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopconfirmDynamicTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopconfirmDynamicTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
