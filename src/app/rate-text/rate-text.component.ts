import { Component } from '@angular/core';

@Component({
  selector: 'app-rate-text',
  templateUrl: './rate-text.component.html'
})
export class RateTextComponent {
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;
}
