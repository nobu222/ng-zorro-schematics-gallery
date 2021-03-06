import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressDashboardComponent } from './progress-dashboard.component';

describe('ProgressDashboardComponent', () => {
  let component: ProgressDashboardComponent;
  let fixture: ComponentFixture<ProgressDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
