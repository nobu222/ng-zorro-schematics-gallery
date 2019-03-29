import { Component } from '@angular/core';

@Component({
  selector: 'app-time-picker-addon',
  templateUrl: './time-picker-addon.component.html'
})
export class TimePickerAddonComponent {
  time: Date | null = null;
}
