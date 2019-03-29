import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadDirectoryComponent } from './upload-directory.component';

describe('UploadDirectoryComponent', () => {
  let component: UploadDirectoryComponent;
  let fixture: ComponentFixture<UploadDirectoryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
