import { Component, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-custom-icon',
  templateUrl: './notification-custom-icon.component.html',
  styles: []
})
export class NotificationCustomIconComponent {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}
