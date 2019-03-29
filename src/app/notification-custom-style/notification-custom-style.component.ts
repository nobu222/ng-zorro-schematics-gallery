import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-custom-style',
  templateUrl: './notification-custom-style.component.html',
  styles: []
})
export class NotificationCustomStyleComponent {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      {
        nzStyle: {
          width: '600px',
          marginLeft: '-265px'
        },
        nzClass: 'test-class'
      }
    );
  }
}
