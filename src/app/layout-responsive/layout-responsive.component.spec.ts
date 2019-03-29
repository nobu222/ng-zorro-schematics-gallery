import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutResponsiveComponent } from './layout-responsive.component';

describe('LayoutResponsiveComponent', () => {
  let component: LayoutResponsiveComponent;
  let fixture: ComponentFixture<LayoutResponsiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutResponsiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
