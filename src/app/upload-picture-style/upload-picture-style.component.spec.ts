import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadPictureStyleComponent } from './upload-picture-style.component';

describe('UploadPictureStyleComponent', () => {
  let component: UploadPictureStyleComponent;
  let fixture: ComponentFixture<UploadPictureStyleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPictureStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPictureStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
