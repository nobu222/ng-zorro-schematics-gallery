import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationBasicComponent } from './notification-basic.component';

describe('NotificationBasicComponent', () => {
  let component: NotificationBasicComponent;
  let fixture: ComponentFixture<NotificationBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
