import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-customized-icon',
  templateUrl: './tree-customized-icon.component.html'
})
export class TreeCustomizedIconComponent implements OnInit {
  nodes = [
    {
      title: 'parent 1',
      key: '100',
      expanded: true,
      icon: 'anticon anticon-smile-o',
      children: [
        { title: 'leaf', key: '1001', icon: 'anticon anticon-meh-o', isLeaf: true },
        { title: 'leaf', key: '1002', icon: 'anticon anticon-frown-o', isLeaf: true }
      ]
    }
  ];

  ngOnInit(): void {}
}
