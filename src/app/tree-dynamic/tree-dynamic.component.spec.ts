import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeDynamicComponent } from './tree-dynamic.component';

describe('TreeDynamicComponent', () => {
  let component: TreeDynamicComponent;
  let fixture: ComponentFixture<TreeDynamicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
