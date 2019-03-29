import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderBasicComponent } from './cascader-basic.component';

describe('CascaderBasicComponent', () => {
  let component: CascaderBasicComponent;
  let fixture: ComponentFixture<CascaderBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
