import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputAddonComponent } from './input-addon.component';

describe('InputAddonComponent', () => {
  let component: InputAddonComponent;
  let fixture: ComponentFixture<InputAddonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAddonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
