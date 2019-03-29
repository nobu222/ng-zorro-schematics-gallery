import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeCustomizedIconComponent } from './tree-customized-icon.component';

describe('TreeCustomizedIconComponent', () => {
  let component: TreeCustomizedIconComponent;
  let fixture: ComponentFixture<TreeCustomizedIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeCustomizedIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeCustomizedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
