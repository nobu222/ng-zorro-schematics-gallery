import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-disabled',
  templateUrl: './switch-disabled.component.html',
  styleUrls: ['./switch-disabled.component.css']
})
export class SwitchDisabledComponent {
  switchValue = false;
  isDisabled = true;
}
