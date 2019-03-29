import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeDirectoryComponent } from './tree-directory.component';

describe('TreeDirectoryComponent', () => {
  let component: TreeDirectoryComponent;
  let fixture: ComponentFixture<TreeDirectoryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
