import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-basic',
  templateUrl: './slider-basic.component.html'
})
export class SliderBasicComponent {
  disabled = false;
  value1 = 30;
  value2 = [20, 50];
}
