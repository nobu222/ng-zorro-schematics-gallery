import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadBasicComponent } from './upload-basic.component';

describe('UploadBasicComponent', () => {
  let component: UploadBasicComponent;
  let fixture: ComponentFixture<UploadBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
