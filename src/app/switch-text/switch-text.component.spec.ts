import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchTextComponent } from './switch-text.component';

describe('SwitchTextComponent', () => {
  let component: SwitchTextComponent;
  let fixture: ComponentFixture<SwitchTextComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
