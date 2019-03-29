import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-layout-custom-trigger',
  templateUrl: './layout-custom-trigger.component.html',
  styleUrls: ['./layout-custom-trigger.component.css']
})
export class LayoutCustomTriggerComponent {
  isCollapsed = false;
  triggerTemplate: TemplateRef<void> | null = null;
  @ViewChild('trigger') customTrigger: TemplateRef<void>;

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
}
