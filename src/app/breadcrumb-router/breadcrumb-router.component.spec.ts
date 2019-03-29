import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbRouterComponent } from './breadcrumb-router.component';

describe('BreadcrumbRouterComponent', () => {
  let component: BreadcrumbRouterComponent;
  let fixture: ComponentFixture<BreadcrumbRouterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbRouterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
