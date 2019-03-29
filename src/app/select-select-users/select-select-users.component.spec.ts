import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectSelectUsersComponent } from './select-select-users.component';

describe('SelectSelectUsersComponent', () => {
  let component: SelectSelectUsersComponent;
  let fixture: ComponentFixture<SelectSelectUsersComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectSelectUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSelectUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
