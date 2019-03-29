import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsCardTopComponent } from './tabs-card-top.component';

describe('TabsCardTopComponent', () => {
  let component: TabsCardTopComponent;
  let fixture: ComponentFixture<TabsCardTopComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCardTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsCardTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
