import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutFixedSiderComponent } from './layout-fixed-sider.component';

describe('LayoutFixedSiderComponent', () => {
  let component: LayoutFixedSiderComponent;
  let fixture: ComponentFixture<LayoutFixedSiderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutFixedSiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutFixedSiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
