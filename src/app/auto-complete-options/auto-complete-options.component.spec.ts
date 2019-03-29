import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteOptionsComponent } from './auto-complete-options.component';

describe('AutoCompleteOptionsComponent', () => {
  let component: AutoCompleteOptionsComponent;
  let fixture: ComponentFixture<AutoCompleteOptionsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
