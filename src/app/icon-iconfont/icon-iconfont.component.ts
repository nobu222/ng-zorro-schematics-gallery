import { Component } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';

@Component({
  selector: 'app-icon-iconfont',
  templateUrl: './icon-iconfont.component.html',
  styleUrls: ['./icon-iconfont.component.css']
})
export class IconIconfontComponent {
  constructor(private _iconService: NzIconService) {
    this._iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }
}
