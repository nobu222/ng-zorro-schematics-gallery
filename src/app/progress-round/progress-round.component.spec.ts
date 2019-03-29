import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressRoundComponent } from './progress-round.component';

describe('ProgressRoundComponent', () => {
  let component: ProgressRoundComponent;
  let fixture: ComponentFixture<ProgressRoundComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressRoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
