import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-upload-drag',
  templateUrl: './upload-drag.component.html'
})
export class UploadDragComponent {
  constructor(private msg: NzMessageService) {}
  // tslint:disable-next-line:no-any
  handleChange({ file, fileList }: { [key: string]: any }): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
