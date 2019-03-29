// tslint:disable:no-any
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  selector: 'app-cascader-reactive-form',
  templateUrl: './cascader-reactive-form.component.html',
  styleUrls: ['./cascader-reactive-form.component.css']
})
export class CascaderReactiveFormComponent {
  form: FormGroup;
  nzOptions = options;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.fb.group({
      name: [null, Validators.required]
    });
  }

  reset(): void {
    this.form.reset();
    console.log(this.form.value);
  }

  submit(): void {
    console.log(this.form.value);
  }

  onChanges(values: any): void {
    console.log(values);
  }
}
