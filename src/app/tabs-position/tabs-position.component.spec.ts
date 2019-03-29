import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsPositionComponent } from './tabs-position.component';

describe('TabsPositionComponent', () => {
  let component: TabsPositionComponent;
  let fixture: ComponentFixture<TabsPositionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsPositionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
