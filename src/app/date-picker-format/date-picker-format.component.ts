import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker-format',
  templateUrl: './date-picker-format.component.html',
  styleUrls: ['./date-picker-format.component.css']
})
export class DatePickerFormatComponent {
  dateFormat = 'yyyy/MM/dd';
  monthFormat = 'yyyy/MM';
}
