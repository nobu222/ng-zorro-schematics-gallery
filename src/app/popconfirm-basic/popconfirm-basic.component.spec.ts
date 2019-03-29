import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopconfirmBasicComponent } from './popconfirm-basic.component';

describe('PopconfirmBasicComponent', () => {
  let component: PopconfirmBasicComponent;
  let fixture: ComponentFixture<PopconfirmBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopconfirmBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopconfirmBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
