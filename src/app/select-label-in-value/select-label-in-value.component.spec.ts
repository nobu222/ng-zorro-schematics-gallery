import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectLabelInValueComponent } from './select-label-in-value.component';

describe('SelectLabelInValueComponent', () => {
  let component: SelectLabelInValueComponent;
  let fixture: ComponentFixture<SelectLabelInValueComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLabelInValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectLabelInValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
