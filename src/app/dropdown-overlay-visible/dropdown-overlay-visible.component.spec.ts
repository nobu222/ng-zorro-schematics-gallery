import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownOverlayVisibleComponent } from './dropdown-overlay-visible.component';

describe('DropdownOverlayVisibleComponent', () => {
  let component: DropdownOverlayVisibleComponent;
  let fixture: ComponentFixture<DropdownOverlayVisibleComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownOverlayVisibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownOverlayVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
