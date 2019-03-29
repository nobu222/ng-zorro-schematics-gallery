import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressLineMiniComponent } from './progress-line-mini.component';

describe('ProgressLineMiniComponent', () => {
  let component: ProgressLineMiniComponent;
  let fixture: ComponentFixture<ProgressLineMiniComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressLineMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressLineMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
