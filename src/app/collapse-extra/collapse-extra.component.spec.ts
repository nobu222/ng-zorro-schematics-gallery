import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseExtraComponent } from './collapse-extra.component';

describe('CollapseExtraComponent', () => {
  let component: CollapseExtraComponent;
  let fixture: ComponentFixture<CollapseExtraComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
