import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-message-info',
  templateUrl: './message-info.component.html',
  styles: []
})
export class MessageInfoComponent {
  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }
}
