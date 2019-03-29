import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderReactiveFormComponent } from './cascader-reactive-form.component';

describe('CascaderReactiveFormComponent', () => {
  let component: CascaderReactiveFormComponent;
  let fixture: ComponentFixture<CascaderReactiveFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
