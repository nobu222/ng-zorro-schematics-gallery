import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutTopSideComponent } from './layout-top-side.component';

describe('LayoutTopSideComponent', () => {
  let component: LayoutTopSideComponent;
  let fixture: ComponentFixture<LayoutTopSideComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTopSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTopSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
