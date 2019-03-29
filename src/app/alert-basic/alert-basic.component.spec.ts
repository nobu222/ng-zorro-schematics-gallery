import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertBasicComponent } from './alert-basic.component';

describe('AlertBasicComponent', () => {
  let component: AlertBasicComponent;
  let fixture: ComponentFixture<AlertBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
