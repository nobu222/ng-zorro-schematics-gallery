import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadManuallyComponent } from './upload-manually.component';

describe('UploadManuallyComponent', () => {
  let component: UploadManuallyComponent;
  let fixture: ComponentFixture<UploadManuallyComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadManuallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadManuallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
