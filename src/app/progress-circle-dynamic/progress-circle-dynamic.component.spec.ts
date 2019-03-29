import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressCircleDynamicComponent } from './progress-circle-dynamic.component';

describe('ProgressCircleDynamicComponent', () => {
  let component: ProgressCircleDynamicComponent;
  let fixture: ComponentFixture<ProgressCircleDynamicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressCircleDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressCircleDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
