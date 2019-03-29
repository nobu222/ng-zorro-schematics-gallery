import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-duration',
  templateUrl: './notification-duration.component.html',
  styles: []
})
export class NotificationDurationComponent {
  createBasicNotification(): void {
    this.notification.blank(
      'Notification Title',
      'I will never close automatically. I will be close automatically. I will never close automatically.',
      { nzDuration: 0 }
    );
  }

  constructor(private notification: NzNotificationService) {}
}
