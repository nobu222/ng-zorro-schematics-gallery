import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auto-complete-custom',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './auto-complete-custom.component.html'
})
export class AutoCompleteCustomComponent {
  inputValue: string;
  options: string[] = [];

  onInput(value: string): void {
    this.options = value ? [value, value + value, value + value + value] : [];
  }
}
