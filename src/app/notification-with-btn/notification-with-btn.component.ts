import { Component, TemplateRef } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-with-btn',
  templateUrl: './notification-with-btn.component.html',
  styles: []
})
export class NotificationWithBtnComponent {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(template: TemplateRef<{}>): void {
    this.notification.template(template);
  }
}
