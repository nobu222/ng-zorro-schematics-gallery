import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderTriggerComponent } from './cascader-trigger.component';

describe('CascaderTriggerComponent', () => {
  let component: CascaderTriggerComponent;
  let fixture: ComponentFixture<CascaderTriggerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
