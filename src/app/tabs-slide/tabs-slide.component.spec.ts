import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsSlideComponent } from './tabs-slide.component';

describe('TabsSlideComponent', () => {
  let component: TabsSlideComponent;
  let fixture: ComponentFixture<TabsSlideComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
