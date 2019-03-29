import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectHideSelectedComponent } from './select-hide-selected.component';

describe('SelectHideSelectedComponent', () => {
  let component: SelectHideSelectedComponent;
  let fixture: ComponentFixture<SelectHideSelectedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectHideSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectHideSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
