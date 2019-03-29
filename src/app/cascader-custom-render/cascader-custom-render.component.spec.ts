import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderCustomRenderComponent } from './cascader-custom-render.component';

describe('CascaderCustomRenderComponent', () => {
  let component: CascaderCustomRenderComponent;
  let fixture: ComponentFixture<CascaderCustomRenderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderCustomRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderCustomRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
