import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatePickerDateRenderComponent } from './date-picker-date-render.component';

describe('DatePickerDateRenderComponent', () => {
  let component: DatePickerDateRenderComponent;
  let fixture: ComponentFixture<DatePickerDateRenderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerDateRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerDateRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
