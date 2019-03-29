import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbBasicComponent } from './breadcrumb-basic.component';

describe('BreadcrumbBasicComponent', () => {
  let component: BreadcrumbBasicComponent;
  let fixture: ComponentFixture<BreadcrumbBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
