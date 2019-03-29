import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-flex-order',
  templateUrl: './grid-flex-order.component.html',
  styles: []
})
export class GridFlexOrderComponent implements OnInit {
  orderList = [1, 2, 3, 4];

  ngOnInit(): void {
    setTimeout(() => {
      this.orderList = [...this.orderList.reverse()];
    }, 10000);
  }
}
