import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonChildrenComponent } from './skeleton-children.component';

describe('SkeletonChildrenComponent', () => {
  let component: SkeletonChildrenComponent;
  let fixture: ComponentFixture<SkeletonChildrenComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonChildrenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
