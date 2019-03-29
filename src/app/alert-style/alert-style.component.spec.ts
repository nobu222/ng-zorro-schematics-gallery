import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertStyleComponent } from './alert-style.component';

describe('AlertStyleComponent', () => {
  let component: AlertStyleComponent;
  let fixture: ComponentFixture<AlertStyleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertStyleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
