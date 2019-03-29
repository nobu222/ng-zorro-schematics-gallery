import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertCloseTextComponent } from './alert-close-text.component';

describe('AlertCloseTextComponent', () => {
  let component: AlertCloseTextComponent;
  let fixture: ComponentFixture<AlertCloseTextComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertCloseTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertCloseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
