import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CascaderModalComponent } from './cascader-modal.component';

describe('CascaderModalComponent', () => {
  let component: CascaderModalComponent;
  let fixture: ComponentFixture<CascaderModalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CascaderModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CascaderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
