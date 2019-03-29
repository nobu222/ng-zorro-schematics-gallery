import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectCustomContentComponent } from './select-custom-content.component';

describe('SelectCustomContentComponent', () => {
  let component: SelectCustomContentComponent;
  let fixture: ComponentFixture<SelectCustomContentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCustomContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
