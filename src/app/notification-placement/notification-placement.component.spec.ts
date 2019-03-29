import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationPlacementComponent } from './notification-placement.component';

describe('NotificationPlacementComponent', () => {
  let component: NotificationPlacementComponent;
  let fixture: ComponentFixture<NotificationPlacementComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationPlacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
