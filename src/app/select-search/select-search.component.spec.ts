import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectSearchComponent } from './select-search.component';

describe('SelectSearchComponent', () => {
  let component: SelectSearchComponent;
  let fixture: ComponentFixture<SelectSearchComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
