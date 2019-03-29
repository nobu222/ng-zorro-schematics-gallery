import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonComplexComponent } from './skeleton-complex.component';

describe('SkeletonComplexComponent', () => {
  let component: SkeletonComplexComponent;
  let fixture: ComponentFixture<SkeletonComplexComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonComplexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
