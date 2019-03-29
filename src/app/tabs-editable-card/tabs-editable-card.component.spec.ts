import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsEditableCardComponent } from './tabs-editable-card.component';

describe('TabsEditableCardComponent', () => {
  let component: TabsEditableCardComponent;
  let fixture: ComponentFixture<TabsEditableCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsEditableCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsEditableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
