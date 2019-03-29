import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { RateClearComponent } from './rate-clear.component';

describe('RateClearComponent', () => {
  let component: RateClearComponent;
  let fixture: ComponentFixture<RateClearComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RateClearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
