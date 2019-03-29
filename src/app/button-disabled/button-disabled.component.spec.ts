import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonDisabledComponent } from './button-disabled.component';

describe('ButtonDisabledComponent', () => {
  let component: ButtonDisabledComponent;
  let fixture: ComponentFixture<ButtonDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
