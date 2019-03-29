import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DrawerServiceComponent } from './drawer-service.component';

describe('DrawerServiceComponent', () => {
  let component: DrawerServiceComponent;
  let fixture: ComponentFixture<DrawerServiceComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
