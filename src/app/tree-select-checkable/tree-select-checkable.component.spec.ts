import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeSelectCheckableComponent } from './tree-select-checkable.component';

describe('TreeSelectCheckableComponent', () => {
  let component: TreeSelectCheckableComponent;
  let fixture: ComponentFixture<TreeSelectCheckableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectCheckableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSelectCheckableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
