import { Component } from '@angular/core';
import * as differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import * as setHours from 'date-fns/set_hours';

@Component({
  selector: 'app-date-picker-disabled-date',
  templateUrl: './date-picker-disabled-date.component.html',
  styleUrls: ['./date-picker-disabled-date.component.css']
})
export class DatePickerDisabledDateComponent {
  today = new Date();
  timeDefaultValue = setHours(new Date(), 0);

  range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(current, this.today) > 0;
  };

  disabledDateTime = (): object => {
    return {
      nzDisabledHours: () => this.range(0, 24).splice(4, 20),
      nzDisabledMinutes: () => this.range(30, 60),
      nzDisabledSeconds: () => [55, 56]
    };
  };

  disabledRangeTime = (_value: Date[], type: 'start' | 'end'): object => {
    if (type === 'start') {
      return {
        nzDisabledHours: () => this.range(0, 60).splice(4, 20),
        nzDisabledMinutes: () => this.range(30, 60),
        nzDisabledSeconds: () => [55, 56]
      };
    }
    return {
      nzDisabledHours: () => this.range(0, 60).splice(20, 4),
      nzDisabledMinutes: () => this.range(0, 31),
      nzDisabledSeconds: () => [55, 56]
    };
  };
}
