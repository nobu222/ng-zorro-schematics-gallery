import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeSearchComponent } from './tree-search.component';

describe('TreeSearchComponent', () => {
  let component: TreeSearchComponent;
  let fixture: ComponentFixture<TreeSearchComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
