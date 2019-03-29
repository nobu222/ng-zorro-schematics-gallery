import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-basic',
  templateUrl: './carousel-basic.component.html',
  styleUrls: ['./carousel-basic.component.css']
})
export class CarouselBasicComponent {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
}
