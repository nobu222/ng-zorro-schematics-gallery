import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormLayoutComponent } from './form-layout.component';

describe('FormLayoutComponent', () => {
  let component: FormLayoutComponent;
  let fixture: ComponentFixture<FormLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
