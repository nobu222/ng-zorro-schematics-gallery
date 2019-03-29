import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteUncertainCategoryComponent } from './auto-complete-uncertain-category.component';

describe('AutoCompleteUncertainCategoryComponent', () => {
  let component: AutoCompleteUncertainCategoryComponent;
  let fixture: ComponentFixture<AutoCompleteUncertainCategoryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteUncertainCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteUncertainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
