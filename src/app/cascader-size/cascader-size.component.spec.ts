import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderSizeComponent } from './cascader-size.component';

describe('CascaderSizeComponent', () => {
  let component: CascaderSizeComponent;
  let fixture: ComponentFixture<CascaderSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
