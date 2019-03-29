import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutSideComponent } from './layout-side.component';

describe('LayoutSideComponent', () => {
  let component: LayoutSideComponent;
  let fixture: ComponentFixture<LayoutSideComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
