import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadPictureCardComponent } from './upload-picture-card.component';

describe('UploadPictureCardComponent', () => {
  let component: UploadPictureCardComponent;
  let fixture: ComponentFixture<UploadPictureCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadPictureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadPictureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
