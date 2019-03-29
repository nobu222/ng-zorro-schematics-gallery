import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticCardComponent } from './statistic-card.component';

describe('StatisticCardComponent', () => {
  let component: StatisticCardComponent;
  let fixture: ComponentFixture<StatisticCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
