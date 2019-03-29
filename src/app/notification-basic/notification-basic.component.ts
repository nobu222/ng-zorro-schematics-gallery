import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-basic',
  templateUrl: './notification-basic.component.html',
  styles: []
})
export class NotificationBasicComponent {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }
}
