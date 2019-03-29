import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsBasicComponent } from './tabs-basic.component';

describe('TabsBasicComponent', () => {
  let component: TabsBasicComponent;
  let fixture: ComponentFixture<TabsBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
