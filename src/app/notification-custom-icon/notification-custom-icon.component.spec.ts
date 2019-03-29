import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationCustomIconComponent } from './notification-custom-icon.component';

describe('NotificationCustomIconComponent', () => {
  let component: NotificationCustomIconComponent;
  let fixture: ComponentFixture<NotificationCustomIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCustomIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationCustomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
