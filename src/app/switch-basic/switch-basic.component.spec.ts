import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchBasicComponent } from './switch-basic.component';

describe('SwitchBasicComponent', () => {
  let component: SwitchBasicComponent;
  let fixture: ComponentFixture<SwitchBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
