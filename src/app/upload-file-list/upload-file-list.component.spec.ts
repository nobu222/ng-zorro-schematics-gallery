import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadFileListComponent } from './upload-file-list.component';

describe('UploadFileListComponent', () => {
  let component: UploadFileListComponent;
  let fixture: ComponentFixture<UploadFileListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFileListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
