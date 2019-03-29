import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchSizeComponent } from './switch-size.component';

describe('SwitchSizeComponent', () => {
  let component: SwitchSizeComponent;
  let fixture: ComponentFixture<SwitchSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
