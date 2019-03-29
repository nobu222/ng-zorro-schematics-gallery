import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteCustomComponent } from './auto-complete-custom.component';

describe('AutoCompleteCustomComponent', () => {
  let component: AutoCompleteCustomComponent;
  let fixture: ComponentFixture<AutoCompleteCustomComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
