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
        children: [
          {
            value: 'dongqianlake',
            label: 'Dongqian Lake',
            isLeaf: true
          }
        ]
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
  selector: 'app-cascader-change-on-function',
  templateUrl: './cascader-change-on-function.component.html',
  styleUrls: ['./cascader-change-on-function.component.css']
})
export class CascaderChangeOnFunctionComponent {
  nzOptions = options;
  values: any[] | null = null;

  onChanges(values: any): void {
    console.log(values, this.values);
  }

  validate(option: any, _index: number): boolean {
    const value = option.value;
    return ['hangzhou', 'xihu', 'nanjing', 'zhonghuamen'].indexOf(value) >= 0;
  }
}
