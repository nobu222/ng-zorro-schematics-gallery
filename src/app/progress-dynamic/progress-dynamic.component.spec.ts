import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressDynamicComponent } from './progress-dynamic.component';

describe('ProgressDynamicComponent', () => {
  let component: ProgressDynamicComponent;
  let fixture: ComponentFixture<ProgressDynamicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
