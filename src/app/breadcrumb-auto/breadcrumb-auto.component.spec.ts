import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BreadcrumbAutoComponent } from './breadcrumb-auto.component';

describe('BreadcrumbAutoComponent', () => {
  let component: BreadcrumbAutoComponent;
  let fixture: ComponentFixture<BreadcrumbAutoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadcrumbAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
