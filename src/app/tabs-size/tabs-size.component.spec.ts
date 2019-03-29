import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsSizeComponent } from './tabs-size.component';

describe('TabsSizeComponent', () => {
  let component: TabsSizeComponent;
  let fixture: ComponentFixture<TabsSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
