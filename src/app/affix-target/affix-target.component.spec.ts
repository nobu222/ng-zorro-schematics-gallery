import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { AffixTargetComponent } from './affix-target.component';

describe('AffixTargetComponent', () => {
  let component: AffixTargetComponent;
  let fixture: ComponentFixture<AffixTargetComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AffixTargetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffixTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
