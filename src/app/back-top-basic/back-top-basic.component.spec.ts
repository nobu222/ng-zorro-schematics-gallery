import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BackTopBasicComponent } from './back-top-basic.component';

describe('BackTopBasicComponent', () => {
  let component: BackTopBasicComponent;
  let fixture: ComponentFixture<BackTopBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BackTopBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackTopBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
