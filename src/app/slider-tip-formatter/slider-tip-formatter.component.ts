import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-tip-formatter',
  templateUrl: './slider-tip-formatter.component.html'
})
export class SliderTipFormatterComponent {
  formatter(value: number): string {
    return `${value}%`;
  }
}
