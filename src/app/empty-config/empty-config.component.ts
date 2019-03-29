import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzEmptyService } from 'ng-zorro-antd';

@Component({
  selector: 'app-empty-config',
  templateUrl: './empty-config.component.html',
  styleUrls: ['./empty-config.component.css']
})
export class EmptyConfigComponent {
  @ViewChild('customTpl') customTpl: TemplateRef<any>; // tslint:disable-line:no-any

  customize = false;

  constructor(private nzEmptyService: NzEmptyService) {}

  onConfigChange(): void {
    if (this.customize) {
      this.nzEmptyService.setDefaultContent(this.customTpl); // tslint:disable-line:no-any
    } else {
      this.nzEmptyService.resetDefault();
    }
  }
}
