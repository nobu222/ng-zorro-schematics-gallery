import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AutoCompleteBasicComponent } from './auto-complete-basic.component';

describe('AutoCompleteBasicComponent', () => {
  let component: AutoCompleteBasicComponent;
  let fixture: ComponentFixture<AutoCompleteBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
