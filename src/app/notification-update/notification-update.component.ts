import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-update',
  templateUrl: './notification-update.component.html',
  styles: []
})
export class NotificationUpdateComponent {
  constructor(private notification: NzNotificationService) {}

  createAutoUpdatingNotifications(): void {
    this.notification.blank('Notification Title', 'Description.', {
      nzKey: 'key'
    });

    setTimeout(() => {
      this.notification.blank('New Title', 'New description', {
        nzKey: 'key'
      });
    }, 1000);
  }
}
