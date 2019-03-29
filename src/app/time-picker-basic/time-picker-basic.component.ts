import { Component } from '@angular/core';

@Component({
  selector: 'app-time-picker-basic',
  templateUrl: './time-picker-basic.component.html'
})
export class TimePickerBasicComponent {
  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);
}
