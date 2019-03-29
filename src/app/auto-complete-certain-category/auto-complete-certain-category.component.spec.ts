import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteCertainCategoryComponent } from './auto-complete-certain-category.component';

describe('AutoCompleteCertainCategoryComponent', () => {
  let component: AutoCompleteCertainCategoryComponent;
  let fixture: ComponentFixture<AutoCompleteCertainCategoryComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteCertainCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteCertainCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
