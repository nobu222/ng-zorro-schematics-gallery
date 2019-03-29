import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderChangeOnFunctionComponent } from './cascader-change-on-function.component';

describe('CascaderChangeOnFunctionComponent', () => {
  let component: CascaderChangeOnFunctionComponent;
  let fixture: ComponentFixture<CascaderChangeOnFunctionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderChangeOnFunctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderChangeOnFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
