import { Component } from '@angular/core';

@Component({
  selector: 'app-time-picker-value',
  templateUrl: './time-picker-value.component.html'
})
export class TimePickerValueComponent {
  time: Date | null = null;

  log(time: Date): void {
    console.log(time && time.toTimeString());
  }
}
