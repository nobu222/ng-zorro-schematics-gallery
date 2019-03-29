import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTimeRelatedControlsComponent } from './form-time-related-controls.component';

describe('FormTimeRelatedControlsComponent', () => {
  let component: FormTimeRelatedControlsComponent;
  let fixture: ComponentFixture<FormTimeRelatedControlsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTimeRelatedControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTimeRelatedControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
