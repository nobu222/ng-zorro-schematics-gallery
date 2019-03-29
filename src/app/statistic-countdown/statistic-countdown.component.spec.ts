import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticCountdownComponent } from './statistic-countdown.component';

describe('StatisticCountdownComponent', () => {
  let component: StatisticCountdownComponent;
  let fixture: ComponentFixture<StatisticCountdownComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticCountdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
