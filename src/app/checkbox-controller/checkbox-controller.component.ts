import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox-controller',
  templateUrl: './checkbox-controller.component.html',
  styleUrls: ['./checkbox-controller.component.css']
})
export class CheckboxControllerComponent {
  isCheckedButton = true;
  isDisabledButton = false;

  checkButton(): void {
    this.isCheckedButton = !this.isCheckedButton;
  }

  disableButton(): void {
    this.isDisabledButton = !this.isDisabledButton;
  }
}
