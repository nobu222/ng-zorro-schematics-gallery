import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertDescriptionComponent } from './alert-description.component';

describe('AlertDescriptionComponent', () => {
  let component: AlertDescriptionComponent;
  let fixture: ComponentFixture<AlertDescriptionComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
