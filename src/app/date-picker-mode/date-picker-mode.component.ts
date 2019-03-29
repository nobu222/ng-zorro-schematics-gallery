import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker-mode',
  templateUrl: './date-picker-mode.component.html',
  styleUrls: ['./date-picker-mode.component.css']
})
export class DatePickerModeComponent {
  dateMode = 'time';

  handleDateOpenChange(open: boolean): void {
    if (open) {
      this.dateMode = 'time';
    }
  }

  handleDatePanelChange(mode: string): void {
    console.log('handleDatePanelChange: ', mode);
  }
}
