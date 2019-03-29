import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderHoverComponent } from './cascader-hover.component';

describe('CascaderHoverComponent', () => {
  let component: CascaderHoverComponent;
  let fixture: ComponentFixture<CascaderHoverComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
