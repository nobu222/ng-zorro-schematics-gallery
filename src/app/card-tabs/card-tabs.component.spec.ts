import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardTabsComponent } from './card-tabs.component';

describe('CardTabsComponent', () => {
  let component: CardTabsComponent;
  let fixture: ComponentFixture<CardTabsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
