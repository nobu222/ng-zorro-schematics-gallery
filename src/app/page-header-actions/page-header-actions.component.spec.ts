import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageHeaderActionsComponent } from './page-header-actions.component';

describe('PageHeaderActionsComponent', () => {
  let component: PageHeaderActionsComponent;
  let fixture: ComponentFixture<PageHeaderActionsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHeaderActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeaderActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
