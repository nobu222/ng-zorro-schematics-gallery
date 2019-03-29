import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-placement',
  templateUrl: './notification-placement.component.html',
  styles: []
})
export class NotificationPlacementComponent {
  placement = 'topRight';

  clearBeforeNotifications(): void {
    this.notification.remove();
  }

  createBasicNotification(): void {
    this.notification.config({
      nzPlacement: this.placement
    });
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }

  constructor(private notification: NzNotificationService) {}
}
