import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SkeletonBasicComponent } from './skeleton-basic.component';

describe('SkeletonBasicComponent', () => {
  let component: SkeletonBasicComponent;
  let fixture: ComponentFixture<SkeletonBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
