import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationTemplateComponent } from './notification-template.component';

describe('NotificationTemplateComponent', () => {
  let component: NotificationTemplateComponent;
  let fixture: ComponentFixture<NotificationTemplateComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
