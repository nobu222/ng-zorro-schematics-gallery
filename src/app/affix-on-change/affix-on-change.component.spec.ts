import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AffixOnChangeComponent } from './affix-on-change.component';

describe('AffixOnChangeComponent', () => {
  let component: AffixOnChangeComponent;
  let fixture: ComponentFixture<AffixOnChangeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AffixOnChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffixOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
