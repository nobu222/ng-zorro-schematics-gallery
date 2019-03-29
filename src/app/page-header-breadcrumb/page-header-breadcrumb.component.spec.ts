import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderBreadcrumbComponent } from './page-header-breadcrumb.component';

describe('PageHeaderBreadcrumbComponent', () => {
  let component: PageHeaderBreadcrumbComponent;
  let fixture: ComponentFixture<PageHeaderBreadcrumbComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeaderBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
