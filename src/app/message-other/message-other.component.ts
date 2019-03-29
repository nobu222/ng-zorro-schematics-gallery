import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-message-other',
  templateUrl: './message-other.component.html',
  styleUrls: ['./message-other.component.css']
})
export class MessageOtherComponent {
  createMessage(type: string): void {
    this.message.create(type, `This is a message of ${type}`);
  }

  constructor(private message: NzMessageService) {}
}
