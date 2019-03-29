import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertClosableComponent } from './alert-closable.component';

describe('AlertClosableComponent', () => {
  let component: AlertClosableComponent;
  let fixture: ComponentFixture<AlertClosableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertClosableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertClosableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
