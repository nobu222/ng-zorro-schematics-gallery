import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormAdvancedSearchComponent } from './form-advanced-search.component';

describe('FormAdvancedSearchComponent', () => {
  let component: FormAdvancedSearchComponent;
  let fixture: ComponentFixture<FormAdvancedSearchComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdvancedSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAdvancedSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
