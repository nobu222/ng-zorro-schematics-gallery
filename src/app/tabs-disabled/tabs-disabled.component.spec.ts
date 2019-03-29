import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsDisabledComponent } from './tabs-disabled.component';

describe('TabsDisabledComponent', () => {
  let component: TabsDisabledComponent;
  let fixture: ComponentFixture<TabsDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
