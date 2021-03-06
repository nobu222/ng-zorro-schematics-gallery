import { Component, TemplateRef } from '@angular/core';
import {
  NzDropdownContextComponent,
  NzDropdownService,
  NzFormatEmitEvent,
  NzTreeNode
} from 'ng-zorro-antd';

@Component({
  selector: 'app-tree-directory',
  templateUrl: './tree-directory.component.html',
  styleUrls: ['./tree-directory.component.css']
})

export class TreeDirectoryComponent {
  dropdown: NzDropdownContextComponent;
  // actived node
  activedNode: NzTreeNode;
  nodes = [ {
    title   : 'parent 0',
    key     : '100',
    author  : 'NG ZORRO',
    expanded: true,
    children: [
      { title: 'leaf 0-0', key: '1000', author: 'NG ZORRO', isLeaf: true },
      { title: 'leaf 0-1', key: '1001', author: 'NG ZORRO', isLeaf: true }
    ]
  }, {
    title   : 'parent 1',
    key     : '101',
    author  : 'NG ZORRO',
    children: [
      { title: 'leaf 1-0', key: '1010', author: 'NG ZORRO', isLeaf: true },
      { title: 'leaf 1-1', key: '1011', author: 'NG ZORRO', isLeaf: true }
    ]
  } ];

  openFolder(data: NzTreeNode | Required<NzFormatEmitEvent>): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    this.activedNode = data.node!;
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  selectDropdown(): void {
    this.dropdown.close();
    // do something
  }

  constructor(private nzDropdownService: NzDropdownService) {
  }
}
