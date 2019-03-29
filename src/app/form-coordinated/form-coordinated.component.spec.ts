import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCoordinatedComponent } from './form-coordinated.component';

describe('FormCoordinatedComponent', () => {
  let component: FormCoordinatedComponent;
  let fixture: ComponentFixture<FormCoordinatedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCoordinatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCoordinatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
