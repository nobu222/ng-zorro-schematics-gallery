import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-radiogroup-options',
  templateUrl: './radio-radiogroup-options.component.html'
})
export class RadioRadiogroupOptionsComponent {
  radioValue = 'Apple';
  options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
}
