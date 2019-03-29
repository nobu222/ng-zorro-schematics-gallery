import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollapseCustomComponent } from './collapse-custom.component';

describe('CollapseCustomComponent', () => {
  let component: CollapseCustomComponent;
  let fixture: ComponentFixture<CollapseCustomComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
