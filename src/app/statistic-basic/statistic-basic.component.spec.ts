import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatisticBasicComponent } from './statistic-basic.component';

describe('StatisticBasicComponent', () => {
  let component: StatisticBasicComponent;
  let fixture: ComponentFixture<StatisticBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
