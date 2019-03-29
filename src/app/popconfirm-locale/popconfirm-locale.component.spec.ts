import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopconfirmLocaleComponent } from './popconfirm-locale.component';

describe('PopconfirmLocaleComponent', () => {
  let component: PopconfirmLocaleComponent;
  let fixture: ComponentFixture<PopconfirmLocaleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopconfirmLocaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopconfirmLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
