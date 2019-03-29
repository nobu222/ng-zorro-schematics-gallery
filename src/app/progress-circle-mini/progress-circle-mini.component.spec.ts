import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressCircleMiniComponent } from './progress-circle-mini.component';

describe('ProgressCircleMiniComponent', () => {
  let component: ProgressCircleMiniComponent;
  let fixture: ComponentFixture<ProgressCircleMiniComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressCircleMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressCircleMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
