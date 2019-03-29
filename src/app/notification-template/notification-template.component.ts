import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-notification-template',
  templateUrl: './notification-template.component.html',
  styleUrls: ['./notification-template.component.css']
})
export class NotificationTemplateComponent {
  @ViewChild(TemplateRef) template: TemplateRef<{}>;

  ninja(): void {
    const fruits = [
      { name: 'Apple', color: 'red' },
      { name: 'Orange', color: 'orange' },
      { name: 'Watermelon', color: 'green' }
    ];

    fruits.forEach(fruit => {
      this.notificationService.template(this.template, { nzData: fruit });
    });
  }

  constructor(private notificationService: NzNotificationService) {}
}
