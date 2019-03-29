import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker-time',
  templateUrl: './date-picker-time.component.html',
  styleUrls: ['./date-picker-time.component.css']
})
export class DatePickerTimeComponent {
  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date): void {
    console.log('onOk', result);
  }
}
