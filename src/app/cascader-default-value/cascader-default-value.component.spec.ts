import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderDefaultValueComponent } from './cascader-default-value.component';

describe('CascaderDefaultValueComponent', () => {
  let component: CascaderDefaultValueComponent;
  let fixture: ComponentFixture<CascaderDefaultValueComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderDefaultValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderDefaultValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
