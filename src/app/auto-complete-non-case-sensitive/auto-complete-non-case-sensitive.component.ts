import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auto-complete-non-case-sensitive',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './auto-complete-non-case-sensitive.component.html'
})
export class AutoCompleteNonCaseSensitiveComponent {
  inputValue: string;
  filteredOptions: string[] = [];
  options = ['Burns Bay Road', 'Downing Street', 'Wall Street'];

  constructor() {
    this.filteredOptions = this.options;
  }

  onInput(value: string): void {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) === 0);
  }
}
