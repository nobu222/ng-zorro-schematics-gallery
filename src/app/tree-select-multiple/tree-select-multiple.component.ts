import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-select-multiple',
  templateUrl: './tree-select-multiple.component.html'
})
export class TreeSelectMultipleComponent implements OnInit {
  value: string[] = [];
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'parent 1-0',
          key: '1001',
          children: [
            { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
            { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
          ]
        },
        {
          title: 'parent 1-1',
          key: '1002',
          children: [{ title: 'leaf 1-1-0', key: '10020', isLeaf: true }]
        }
      ]
    }
  ];

  onChange($event: string[]): void {
    console.log($event);
  }

  ngOnInit(): void {}
}
