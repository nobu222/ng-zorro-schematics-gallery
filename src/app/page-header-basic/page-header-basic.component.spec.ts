import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderBasicComponent } from './page-header-basic.component';

describe('PageHeaderBasicComponent', () => {
  let component: PageHeaderBasicComponent;
  let fixture: ComponentFixture<PageHeaderBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeaderBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
