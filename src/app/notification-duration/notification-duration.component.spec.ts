import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationDurationComponent } from './notification-duration.component';

describe('NotificationDurationComponent', () => {
  let component: NotificationDurationComponent;
  let fixture: ComponentFixture<NotificationDurationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationDurationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
