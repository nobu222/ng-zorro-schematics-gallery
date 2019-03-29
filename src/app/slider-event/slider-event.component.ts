import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-event',
  templateUrl: './slider-event.component.html'
})
export class SliderEventComponent {
  singleValue = 30;
  rangeValue = [20, 50];

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }

  onAfterChange(value: number): void {
    console.log(`onAfterChange: ${value}`);
  }
}
