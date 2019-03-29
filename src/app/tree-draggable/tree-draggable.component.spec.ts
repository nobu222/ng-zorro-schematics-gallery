import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeDraggableComponent } from './tree-draggable.component';

describe('TreeDraggableComponent', () => {
  let component: TreeDraggableComponent;
  let fixture: ComponentFixture<TreeDraggableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDraggableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
