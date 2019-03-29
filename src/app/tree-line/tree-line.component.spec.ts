import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeLineComponent } from './tree-line.component';

describe('TreeLineComponent', () => {
  let component: TreeLineComponent;
  let fixture: ComponentFixture<TreeLineComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
