import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auto-complete-basic',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './auto-complete-basic.component.html'
})
export class AutoCompleteBasicComponent {
  inputValue: string;
  options: string[] = [];

  onInput(value: string): void {
    this.options = value ? [value, value + value, value + value + value] : [];
  }
}
