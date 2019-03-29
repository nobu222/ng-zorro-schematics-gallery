import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseBasicComponent } from './collapse-basic.component';

describe('CollapseBasicComponent', () => {
  let component: CollapseBasicComponent;
  let fixture: ComponentFixture<CollapseBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
