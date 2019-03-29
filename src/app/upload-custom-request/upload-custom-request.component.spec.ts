import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadCustomRequestComponent } from './upload-custom-request.component';

describe('UploadCustomRequestComponent', () => {
  let component: UploadCustomRequestComponent;
  let fixture: ComponentFixture<UploadCustomRequestComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCustomRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadCustomRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
