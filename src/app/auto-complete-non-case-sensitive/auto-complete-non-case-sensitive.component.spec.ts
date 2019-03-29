import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteNonCaseSensitiveComponent } from './auto-complete-non-case-sensitive.component';

describe('AutoCompleteNonCaseSensitiveComponent', () => {
  let component: AutoCompleteNonCaseSensitiveComponent;
  let fixture: ComponentFixture<AutoCompleteNonCaseSensitiveComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteNonCaseSensitiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteNonCaseSensitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
