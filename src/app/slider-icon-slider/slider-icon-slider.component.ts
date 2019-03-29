import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-icon-slider',
  templateUrl: './slider-icon-slider.component.html',
  styleUrls: ['./slider-icon-slider.component.css']
})
export class SliderIconSliderComponent implements OnInit {
  min = 0;
  max = 20;
  mid = parseFloat(((this.max - this.min) / 2).toFixed(5));
  preHighLight = false;
  nextHighLight = false;
  _sliderValue = 0;

  set sliderValue(value: number) {
    this._sliderValue = value;
    this.highlightIcon();
  }

  get sliderValue(): number {
    return this._sliderValue;
  }

  ngOnInit(): void {
    this.sliderValue = 0;
  }

  highlightIcon() {
    const lower = this._sliderValue >= this.mid;
    this.preHighLight = !lower;
    this.nextHighLight = lower;
  }
}
