import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectAutomaticTokenizationComponent } from './select-automatic-tokenization.component';

describe('SelectAutomaticTokenizationComponent', () => {
  let component: SelectAutomaticTokenizationComponent;
  let fixture: ComponentFixture<SelectAutomaticTokenizationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAutomaticTokenizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAutomaticTokenizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
