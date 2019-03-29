import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AffixBasicComponent } from './affix-basic.component';

describe('AffixBasicComponent', () => {
  let component: AffixBasicComponent;
  let fixture: ComponentFixture<AffixBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AffixBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffixBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
