import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-customize',
  templateUrl: './empty-customize.component.html',
  styles: []
})
export class EmptyCustomizeComponent {
  onClick(): void {
    console.log('clicked');
  }
}
