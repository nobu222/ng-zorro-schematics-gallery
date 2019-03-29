import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectSearchBoxComponent } from './select-search-box.component';

describe('SelectSearchBoxComponent', () => {
  let component: SelectSearchBoxComponent;
  let fixture: ComponentFixture<SelectSearchBoxComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
