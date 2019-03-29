import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeSelectBasicComponent } from './tree-select-basic.component';

describe('TreeSelectBasicComponent', () => {
  let component: TreeSelectBasicComponent;
  let fixture: ComponentFixture<TreeSelectBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSelectBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
