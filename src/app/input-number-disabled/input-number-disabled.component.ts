import { Component } from '@angular/core';

@Component({
  selector: 'app-input-number-disabled',
  templateUrl: './input-number-disabled.component.html'
})
export class InputNumberDisabledComponent {
  demoValue = 3;
  isDisabled = false;

  toggleDisabled(): void {
    this.isDisabled = !this.isDisabled;
  }
}
