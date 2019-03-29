import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsExtraComponent } from './tabs-extra.component';

describe('TabsExtraComponent', () => {
  let component: TabsExtraComponent;
  let fixture: ComponentFixture<TabsExtraComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
