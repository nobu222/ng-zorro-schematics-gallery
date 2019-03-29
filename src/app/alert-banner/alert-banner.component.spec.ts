import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertBannerComponent } from './alert-banner.component';

describe('AlertBannerComponent', () => {
  let component: AlertBannerComponent;
  let fixture: ComponentFixture<AlertBannerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
