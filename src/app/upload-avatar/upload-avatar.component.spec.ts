import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadAvatarComponent } from './upload-avatar.component';

describe('UploadAvatarComponent', () => {
  let component: UploadAvatarComponent;
  let fixture: ComponentFixture<UploadAvatarComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
