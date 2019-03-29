import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertIconComponent } from './alert-icon.component';

describe('AlertIconComponent', () => {
  let component: AlertIconComponent;
  let fixture: ComponentFixture<AlertIconComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
