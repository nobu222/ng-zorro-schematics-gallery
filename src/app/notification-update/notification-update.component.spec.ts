import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationUpdateComponent } from './notification-update.component';

describe('NotificationUpdateComponent', () => {
  let component: NotificationUpdateComponent;
  let fixture: ComponentFixture<NotificationUpdateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
