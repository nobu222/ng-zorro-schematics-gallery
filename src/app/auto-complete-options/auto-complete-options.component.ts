import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-auto-complete-options',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './auto-complete-options.component.html'
})
export class AutoCompleteOptionsComponent {
  inputValue: string;
  options: string[] = [];

  onChange(value: string): void {
    if (!value || value.indexOf('@') >= 0) {
      this.options = [];
    } else {
      this.options = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
  }
}
