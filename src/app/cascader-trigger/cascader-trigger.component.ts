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
  selector: 'app-cascader-trigger',
  templateUrl: './cascader-trigger.component.html',
  styleUrls: ['./cascader-trigger.component.css']
})
export class CascaderTriggerComponent {
  nzOptions = options;
  values: any[] | null = null;
  text = 'Unselect';

  onChanges(values: any): void {
    console.log(values, this.values);
  }

  onSelectionChange(selectedOptions: any[]): void {
    this.text = selectedOptions.map(o => o.label).join(', ');
  }
}
