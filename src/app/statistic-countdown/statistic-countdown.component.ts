import { Component } from '@angular/core';

@Component({
  selector: 'app-statistic-countdown',
  templateUrl: './statistic-countdown.component.html'
})
export class StatisticCountdownComponent {
  deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
}
