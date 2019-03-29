import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationWithIconComponent } from './notification-with-icon.component';

describe('NotificationWithIconComponent', () => {
  let component: NotificationWithIconComponent;
  let fixture: ComponentFixture<NotificationWithIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationWithIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
