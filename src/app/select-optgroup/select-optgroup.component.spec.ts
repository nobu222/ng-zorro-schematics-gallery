import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectOptgroupComponent } from './select-optgroup.component';

describe('SelectOptgroupComponent', () => {
  let component: SelectOptgroupComponent;
  let fixture: ComponentFixture<SelectOptgroupComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectOptgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectOptgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
