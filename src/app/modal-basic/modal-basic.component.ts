import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styles: []
})
export class ModalBasicComponent {
  isVisible = false;

  constructor() {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
