import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-slide',
  templateUrl: './tabs-slide.component.html',
  styles: []
})
export class TabsSlideComponent implements OnInit {
  tabs: any[] = [];
  nzTabPosition = 'top';
  selectedIndex = 0;

  /* tslint:disable-next-line:no-any */
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 11; i++) {
      this.tabs.push({
        name: `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }
  }
}
