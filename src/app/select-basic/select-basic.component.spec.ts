import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectBasicComponent } from './select-basic.component';

describe('SelectBasicComponent', () => {
  let component: SelectBasicComponent;
  let fixture: ComponentFixture<SelectBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
