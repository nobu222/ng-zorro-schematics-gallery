import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeNoWrapperComponent } from './badge-no-wrapper.component';

describe('BadgeNoWrapperComponent', () => {
  let component: BadgeNoWrapperComponent;
  let fixture: ComponentFixture<BadgeNoWrapperComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeNoWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeNoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
