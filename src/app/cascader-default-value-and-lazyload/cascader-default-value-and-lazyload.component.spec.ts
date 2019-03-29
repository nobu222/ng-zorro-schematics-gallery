import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderDefaultValueAndLazyloadComponent } from './cascader-default-value-and-lazyload.component';

describe('CascaderDefaultValueAndLazyloadComponent', () => {
  let component: CascaderDefaultValueAndLazyloadComponent;
  let fixture: ComponentFixture<CascaderDefaultValueAndLazyloadComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderDefaultValueAndLazyloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderDefaultValueAndLazyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
