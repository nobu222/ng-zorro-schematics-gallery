import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderTriggerActionComponent } from './cascader-trigger-action.component';

describe('CascaderTriggerActionComponent', () => {
  let component: CascaderTriggerActionComponent;
  let fixture: ComponentFixture<CascaderTriggerActionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderTriggerActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderTriggerActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
