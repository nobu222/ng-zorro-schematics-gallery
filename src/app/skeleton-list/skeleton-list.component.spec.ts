import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonListComponent } from './skeleton-list.component';

describe('SkeletonListComponent', () => {
  let component: SkeletonListComponent;
  let fixture: ComponentFixture<SkeletonListComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
