import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-checkable',
  templateUrl: './tag-checkable.component.html'
})
export class TagCheckableComponent {
  checkChange(e: boolean): void {
    console.log(e);
  }
}
