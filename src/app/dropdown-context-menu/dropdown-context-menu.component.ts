import { Component, TemplateRef } from '@angular/core';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';

@Component({
  selector: 'app-dropdown-context-menu',
  templateUrl: './dropdown-context-menu.component.html',
  styles: []
})
export class DropdownContextMenuComponent {
  private dropdown: NzDropdownContextComponent;

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  close(e: NzMenuItemDirective): void {
    console.log(e);
    this.dropdown.close();
  }

  constructor(private nzDropdownService: NzDropdownService) {}
}
