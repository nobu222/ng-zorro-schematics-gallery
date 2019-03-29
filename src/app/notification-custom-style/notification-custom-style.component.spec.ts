import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationCustomStyleComponent } from './notification-custom-style.component';

describe('NotificationCustomStyleComponent', () => {
  let component: NotificationCustomStyleComponent;
  let fixture: ComponentFixture<NotificationCustomStyleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationCustomStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationCustomStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
