import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownContextMenuComponent } from './dropdown-context-menu.component';

describe('DropdownContextMenuComponent', () => {
  let component: DropdownContextMenuComponent;
  let fixture: ComponentFixture<DropdownContextMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownContextMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
