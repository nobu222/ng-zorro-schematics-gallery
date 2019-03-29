import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxLayoutComponent } from './checkbox-layout.component';

describe('CheckboxLayoutComponent', () => {
  let component: CheckboxLayoutComponent;
  let fixture: ComponentFixture<CheckboxLayoutComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
