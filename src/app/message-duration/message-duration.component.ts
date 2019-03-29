import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-message-duration',
  templateUrl: './message-duration.component.html',
  styles: []
})
export class MessageDurationComponent {
  createBasicMessage(): void {
    this.message.success('This is a prompt message for success, and it will disappear in 10 seconds', {
      nzDuration: 10000
    });
  }

  constructor(private message: NzMessageService) {}
}
