import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderChangeOnSelectComponent } from './cascader-change-on-select.component';

describe('CascaderChangeOnSelectComponent', () => {
  let component: CascaderChangeOnSelectComponent;
  let fixture: ComponentFixture<CascaderChangeOnSelectComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderChangeOnSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderChangeOnSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
