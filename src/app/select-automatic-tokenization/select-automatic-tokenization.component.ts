import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-automatic-tokenization',
  templateUrl: './select-automatic-tokenization.component.html'
})
export class SelectAutomaticTokenizationComponent implements OnInit {
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = null;

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }
}
