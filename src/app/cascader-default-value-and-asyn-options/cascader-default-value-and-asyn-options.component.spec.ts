import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderDefaultValueAndAsynOptionsComponent } from './cascader-default-value-and-asyn-options.component';

describe('CascaderDefaultValueAndAsynOptionsComponent', () => {
  let component: CascaderDefaultValueAndAsynOptionsComponent;
  let fixture: ComponentFixture<CascaderDefaultValueAndAsynOptionsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderDefaultValueAndAsynOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderDefaultValueAndAsynOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
