import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-popconfirm-placement',
  templateUrl: './popconfirm-placement.component.html',
  styleUrls: ['./popconfirm-placement.component.css']
})
export class PopconfirmPlacementComponent {
  cancel(): void {
    this.nzMessageService.info('click cancel');
  }

  confirm(): void {
    this.nzMessageService.info('click confirm');
  }

  constructor(private nzMessageService: NzMessageService) {}
}
