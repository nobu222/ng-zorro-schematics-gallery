import { Component } from '@angular/core';
import { UploadFile } from 'ng-zorro-antd';

@Component({
  selector: 'app-upload-picture-card',
  templateUrl: './upload-picture-card.component.html',
  styleUrls: ['./upload-picture-card.component.css']
})
export class UploadPictureCardComponent {
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList = [
    {
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ];
  previewImage: string | undefined = '';
  previewVisible = false;

  constructor() {}

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
}
