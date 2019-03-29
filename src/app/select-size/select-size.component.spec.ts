import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectSizeComponent } from './select-size.component';

describe('SelectSizeComponent', () => {
  let component: SelectSizeComponent;
  let fixture: ComponentFixture<SelectSizeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
