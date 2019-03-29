import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeBasicControlledComponent } from './tree-basic-controlled.component';

describe('TreeBasicControlledComponent', () => {
  let component: TreeBasicControlledComponent;
  let fixture: ComponentFixture<TreeBasicControlledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeBasicControlledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeBasicControlledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
