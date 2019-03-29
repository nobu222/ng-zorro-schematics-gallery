import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar-select',
  templateUrl: './calendar-select.component.html'
})
export class CalendarSelectComponent {
  selectedValue = new Date('2017-01-25');

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
}
