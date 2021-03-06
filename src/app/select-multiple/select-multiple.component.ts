import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-multiple',
  templateUrl: './select-multiple.component.html'
})
export class SelectMultipleComponent implements OnInit {
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfSelectedValue = ['a10', 'c12'];

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
