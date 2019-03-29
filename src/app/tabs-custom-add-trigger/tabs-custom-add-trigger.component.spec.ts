import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsCustomAddTriggerComponent } from './tabs-custom-add-trigger.component';

describe('TabsCustomAddTriggerComponent', () => {
  let component: TabsCustomAddTriggerComponent;
  let fixture: ComponentFixture<TabsCustomAddTriggerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCustomAddTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsCustomAddTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
