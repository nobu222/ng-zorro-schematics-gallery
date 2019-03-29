import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonActiveComponent } from './skeleton-active.component';

describe('SkeletonActiveComponent', () => {
  let component: SkeletonActiveComponent;
  let fixture: ComponentFixture<SkeletonActiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
