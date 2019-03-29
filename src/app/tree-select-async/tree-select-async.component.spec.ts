import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeSelectAsyncComponent } from './tree-select-async.component';

describe('TreeSelectAsyncComponent', () => {
  let component: TreeSelectAsyncComponent;
  let fixture: ComponentFixture<TreeSelectAsyncComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSelectAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
