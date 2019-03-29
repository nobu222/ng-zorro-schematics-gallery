import { Component } from '@angular/core';

@Component({
  selector: 'app-select-label-in-value',
  templateUrl: './select-label-in-value.component.html'
})
export class SelectLabelInValueComponent {
  optionList = [{ label: 'Lucy', value: 'lucy', age: 20 }, { label: 'Jack', value: 'jack', age: 22 }];
  selectedValue = { label: 'Jack', value: 'jack', age: 22 };
  // tslint:disable-next-line:no-any
  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  log(value: { label: string; value: string; age: number }): void {
    console.log(value);
  }
}
