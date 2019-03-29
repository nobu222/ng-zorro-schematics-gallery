import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadFilterComponent } from './upload-filter.component';

describe('UploadFilterComponent', () => {
  let component: UploadFilterComponent;
  let fixture: ComponentFixture<UploadFilterComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
