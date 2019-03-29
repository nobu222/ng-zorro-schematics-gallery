import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderDisabledComponent } from './cascader-disabled.component';

describe('CascaderDisabledComponent', () => {
  let component: CascaderDisabledComponent;
  let fixture: ComponentFixture<CascaderDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
