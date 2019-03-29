import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsCardComponent } from './tabs-card.component';

describe('TabsCardComponent', () => {
  let component: TabsCardComponent;
  let fixture: ComponentFixture<TabsCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
