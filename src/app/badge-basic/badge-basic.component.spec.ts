import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeBasicComponent } from './badge-basic.component';

describe('BadgeBasicComponent', () => {
  let component: BadgeBasicComponent;
  let fixture: ComponentFixture<BadgeBasicComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeBasicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
