import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderSearchComponent } from './cascader-search.component';

describe('CascaderSearchComponent', () => {
  let component: CascaderSearchComponent;
  let fixture: ComponentFixture<CascaderSearchComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
