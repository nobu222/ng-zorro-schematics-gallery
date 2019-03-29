import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-layout',
  templateUrl: './checkbox-layout.component.html'
})
export class CheckboxLayoutComponent {
  log(value: string[]): void {
    console.log(value);
  }
}
