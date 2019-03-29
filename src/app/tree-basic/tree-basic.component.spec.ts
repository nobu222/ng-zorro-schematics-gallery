import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeBasicComponent } from './tree-basic.component';

describe('TreeBasicComponent', () => {
  let component: TreeBasicComponent;
  let fixture: ComponentFixture<TreeBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
