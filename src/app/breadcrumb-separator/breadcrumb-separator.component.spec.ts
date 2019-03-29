import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbSeparatorComponent } from './breadcrumb-separator.component';

describe('BreadcrumbSeparatorComponent', () => {
  let component: BreadcrumbSeparatorComponent;
  let fixture: ComponentFixture<BreadcrumbSeparatorComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbSeparatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
