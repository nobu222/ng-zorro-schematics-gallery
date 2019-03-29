import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownTriggerComponent } from './dropdown-trigger.component';

describe('DropdownTriggerComponent', () => {
  let component: DropdownTriggerComponent;
  let fixture: ComponentFixture<DropdownTriggerComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
