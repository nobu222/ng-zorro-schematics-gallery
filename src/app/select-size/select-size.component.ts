import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-size',
  templateUrl: './select-size.component.html'
})
export class SelectSizeComponent implements OnInit {
  listOfOption: Array<{ label: string; value: string }> = [];
  size = 'default';
  singleValue = 'a10';
  multipleValue = ['a10', 'c12'];
  tagValue = ['a10', 'c12', 'tag'];

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
