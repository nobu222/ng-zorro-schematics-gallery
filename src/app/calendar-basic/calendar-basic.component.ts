import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-basic',
  templateUrl: './calendar-basic.component.html'
})
export class CalendarBasicComponent {
  date = new Date(2012, 11, 21);
  mode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }
}
