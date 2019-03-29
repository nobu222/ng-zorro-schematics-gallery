import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SwitchLoadingComponent } from './switch-loading.component';

describe('SwitchLoadingComponent', () => {
  let component: SwitchLoadingComponent;
  let fixture: ComponentFixture<SwitchLoadingComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
