import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseNoarrowComponent } from './collapse-noarrow.component';

describe('CollapseNoarrowComponent', () => {
  let component: CollapseNoarrowComponent;
  let fixture: ComponentFixture<CollapseNoarrowComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseNoarrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseNoarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
