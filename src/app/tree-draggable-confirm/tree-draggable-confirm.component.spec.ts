import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeDraggableConfirmComponent } from './tree-draggable-confirm.component';

describe('TreeDraggableConfirmComponent', () => {
  let component: TreeDraggableConfirmComponent;
  let fixture: ComponentFixture<TreeDraggableConfirmComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDraggableConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDraggableConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
