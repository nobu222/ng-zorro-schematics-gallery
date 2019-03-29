import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-with-icon',
  templateUrl: './notification-with-icon.component.html',
  styleUrls: ['./notification-with-icon.component.css']
})
export class NotificationWithIconComponent {
  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }

  constructor(private notification: NzNotificationService) {}
}
