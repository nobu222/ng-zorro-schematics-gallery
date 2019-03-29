import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopconfirmCustomIconComponent } from './popconfirm-custom-icon.component';

describe('PopconfirmCustomIconComponent', () => {
  let component: PopconfirmCustomIconComponent;
  let fixture: ComponentFixture<PopconfirmCustomIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopconfirmCustomIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopconfirmCustomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
