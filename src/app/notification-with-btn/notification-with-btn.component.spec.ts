import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationWithBtnComponent } from './notification-with-btn.component';

describe('NotificationWithBtnComponent', () => {
  let component: NotificationWithBtnComponent;
  let fixture: ComponentFixture<NotificationWithBtnComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationWithBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationWithBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
