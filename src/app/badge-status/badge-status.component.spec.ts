import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeStatusComponent } from './badge-status.component';

describe('BadgeStatusComponent', () => {
  let component: BadgeStatusComponent;
  let fixture: ComponentFixture<BadgeStatusComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
