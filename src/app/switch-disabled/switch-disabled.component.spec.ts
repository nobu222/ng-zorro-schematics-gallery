import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchDisabledComponent } from './switch-disabled.component';

describe('SwitchDisabledComponent', () => {
  let component: SwitchDisabledComponent;
  let fixture: ComponentFixture<SwitchDisabledComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
