import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderCustomFieldNamesComponent } from './cascader-custom-field-names.component';

describe('CascaderCustomFieldNamesComponent', () => {
  let component: CascaderCustomFieldNamesComponent;
  let fixture: ComponentFixture<CascaderCustomFieldNamesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderCustomFieldNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderCustomFieldNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
