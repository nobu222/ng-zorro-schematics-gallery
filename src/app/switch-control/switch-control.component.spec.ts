import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchControlComponent } from './switch-control.component';

describe('SwitchControlComponent', () => {
  let component: SwitchControlComponent;
  let fixture: ComponentFixture<SwitchControlComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
