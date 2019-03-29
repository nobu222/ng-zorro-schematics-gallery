// tslint:disable:no-any
import { Component } from '@angular/core';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-cascader-change-on-select',
  templateUrl: './cascader-change-on-select.component.html',
  styleUrls: ['./cascader-change-on-select.component.css']
})
export class CascaderChangeOnSelectComponent {
  nzOptions = options;
  values: any[] | null = null;

  onChanges(values: any): void {
    console.log(values, this.values);
  }
}