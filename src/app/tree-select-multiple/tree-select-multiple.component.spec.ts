import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeSelectMultipleComponent } from './tree-select-multiple.component';

describe('TreeSelectMultipleComponent', () => {
  let component: TreeSelectMultipleComponent;
  let fixture: ComponentFixture<TreeSelectMultipleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSelectMultipleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSelectMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
