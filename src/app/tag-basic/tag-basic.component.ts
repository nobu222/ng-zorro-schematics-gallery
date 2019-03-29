import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-basic',
  templateUrl: './tag-basic.component.html',
  styles: []
})
export class TagBasicComponent {
  onClose(): void {
    console.log('tag was closed.');
  }

  afterClose(): void {
    console.log('after tag closed');
  }

  preventDefault(e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    console.log('tag can not be closed.');
  }
}
