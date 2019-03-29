import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-async',
  templateUrl: './modal-async.component.html',
  styles: []
})
export class ModalAsyncComponent {
  isVisible = false;
  isOkLoading = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
