import { Component } from '@angular/core';
import * as endOfMonth from 'date-fns/end_of_month';

@Component({
  selector: 'app-date-picker-presetted-ranges',
  templateUrl: './date-picker-presetted-ranges.component.html',
  styleUrls: ['./date-picker-presetted-ranges.component.css']
})
export class DatePickerPresettedRangesComponent {
  ranges1 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };
  ranges2 = { Today: [new Date(), new Date()], 'This Month': [new Date(), endOfMonth(new Date())] };

  onChange(result: Date[]): void {
    console.log('From: ', result[0], ', to: ', result[1]);
  }
}
