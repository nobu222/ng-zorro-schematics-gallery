import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticUnitComponent } from './statistic-unit.component';

describe('StatisticUnitComponent', () => {
  let component: StatisticUnitComponent;
  let fixture: ComponentFixture<StatisticUnitComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
