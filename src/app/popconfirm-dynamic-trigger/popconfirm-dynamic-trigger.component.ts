import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-popconfirm-dynamic-trigger',
  templateUrl: './popconfirm-dynamic-trigger.component.html'
})
export class PopconfirmDynamicTriggerComponent {
  switchValue = false;

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

  constructor(private nzMessageService: NzMessageService) {}
}
