import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BadgeChangeComponent } from './badge-change.component';

describe('BadgeChangeComponent', () => {
  let component: BadgeChangeComponent;
  let fixture: ComponentFixture<BadgeChangeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
