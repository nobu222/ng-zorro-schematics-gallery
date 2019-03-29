import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderLazyComponent } from './cascader-lazy.component';

describe('CascaderLazyComponent', () => {
  let component: CascaderLazyComponent;
  let fixture: ComponentFixture<CascaderLazyComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderLazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
