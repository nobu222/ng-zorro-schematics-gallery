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
            code: 752100,
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: 'Ningbo',
        code: '315000',
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
            code: 453400,
            isLeaf: true
          }
        ]
      }
    ]
  }
];

@Component({
  selector: 'app-cascader-custom-render',
  templateUrl: './cascader-custom-render.component.html',
  styleUrls: ['./cascader-custom-render.component.css']
})
export class CascaderCustomRenderComponent {
  nzOptions = options;
  values: any[] | null = null;

  onChanges(values: any): void {
    console.log(values, this.values);
  }

  handleAreaClick(e: Event, label: string, option: any): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('clicked "', label, '"', option);
  }
}
