import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsIconComponent } from './tabs-icon.component';

describe('TabsIconComponent', () => {
  let component: TabsIconComponent;
  let fixture: ComponentFixture<TabsIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
