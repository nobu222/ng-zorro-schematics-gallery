import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbWithIconComponent } from './breadcrumb-with-icon.component';

describe('BreadcrumbWithIconComponent', () => {
  let component: BreadcrumbWithIconComponent;
  let fixture: ComponentFixture<BreadcrumbWithIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbWithIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
